import "./Dashboard.css";
import FormTitle from "../../Components/Title";
import InformationCardsContainer from "../../Components/InformationCards";
import DetailsContainer from "../../Components/DetailsContainer";
import RecentClientsTableContainer from "../../Components/RecentClientsTable";
import RecentMessagesContainer from "../../Components/RecentMessages"

const Dashboard = (props) => {
  return (
    <div>
      <FormTitle name="Panel Sterowania" />
      <InformationCardsContainer />
      <DetailsContainer>
        <RecentClientsTableContainer />
        <RecentMessagesContainer />
      </DetailsContainer>
    </div>
  );
};

export default Dashboard;
