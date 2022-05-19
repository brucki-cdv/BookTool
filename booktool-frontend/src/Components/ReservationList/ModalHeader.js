import "./ModalHeader.css";
import ModalHeaderTitle from "./ModalHeaderTitle";
import ModalHeaderOptions from "./ModalHeaderOptions";
import ModalHeaderTabs from "./ModalHeaderTabs";

export default function ModalHeader(props) {
  return (
    <div className="modal-header">
      <ModalHeaderTitle />
      <ModalHeaderOptions />
      <ModalHeaderTabs />
    </div>
  );
}
