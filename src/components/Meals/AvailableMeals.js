import React from "react";
import { DUMMY_MEALS } from "../../shared/data";
import Card from "../SharedUI/Card";
import CardItem from "../SharedUI/CardItem";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  const meals = DUMMY_MEALS.map((meal) => (
    <CardItem
      key={meal.id}
      id={meal.id}
      className={classes.meal}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </>
  );
}

export default AvailableMeals;
