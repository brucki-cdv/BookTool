import "./ReservationInformation.css";
import Container from "../../Components/Container";
import MaterialIcon from "../../Components/MaterialIcon";

const ReservationInformation = (props) => {
    return (
        <Container className="reservation__information">
          <ul>
          <li>
              <div className="reservation__icon">
                <MaterialIcon name="arrow_forward" />
              </div>
              <span className="information__text">{props.arrival}</span>
            </li>
            <li>
              <div className="reservation__icon">
                <MaterialIcon name="arrow_back" />
              </div>
              <span className="information__text">{props.checkout}</span>
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
        </Container>
    )
}

export default ReservationInformation;