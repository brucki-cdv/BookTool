import "./ModalControlItem.css";

export default function ModalControlItem(props) {
  return (
    <div
      className={`${"modal-control__item"} ${
        props.disabled && "modal-control__item--disabled"
      }`}
      onClick={!props.disabled && props.onClick}
    >
      <span>{props.children}</span>
    </div>
  );
}
