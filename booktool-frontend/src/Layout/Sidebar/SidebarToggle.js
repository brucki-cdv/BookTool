import MaterialIcon from "../../Components/MaterialIcon/MaterialIcon";
import "./SidebarToggle.css";
import { useDispatch, useSelector } from "react-redux";

const SidebarToggle = (props) => {
  const { isOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const handleClick = () => {
    if(isOpen == true) {dispatch({type: "CLOSE_SIDEBAR"})}
    if(isOpen == false) {dispatch({type: "OPEN_SIDEBAR"})}
  };

  return (
    <div className="sidebar__toggle" onClick={handleClick}>
      <MaterialIcon name="chevron_right" />
    </div>
  );
};

export default SidebarToggle;
