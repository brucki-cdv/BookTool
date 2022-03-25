import "./InformationCard.css";
import Wrapper from "../Wrapper";
import CardContent from "./CardContent";
import CardIcon from "./CardIcon";

const InformationCard = (props) => {
  return (
    <Wrapper className="home__information-card">
      <CardIcon name={props.icon} bgColor={props.bgColor} />
      <CardContent title={props.title} value={props.value} />
    </Wrapper>
  );
};

export default InformationCard;
