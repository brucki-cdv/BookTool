import "./Message.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";

const Message = (props) => {
  return (
    <div className="messages__message">
      <li>
        <MaterialIcon name={props.icon} />
        <div className="message__text-container">
          <span className="message__name">{props.message}</span>
          <span className="message_reservationId">Rezerwacja nr.: {props.reservationId}</span>
        </div>
      </li>
    </div>
  );
};

export default Message;
