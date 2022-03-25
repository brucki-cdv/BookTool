import "./RecentMessagesContainer";
import { useState, useEffect } from "react";
import userService from "../../Services/user.service";
import RecentMessages from "./RecentMessages";

const RecentMessagesContainer = (props) => {
  const [messages, setMessages] = useState([]);

  const checkMessageType = () => {
    console.log(message.type);
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

  return <RecentMessages messages={messages} />;
};

export default RecentMessagesContainer;
