import "./ErrorFormMessage.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";

const ErrorFormMessage = (props) => {
  return (
    <div className="error-form-message">
      <MaterialIcon name="error" />
      <span className="error-form-message__text">{props.message}</span>
    </div>
  );
};

export default ErrorFormMessage;
