import Container from "../../Components/Container";
import "./ReservationStatus.css";
import MaterialIcon from "../../Components/MaterialIcon";


const ReservationStatus = (props) => {
  return (
    <Container className="reservation__house">
      <span className="reservation__house__icon">
        <MaterialIcon name="event" />
      </span>
      <ul>
        <li className="house__title">Dom nr: {props.houseTitle}</li>
        <li className="house__status">{props.status}</li>
      </ul>
    </Container>
  );
};

export default ReservationStatus;
