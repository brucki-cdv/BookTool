import FormTitle from "../../Components/FormTitle/FormTitle";
import InformationCardsContainer from "../../Components/InformationCardsContainer/InformationCardsContainer";
import InformationCard from "../../Components/InformationCard/InformationCard";
import DetailsContainer from "../../Components/DetailsContainer/DetailsContainer";
import RecentReservationsTable from "../../Components/RecentReservationsTable/RecentReservationsTable";
import RecentMessages from "../../Components/RecentMessages/RecentMessages";
import Modal from "../../Components/Modal/Modal";
import { Routes, Route, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import userService from "../../Services/user.service";
import "./Dashboard.css";

const Dashboard = (props) => {
  
  

  const [summary, setSummary] = useState({});

  useEffect(() => {
    userService.getReservationSummary().then((val) => setSummary(val.data));
  }, []);

  return (
    <div>
      <FormTitle name="Panel Sterowania" />
      <InformationCardsContainer>
        <InformationCard
          title="Dzisiejsze rezerwacje"
          value={summary.todayReservation}
          icon="event"
          bgColor="#12DC26"
        />
        <InformationCard
          title="Wszystkie rezerwacje"
          value={summary.allReservation}
          icon="calendar_month"
          bgColor="#6D71F9"
        />
        <InformationCard
          title="Anulowane rezerwacje"
          value={summary.cancelledReservation}
          icon="close"
          bgColor="#FF4C41"
        />
        <InformationCard
          title="Ilość wiadomości"
          value={summary.messages}
          icon="mail"
          bgColor="#1263DC"
        />
      </InformationCardsContainer>
      <DetailsContainer>
        <RecentReservationsTable/>
        <RecentMessages />
      </DetailsContainer>
    </div>
  );
};

export default Dashboard;
