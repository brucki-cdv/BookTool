import "./CardIcon.css";
import MaterialIcon from "../../Components/MaterialIcon/MaterialIcon";
const CardIcon = (props) => {
    return (
        <div className="information-card__icon" style={{background: `${props.bgColor}`}}>
            <MaterialIcon name={props.name}/>
        </div>
    )
}

export default CardIcon;