import "./ModalHeader.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { deleteRecord } from "../../Actions/modal";
const ModalHeader = (props) => {
  const dispatch = useDispatch();
  const { reservationId, clientId, test } = useSelector((state) => state.modal);

  const [activeTab, setActiveTab] = useState({
    reservation: "active",
    client: null,
  });

  useEffect(() => {
    dispatch({ type: "MODAL_OPEN_RESERVATION" });
  }, []);

  const onReservationClick = () => {
    dispatch({ type: "MODAL_OPEN_RESERVATION" });
    setActiveTab({ client: null, reservation: "active" });
  };

  const onClientClick = () => {
    dispatch({ type: "MODAL_OPEN_CLIENT" });
    setActiveTab({ client: "active", reservation: null });
  };

  const onDeleteClick = () => {
    dispatch(deleteRecord(reservationId))
    window.location.reload(false)
  }

  return (
    <div className="modal-header">
      <div className="header__title">
        <span>{clientId ? clientId : "Rezerwacja nr.:"}</span>
        <span>{reservationId}</span>
      </div>
      <div className="header__options">
        <ul>
          <li onClick={() => dispatch({ type: "MODAL_EDIT_DATA" })}>
            <MaterialIcon name="edit" />
          </li>
          <li
            className="options__delete"
            onClick={onDeleteClick}
          >
            <MaterialIcon name="delete" />
          </li>
          <li
            className="options__save"
            onClick={() => dispatch({ type: "MODAL_SAVE_DATA" })}
          >
            <span>
              Zapisz
              <MaterialIcon name="save" />
            </span>
          </li>
          <li onClick={() => dispatch({ type: "MODAL_CLOSE" })}>
            <MaterialIcon name="close" />
          </li>
        </ul>
      </div>
      <div className="header__tabs">
        <ul>
          <li
            onClick={onReservationClick}
            className={`${activeTab.reservation}`}
          >
            <div>Rezerwacja</div>
          </li>
          <li onClick={onClientClick} className={`${activeTab.client}`}>
            <div>Klient</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalHeader;
