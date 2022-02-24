import "./Sidebar.css";
import SidebarContainer from "./SidebarContainer";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";

const Sidebar = (props) => {
  return (
    <SidebarContainer>
      <SidebarHeader />
      <SidebarBody />
    </SidebarContainer>
  );
};

export default Sidebar;
