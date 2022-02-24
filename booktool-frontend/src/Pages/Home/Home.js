import "./Home.css";

import MainContainer from "../../Components/MainContainer/MainContainer";
import HomeContent from './HomeContent';
import Sidebar from "../../Layout/Sidebar/Sidebar";
import Modal from "../../Components/Modal/Modal";
const Home = (props) => {
  return (
    <MainContainer>
       {/* <Modal /> */}
      <Sidebar />
      <HomeContent />
    </MainContainer>
  );
};

export default Home;
