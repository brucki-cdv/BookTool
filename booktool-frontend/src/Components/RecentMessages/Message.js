import "./Message.css";
import MessageIcon from "./MessageIcon";
import MessageContent from "./MessageContent";

export default function Message({ type, title, reservationId }) {
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
    <div className={"messages__message " + getStatusClass()}>
      <li>
        <MessageIcon icon={type} />
        <MessageContent title={title} reservationId={reservationId} />
      </li>
    </div>
  );
}
