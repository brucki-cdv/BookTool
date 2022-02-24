import "./SidebarContainer.css";

const SidebarContainer = (props) => {
    return (
        <div className="sidebar-container">
            {props.children}
        </div>
    )
}

export default SidebarContainer