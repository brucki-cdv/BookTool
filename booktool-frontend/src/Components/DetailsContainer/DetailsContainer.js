import "./DetailsContainer.css";
import Container from "../Container";

const DetailsContainer = (props) => {
  return (
    <Container className="home__details-container">{props.children}</Container>
  );
};

export default DetailsContainer;
