import "./ModalHeader.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";
const ModalHeader = (props) => {
  return (
    <div className="modal-header">
      <div className="header__title">
        <span>Dariusz Menelowski</span>
        <span>#5596601</span>
      </div>
      <div className="header__options">
        <ul>
          <li>
            <MaterialIcon name="edit" />
          </li>
          <li className="options__delete">
            <MaterialIcon name="delete" />
          </li>
          <li className="options__save">
            <span>
                Zapisz
              <MaterialIcon name="save" />
            </span>
          </li>
          <li>
            <MaterialIcon name="close" />
          </li>
        </ul>
      </div>
      <div className="header__tabs">
        <ul>
            <li><div>Rezerwacja</div></li>
            <li><div>Klient</div></li>
        </ul>
      </div>
    </div>
  );
};

export default ModalHeader;
