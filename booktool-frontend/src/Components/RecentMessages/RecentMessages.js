import "./RecentMessages.css";

import RecentMessagesWrapper from "./RecentMessagesWrapper";
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
    <div className="details__messages">
      <RecentMessagesWrapper className="messages__wrapper">
        <Title name="Wiadomości" />
        {messages.map((message) => {
          return renderMessage(message);
        })}
      </RecentMessagesWrapper>
    </div>
  );
};

export default RecentMessages;
