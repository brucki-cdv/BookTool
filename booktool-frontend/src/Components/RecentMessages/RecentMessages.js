import "./RecentMessages.css";
import Container from "../Container";
import Wrapper from "../Wrapper";
import Message from "./Message";
import Title from "../Title";

const renderMessage = (message) => {
  return (
    <Message
      title={message.title}
      reservationId={message.reservationId}
      type={message.type}
    />
  );
};

const RecentMessages = ({ messages }) => {
  return (
    <Container className="details__messages">
      <Wrapper className="messages__wrapper">
        <Title name="Wiadomości" />
        {messages.map((message) => {
          return renderMessage(message);
        })}
      </Wrapper>
    </Container>
  );
};

export default RecentMessages;
