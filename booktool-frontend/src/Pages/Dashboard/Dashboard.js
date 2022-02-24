import FormTitle from "../../Components/FormTitle/FormTitle";
import InformationCardsContainer from "../../Components/InformationCardsContainer/InformationCardsContainer";
import InformationCard from "../../Components/InformationCard/InformationCard";
import DetailsContainer from "../../Components/DetailsContainer/DetailsContainer";
import RecentReservationsTable from "../../Components/RecentReservationsTable/RecentReservationsTable";
import RecentMessages from "../../Components/RecentMessages/RecentMessages";
import Modal from "../../Components/Modal/Modal";
import { Routes, Route, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = (props) => {
  const headArray = ["Nr.", "Imię", "Nazwisko", "Email", "Nr. Telefonu"];
  const bodyArray = [
    ["1", "Dariusz", "Kałamaga", "dkalamaga@gmail.com", "767451234"],
    ["2", "Menel", "Menelowski", "menelowski@gmail.com", "678123456"],
  ];

  return (
    <div>
     
      <FormTitle name="Panel Sterowania" />
      <InformationCardsContainer>
        <InformationCard
          title="Dzisiejsze rezerwacje"
          value={23}
          icon="event"
          bgColor="#12DC26"
        />
        <InformationCard
          title="Wszystkie rezerwacje"
          value={67}
          icon="calendar_month"
          bgColor="#6D71F9"
        />
        <InformationCard
          title="Anulowane rezerwacje"
          value={0}
          icon="close"
          bgColor="#FF4C41"
        />
        <InformationCard
          title="Ilość wiadomości"
          value={7}
          icon="mail"
          bgColor="#1263DC"
        />
      </InformationCardsContainer>
      <DetailsContainer>
        <RecentReservationsTable headArray={headArray} bodyArray={bodyArray} />
        <RecentMessages />
      </DetailsContainer>
    </div>
  );
};

export default Dashboard;
