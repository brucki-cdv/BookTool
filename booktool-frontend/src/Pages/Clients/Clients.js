import "./Clients.css";
import FormTitle from "../../Components/FormTitle/FormTitle";
import ClientWrapper from "./ClientWrapper";
import RecentReservationsTable from "../../Components/RecentReservationsTable/RecentReservationsTable";
import {useState, useEffect} from 'react';
import userService from "../../Services/user.service";

const Clients = (props) => {
  const headArray = ["Nr.", "Imię", "Nazwisko", "Email", "Nr. Telefonu"];
  const [clients, setClients] = useState([]);

  useEffect(() => {
    userService.getAllClients(1,10).then(val => setClients(val.data.clients));
  }, [])


  return (
    <div>
      <FormTitle name="Klienci" />
      <RecentReservationsTable headArray={headArray} bodyArray={clients} />
    </div>
  );
};

export default Clients;
