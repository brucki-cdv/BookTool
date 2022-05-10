import "./SidebarButton.css";
import MaterialIcon from "../../Components/MaterialIcon/MaterialIcon";

import { useNavigate } from "react-router";
const SidebarButton = (props) => {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(props.href);
  };

  return (
    <div className="body__sidebar-button">
      <a onClick={onClickNavigate}>
        <li>
          <div className="icon-container">
            <MaterialIcon name={props.icon} />
          </div>
          <span className="sidebar-button__text">{props.name}</span>
        </li>
      </a>
    </div>
  );
};

export default SidebarButton;
