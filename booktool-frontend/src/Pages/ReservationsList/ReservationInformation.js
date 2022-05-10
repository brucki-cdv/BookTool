import "./ReservationInformation.css";
import MaterialIcon from "../../Components/MaterialIcon";

import moment from "moment";

const ReservationInformation = (props) => {
  return (
    <div className="reservation__information">
      <ul>
        <li>
          <div className="reservation__icon">
            <MaterialIcon name="arrow_forward" />
          </div>
          <span className="information__text">
            {moment(new Date(props.arrival)).locale("pl").format("DD-MM-YYYY")}
          </span>
        </li>
        <li>
          <div className="reservation__icon">
            <MaterialIcon name="arrow_back" />
          </div>
          <span className="information__text">
            {moment(new Date(props.checkout)).locale("pl").format("DD-MM-YYYY")}
          </span>
        </li>
        <li>
          <div className="reservation__icon">
            <MaterialIcon name="attach_money" />
          </div>
          <span className="information__text">{props.amount}</span>
        </li>
        <li>
          <div className="reservation__icon">
            <MaterialIcon name="tag" />
          </div>
          <span className="information__text">{props.reservationId}</span>
        </li>
      </ul>
    </div>
  );
};

export default ReservationInformation;
