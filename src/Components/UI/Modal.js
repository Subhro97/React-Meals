import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}/>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  const portalItem = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalItem)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalItem
      )}
    </React.Fragment>
  );
};

export default Modal;
