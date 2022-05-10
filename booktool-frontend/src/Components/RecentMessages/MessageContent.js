import "./MessageContent.css";

export default function MessageContent(props) {
  return (
    <div className="message__text-container">
      <span className="message__name">{props.title}</span>
      <span className="message_reservationId">
        Rezerwacja nr.: {props.reservationId}
      </span>
    </div>
  );
}
