import "./FormErrorMessage.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";

const ErrorFormMessage = (props) => {
  return (
    <div className="error-form-message">
      <MaterialIcon name="error"/>
      <span>{props.message}</span>
    </div>
  );
};

export default ErrorFormMessage;
