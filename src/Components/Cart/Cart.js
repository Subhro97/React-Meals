import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartRemoveHandler.bind(null,item.id)}
          onAdd={cartAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHide}>Cancel</button>
        {hasItem && <button>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
