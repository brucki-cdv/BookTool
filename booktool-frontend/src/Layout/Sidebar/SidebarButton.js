import "./SidebarButton.css";
import MaterialIcon from "../../Components/MaterialIcon/MaterialIcon";
import Container from "../../Components/Container";

import { useNavigate } from "react-router";
const SidebarButton = (props) => {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(props.href);
  };

  return (
    <Container className="body__sidebar-button">
      <a onClick={onClickNavigate}>
        <li>
          <Container className="icon-container">
            <MaterialIcon name={props.icon} />
          </Container>
          <span className="sidebar-button__text">{props.name}</span>
        </li>
      </a>
    </Container>
  );
};

export default SidebarButton;
