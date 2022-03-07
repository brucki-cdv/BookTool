import "./Home.css";

import MainContainer from "../../Components/MainContainer/MainContainer";
import HomeContent from "./HomeContent";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import Modal from "../../Components/Modal/Modal";
import { useSelector } from "react-redux";
const Home = (props) => {
  
  const { isOpen, reservationId, clientId } = useSelector(
    (state) => state.modal
  );

  console.log(reservationId)

  return (
    <MainContainer>
      <Modal
        isOpen={isOpen}
      />
      <Sidebar />
      <HomeContent />
    </MainContainer>
  );
};

export default Home;
