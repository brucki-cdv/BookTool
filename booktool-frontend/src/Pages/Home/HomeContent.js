import "./HomeContent.css";
import FormTitle from "../../Components/FormTitle/FormTitle";
import InformationCardsContainer from "../../Components/InformationCardsContainer/InformationCardsContainer";
import InformationCard from "../../Components/InformationCard/InformationCard";
import DetailsContainer from "../../Components/DetailsContainer/DetailsContainer";
import RecentReservationsTable from "../../Components/RecentReservationsTable/RecentReservationsTable";
import RecentMessages from "../../Components/RecentMessages/RecentMessages";
import { Routes, Route, Outlet } from "react-router-dom";

const HomeContent = (props) => {
  return (
    <div className="home-content">
      <Outlet />
    </div>
  );
};

export default HomeContent;
