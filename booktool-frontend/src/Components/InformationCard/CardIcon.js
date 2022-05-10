import "./CardIcon.css";
import MaterialIcon from "../../Components/MaterialIcon";

export default function CardIcon(props) {
  return (
    <div
      className="information-card__icon"
      style={{ background: `${props.bgColor}` }}
    >
      {props.icon}
    </div>
  );
}
