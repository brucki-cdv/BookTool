import "./Message.css";
import Container from "../Container";
import MessageIcon from "./MessageIcon";
import MessageContent from "./MessageContent";

const Message = ({ type, title, reservationId }) => {
  const getStatusClass = () => {
    switch (type) {
      case "added":
        return "dodano";
      case "cancelled":
        return "anulowano";
      case "date":
        return "termin";
    }
  };

  return (
    <Container className={"messages__message " + getStatusClass()}>
      <li>
        <MessageIcon type={type} />
        <MessageContent title={title} reservationId={reservationId} />
      </li>
    </Container>
  );
};

export default Message;
