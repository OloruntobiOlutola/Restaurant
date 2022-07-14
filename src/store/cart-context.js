import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItemHandler: (item) => {},
  removeItemHandler: (id) => {},
});

export default CartContext;
