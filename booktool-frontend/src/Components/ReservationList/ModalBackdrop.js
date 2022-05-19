import "./ModalBackdrop.css";

export default function ModalBackdrop(props) {
  return <div className="modal-backdrop">{props.children}</div>;
}
