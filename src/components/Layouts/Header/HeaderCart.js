import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCart.module.css";

function HeaderCart(props) {
  const cartCtx = useContext(CartContext);
  const [bumpClass, setBumpClass] = useState(`${classes.button}`);
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumpClass(`${classes.button} ${classes.bump}`);

    const timer = setTimeout(() => {
      setBumpClass(`${classes.button}`);
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);

  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={bumpClass} onClick={props.toggleCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCart;
