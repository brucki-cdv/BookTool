import "./ErrorFormMessage.css";
import { BiErrorCircle } from "react-icons/bi";

export default function ErrorFormMessage(props) {
  return (
    <div className="error-form-message">
      <BiErrorCircle size={25} />
      <span className="error-form-message__text">{props.message}</span>
    </div>
  );
}
