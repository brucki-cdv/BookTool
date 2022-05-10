import ReservationStatus from "./ReservationStatus";
import ReservationInformation from "./ReservationInformation";
import ReservationOptions from "./ReservationOptions";
import "./Reservation.css";

import { useSelector } from "react-redux";

const Reservation = (props) => {
  return (
    <div className={`reservation ${props.status}` } key={props.index}>
      <ReservationStatus houseTitle={props.houseTitle} status={props.status} />
      <ReservationInformation
        arrival={props.arrival}
        checkout={props.checkout}
        amount={props.amount}
        reservationId={props.reservationId}
      />
      <ReservationOptions
        reservationId={props.reservationId}
        clientId={props.clientId}
      />
    </div>
  );
};

export default Reservation;
