import "./Modal.css";
import ModalBackdrop from "./ModalBackdrop";
import ReactDOM from "react-dom";
import React from "react";
const Modal = (props) => {
  return (
    <React.Fragment>
      {props.isOpen &&
        ReactDOM.createPortal(
          <ModalBackdrop/>,
          document.getElementById("modal-root")
        )}
    </React.Fragment>
  );
};

export default Modal;
