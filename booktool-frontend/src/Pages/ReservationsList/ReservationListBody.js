import Reservations from "./Reservations";
import CancelledReservations from "./CancelledReservations";

const ReservationListBody = () => {
  return (
    <div>
      <Reservations />
      <CancelledReservations />
    </div>
  )
}

export default ReservationListBody;