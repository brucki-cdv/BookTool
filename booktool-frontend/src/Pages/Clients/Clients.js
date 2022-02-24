import "./Clients.css";
import FormTitle from "../../Components/FormTitle/FormTitle";
import ClientWrapper from "./ClientWrapper";
import RecentReservationsTable from "../../Components/RecentReservationsTable/RecentReservationsTable";
const Clients = (props) => {
  const headArray = ["Nr.", "Imię", "Nazwisko", "Email", "Nr. Telefonu"];
  const bodyArray = [
    ["1", "Dariusz", "Kałamaga", "dkalamaga@gmail.com", "767451234"],
    ["2", "Menel", "Menelowski", "menelowski@gmail.com", "678123456"],
  ];
  return (
    <div>
      <FormTitle name="Klienci" />
      <RecentReservationsTable headArray={headArray} bodyArray={bodyArray} />
    </div>
  );
};

export default Clients;
