import { useRef } from "react";
import Input from "./Input";
import classes from "./CardItemForm.module.css";

function CardItemForm(props) {
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const value = amountRef.current.value;
    const enteredValue = +value;
    console.log(enteredValue);

    if (enteredValue === 0 || enteredValue < 0 || enteredValue > 5) {
      return;
    }
    props.addCartItem(enteredValue);
  };

  return (
    <form className={classes.input} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">cart it</button>
    </form>
  );
}

export default CardItemForm;
