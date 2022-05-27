import "./RecentMessagesContainer";
import { useState, useEffect } from "react";
import userService from "../../Services/user.service";
import RecentMessages from "./RecentMessages";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecentMessagesContainer = (props) => {
  const [messages, setMessages] = useState([]);

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
    <>
      <RecentMessages messages={messages} />
    </>
  );
};

export default RecentMessagesContainer;
