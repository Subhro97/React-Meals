import { useState } from 'react';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import ContextProvider from './store/ContextProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <ContextProvider>
      {cartIsShown && <Cart onHide={hideCartHandler}/>}
      <Header onShow={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </ContextProvider>
  );
}

export default App;
