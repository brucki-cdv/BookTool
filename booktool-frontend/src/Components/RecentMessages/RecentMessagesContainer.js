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
        toast("Hello zelo!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setMessages(val.data.messages);
      }
    });
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RecentMessages messages={messages} />
    </>
  );
};

export default RecentMessagesContainer;
