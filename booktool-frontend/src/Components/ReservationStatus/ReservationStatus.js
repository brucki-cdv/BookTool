import "./ReservationStatus.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";

const ReservationStatus = (props) => {
  return (
    <div className="reservation-status">
      <div className="status">
        <li>
          <span className="status__icon anulowano">
            <MaterialIcon name="done"/>
          </span>
          <span>Anulowano</span>
        </li>
      </div>
      <div className="status">
        <li>
          <span className="status__icon zaplacono">
            <MaterialIcon name="done"/>
          </span>
          <span>Zaplacono</span>
        </li>
      </div>
      <div className="status">
        <li>
          <span className="status__icon oczekuje">
            <MaterialIcon name="done"/>
          </span>
          <span>Oczekuje</span>
        </li>
      </div>
    </div>
  );
};

export default ReservationStatus;
