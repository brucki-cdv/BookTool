import "./InputField.css";
import MaterialIcon from "../../Components/MaterialIcon/MaterialIcon";

const InputField = (props) => {
  return (
    <div className="input-container error">
      <label for={props.id}>{props.label}</label>
      <div className="icon-container">
        <MaterialIcon name={props.icon} />
      </div>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputField;
