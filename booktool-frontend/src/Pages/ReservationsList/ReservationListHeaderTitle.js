import "./ReservationListHeaderTitle.css";

const ReservationListHeaderTitle = (props) => {
  return (
    <span className="header__reservation-number">
      Liczba rezerwacji {props.reservationNumber}
    </span>
  );
};

export default ReservationListHeaderTitle;
