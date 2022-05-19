import "./Modal.css";
import ModalBackdrop from "./ModalBackdrop";
import Wrapper from "../Wrapper";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";

export default function Modal(props) {
  return (
    <ModalBackdrop>
      <Wrapper className="modal-wrapper">
        <ModalHeader />
        <ModalBody />
      </Wrapper>
    </ModalBackdrop>
  );
}
