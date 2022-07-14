import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    if (updatedTotalAmount < 0) {
      updatedTotalAmount = 0;
    }
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedTotalAmount = state.totalAmount - existingItem.price;
    if (updatedTotalAmount < 0) {
      updatedTotalAmount = 0;
    }
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== existingItem.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return initialCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

  const addItemHandler = (item) => {
    dispatchCart({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCart({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
