import "./InputIcon.css";
import Container from "../Container";
import MaterialIcon from "../MaterialIcon";

const InputIcon = ({ name }) => {
  return (
    <Container className="icon-container">
      <MaterialIcon name={name} />
    </Container>
  );
};

export default InputIcon;
