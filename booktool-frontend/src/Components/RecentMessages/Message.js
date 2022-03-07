import "./Message.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";
import { useEffect, useState } from "react";
const Message = (props) => {
  const getStatusClass = () => {
    switch (props.type) {
      case "added":
        return "dodano";
        break;
      case "cancelled":
        return "anulowano";
        break;
      case "date":
        return "termin";
        break;
    }
  };

  const getStatusIcon = () => {
    switch (props.type) {
      case "added":
        return "add";
        break;
      case "cancelled":
        return "close";
        break;
      case "date":
        return "schedule";
        break;
    }
  };

  return (
    <div className={"messages__message " + getStatusClass()}>
      <li>
        <MaterialIcon name={getStatusIcon()} />
        <div className="message__text-container">
          <span className="message__name">{props.message}</span>
          <span className="message_reservationId">
            Rezerwacja nr.: {props.reservationId}
          </span>
        </div>
      </li>
    </div>
  );
};

export default Message;
