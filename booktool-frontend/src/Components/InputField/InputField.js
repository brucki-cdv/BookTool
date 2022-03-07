import "./InputField.css";
import MaterialIcon from "../../Components/MaterialIcon/MaterialIcon";

const InputField = (props) => {
  const errorClass = props.isValid ? "" : "error";
  return (
    <div className={"input-container " + errorClass}>
      <label for={props.id}>{props.label}</label>
      <div className="icon-container">
        <MaterialIcon name={props.icon} />
      </div>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default InputField;
