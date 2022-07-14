import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CardItem.module.css";
import CardItemForm from "./CardItemForm";

function CardItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addCartItem = (enteredValue) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredValue,
      price: props.price,
    });
  };
  return (
    <li className={`${classes.cardItem} ${props.className}`}>
      <div className="first">
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className="second">
        <CardItemForm addCartItem={addCartItem} />
      </div>
    </li>
  );
}

export default CardItem;
