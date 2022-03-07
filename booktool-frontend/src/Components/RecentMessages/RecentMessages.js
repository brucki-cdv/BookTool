import "./RecentMessages";
import MessagesWrapper from "./MessagesWrapper";
import Message from "./Message";
import FormTitle from "../FormTitle/FormTitle";
import { useState, useEffect } from "react";
import userService from "../../Services/user.service";

const RecentMessages = (props) => {
  const [message, setMessages] = useState([]);

  const checkMessageType = () => {
    
    console.log(message.type)
    switch (message.type) {
      case "added":
        return "add";
      case "cancelled":
        return "close";
      case "date":
        return "schedule";
    }
  };

  useEffect(() => {
    let isApiSubscribed = true;
    userService.getMessages().then((val) => {
      if (isApiSubscribed) {
        setMessages(val.data.messages);
      }
    });
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div className="details__messages">
      <MessagesWrapper>
        <FormTitle name="Wiadomości" />
        {message.map((message) => {
          return (
            <Message
              message={message.title}
              reservationId={message.reservationId}
              type={message.type}
            />
          );
        })}
      </MessagesWrapper>
    </div>
  );
};

export default RecentMessages;
