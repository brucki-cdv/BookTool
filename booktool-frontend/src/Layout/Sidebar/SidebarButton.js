import MaterialIcon from "../../Components/MaterialIcon/MaterialIcon";
import "./SidebarButton.css";
const SidebarButton = (props) => {
  return (
    <div className="body__sidebar-button">
      <a href={props.href}>
        <li>
          <MaterialIcon name={props.icon} />
          <span className="sidebar-button__text">{props.name}</span>
        </li>
      </a>
    </div>
  );
};

export default SidebarButton;
