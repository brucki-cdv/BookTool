import "./ModalTabs.css";

export default function ModalTabs({children}) {
    return (
      <ul className="modal-tabs">
          {children}
      </ul>
    )
}