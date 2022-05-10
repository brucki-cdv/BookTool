import "./Home.css";

import MainContainer from "../../Components/MainContainer/MainContainer";
import HomeContent from "./HomeContent";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import ReservationDetails from "../../Components/ReservationDetails";
import AddApartmentModal from "../../Components/AddApartmentModal";
import AddReservationModal from "../../Components/AddReservationModal";
import EditApartmentModal from "../../Components/EditApartmentModal";
// import ModalContainer from "../../Components/ReservationList/Modal";
import { useSelector } from "react-redux";
const Home = (props) => {
  const {
    isOpen,
    reservationId,
    clientId,
    isAddReservationOpen,
    isEditReservationOpen,
    isAddApartmentOpen,
    isEditApartmentOpen,
  } = useSelector((state) => state.modal);

  console.log(reservationId);

  return (
    <MainContainer>
      {isEditReservationOpen && <ReservationDetails />}

      {isAddApartmentOpen && <AddApartmentModal />}
      {isAddReservationOpen && <AddReservationModal />}
      {/* {isOpen && <ModalContainer isOpen={isOpen}/>} */}
      {isEditApartmentOpen && <EditApartmentModal />}
      <Sidebar />
      <HomeContent />
    </MainContainer>
  );
};

export default Home;
