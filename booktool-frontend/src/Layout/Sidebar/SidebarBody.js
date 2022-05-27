import "./SidebarBody.css";
import SidebarButton from "./SidebarButton";

const SidebarBody = (props) => {
  return (
    <div className="sidebar__body">
      <ul>
        <SidebarButton name="Home" icon="home" href="/dashboard"/>
        <SidebarButton name="Rezerwacje" icon="calendar_month" href="/rezerwacje/lista"/>
        <SidebarButton name="Pokoje" icon="night_shelter" href="/domy"/>
        <SidebarButton name="Klienci" icon="person" href="/klienci" />
        <SidebarButton name="Wyloguj się" icon="logout" href="/login" />
      </ul>
    </div>
  );
};

export default SidebarBody;
