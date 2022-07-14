import { Fragment } from "react";
import mealImage from "../../../assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCart toggleCart={props.toggleCart} />
      </header>
      <div className={classes.image}>
        <img src={mealImage} alt="a fantastic meal table" />
      </div>
    </Fragment>
  );
}

export default Header;
