import "./SidebarBody.css";
import SidebarButton from "./SidebarButton";

const SidebarBody = (props) => {
  return (
    <div className="sidebar__body">
      <ul>
        <SidebarButton name="Home" icon="home" />
        <SidebarButton name="Rezerwacje" icon="calendar_month" />
        <SidebarButton name="Wiadomości" icon="mail" />
        <SidebarButton name="Klienci" icon="person" />
        <SidebarButton name="Analizy" icon="analytics" />
        <SidebarButton name="Profil" icon="account_circle" />
        <SidebarButton name="Wyloguj się" icon="logout" />
      </ul>
    </div>
  );
};

export default SidebarBody;
