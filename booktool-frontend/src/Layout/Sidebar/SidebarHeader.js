import "./SidebarHeader.css";
import Logo from '../../Components/Logo/Logo';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SidebarToggle from "./SidebarToggle";
const SidebarHeader = (props) => {
    return (
        <div className="sidebar__header">
            <SidebarToggle />
            <Logo />
            <SearchBar placeholder="Szukaj..."/>
        </div>
    )
}

export default SidebarHeader;