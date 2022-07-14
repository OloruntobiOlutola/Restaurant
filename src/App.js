import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <CartProvider>
      {openCart && <Cart toggleCart={toggleCart} />}
      <Header toggleCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
