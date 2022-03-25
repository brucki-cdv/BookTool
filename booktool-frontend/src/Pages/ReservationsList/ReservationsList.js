import "./ReservationsList.css";
import Title from "../../Components/Title";
import ReservationListHeader from "./ReservationListHeader";
import ReservationListBody from "./ReservationListBody";
import Wrapper from "../../Components/Wrapper";


const ReservationsList = (props) => {
  return (
    <div>
      <Title name="Lista rezerwacji" />
      <Wrapper className="reservations-list__wrapper">
        <ReservationListHeader />
        <ReservationListBody />
      </Wrapper>
    </div>
  );
};

export default ReservationsList;
