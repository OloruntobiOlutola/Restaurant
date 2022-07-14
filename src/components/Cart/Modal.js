import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.toggleCart}></div>;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  const portal = document.getElementById("overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop toggleCart={props.toggleCart} />,
        portal
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portal
      )}
    </Fragment>
  );
}

export default Modal;
