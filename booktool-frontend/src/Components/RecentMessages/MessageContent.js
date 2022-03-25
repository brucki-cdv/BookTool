import Container from "../Container";
import "./MessageContent.css";

const MessageContent = (props) => {
  return (
    <Container className="message__text-container">
      <span className="message__name">{props.title}</span>
      <span className="message_reservationId">
        Rezerwacja nr.: {props.reservationId}
      </span>
    </Container>
  );
};

export default MessageContent;