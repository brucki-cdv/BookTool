import "./Title.css";
import Container from "../Container";

const Title = ({ name }) => {
  return (
    <Container className="title">
      <span>{name}</span>
    </Container>
  );
};

export default Title;
