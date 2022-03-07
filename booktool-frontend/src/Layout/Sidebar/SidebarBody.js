import "./SidebarBody.css";
import SidebarButton from "./SidebarButton";

const SidebarBody = (props) => {
  return (
    <div className="sidebar__body">
      <ul>
        <SidebarButton name="Home" icon="home" href="/dashboard"/>
        <SidebarButton name="Rezerwacje" icon="calendar_month" href="/rezerwacje/lista"/>
        <SidebarButton name="Pokoje" icon="night_shelter" href="/wiadomosci"/>
        <SidebarButton name="Klienci" icon="person" href="/klienci" />
        <SidebarButton name="Analizy" icon="analytics" href="/analizy"/>
        <SidebarButton name="Profil" icon="account_circle" href="/profil"/>
        <SidebarButton name="Wyloguj się" icon="logout" />
      </ul>
    </div>
  );
};

export default SidebarBody;
