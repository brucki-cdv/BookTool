import "./ModalContainer.css";

export default function ModalContainer(props) {
  return (
    <div className="modal-container" style={props.style}>
      {props.children}
    </div>
  );
}
