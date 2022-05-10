import "./ReservationStatus.css";
import { AiOutlineHome } from "react-icons/ai";

const ReservationStatus = (props) => {
  return (
    <div className="reservation__house">
      <span className="reservation__house__icon">
        <AiOutlineHome size={25}/>
      </span>
      <ul>
        <li className="house__title">Dom nr: {props.houseTitle}</li>
        <li className="house__status">{props.status}</li>
      </ul>
    </div>
  );
};

export default ReservationStatus;
