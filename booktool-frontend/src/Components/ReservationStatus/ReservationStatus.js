import "./ReservationStatus.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";
import { useState } from "react";

export default function ReservationStatus(props) {
  const [statusPicker, setStatusPicker] = useState("");

  const setCancelled = () => setStatusPicker("cancelled");
  const setPaid = () => setStatusPicker("paid");
  const setWaiting = () => setStatusPicker("waiting");

  return (
    <div className="reservation-status">
      <div className="status" onClick={setCancelled}>
        <li>
          <span className="status__icon anulowano">
            {statusPicker == "cancelled" && <MaterialIcon name="done" />}
          </span>
          <span>Anulowano</span>
        </li>
      </div>
      <div className="status" onClick={setPaid}>
        <li>
          <span className="status__icon zaplacono">
            {statusPicker == "paid" && <MaterialIcon name="done" />}
          </span>
          <span>Zaplacono</span>
        </li>
      </div>
      <div className="status" onClick={setWaiting}>
        <li>
          <span className="status__icon oczekuje">
            {statusPicker == "waiting" && <MaterialIcon name="done" />}
          </span>
          <span>Oczekuje</span>
        </li>
      </div>
    </div>
  );
}
