import "./ModalTab.css";

export default function ModalTab({ children, style, onClick, isClicked }) {
  return <li className={`modal-tab ${isClicked && 'clicked'}`} style={style} onClick={onClick}>{children}</li>;
}
