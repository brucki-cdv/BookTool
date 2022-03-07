import "./SidebarContainer.css";
import { useSelector } from "react-redux";

const SidebarContainer = (props) => {
  const { isOpen } = useSelector((state) => state.sidebar);
  const checkIfOpen = () => {
    if (isOpen) {
      return "";
    } else {
      return "close";
    }
  };

  return (
    <div className={"sidebar-container " + checkIfOpen()}>{props.children}</div>
  );
};

export default SidebarContainer;
