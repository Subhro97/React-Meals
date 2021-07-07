import React, { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [stateIsValid, setStateIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5){
      setStateIsValid(false)
      return;
    }

    props.onAddCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          step: "1",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!stateIsValid && <p>Please enter valid Amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
