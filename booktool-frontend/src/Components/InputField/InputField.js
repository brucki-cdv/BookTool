import "./InputField.css";
import MaterialIcon from "../../Components/MaterialIcon";
import Label from "./Label";
import Container from "../Container";
import InputIcon from "./InputIcon";
import Input from "./Input";

const InputField = (props) => {
  const errorClass = props.isValid ? "" : "error";
  return (
    <Container className={"input-container " + errorClass}>
      <Label label={props.label} />
      <InputIcon name={props.icon} />
      <Input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Container>
  );
};

export default InputField;
