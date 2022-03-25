import "./Clients.css";
import Title from "../../Components/Title";
import RecentClientsTableContainer from "../../Components/RecentClientsTable";


const Clients = (props) => {
  return (
    <div>
      <Title name="Klienci" />
      <RecentClientsTableContainer />
    </div>
  );
};

export default Clients;
