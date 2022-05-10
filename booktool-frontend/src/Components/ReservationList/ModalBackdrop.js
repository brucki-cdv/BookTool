import "./ModalBackdrop.css";
import ModalWrapper from "./ModalWrapper";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

const ModalBackdrop = (props) => {
  return (
    <div className="modal-backdrop">
     {props.children}
    </div>
  );
};

export default ModalBackdrop;
