import "./InformationCard.css";
import CardWrapper from './CardWrapper';
import CardContent from './CardContent';
import CardIcon from './CardIcon';

const InformationCard = (props) => {
  return (
    <CardWrapper>
      <CardIcon name={props.icon} bgColor={props.bgColor}/>
      <CardContent title={props.title} value={props.value}/>
    </CardWrapper>
  );
};

export default InformationCard;
