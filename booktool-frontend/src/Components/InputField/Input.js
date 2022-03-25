import "./Input.css";
import Container from "../Container";
const Input = (props) => {
  return (
    <Container>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </Container>
  );
};

export default Input;
