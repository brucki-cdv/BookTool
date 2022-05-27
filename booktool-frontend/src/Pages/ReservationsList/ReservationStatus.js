import "./ReservationStatus.css";
import { AiOutlineHome } from "react-icons/ai";

const ReservationStatus = (props) => {
  const translateStatus = () => {
    switch (props.status) {
      case "paid":
        return "Zapłacono";
      case "cancelled":
        return "Anulowano";
      case "waiting":
        return "Oczekuje";
    }
  };

  return (
    <div className="reservation__house">
      <span className="reservation__house__icon">
        <AiOutlineHome size={25} />
      </span>
      <ul>
        <li className="house__title">Dom nr: {props.houseTitle}</li>
        <li className="house__status">{translateStatus()}</li>
      </ul>
    </div>
  );
};

export default ReservationStatus;
