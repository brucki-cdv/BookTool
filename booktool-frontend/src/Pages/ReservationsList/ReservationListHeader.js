import "./ReservationListHeader.css";

import Container from "../../Components/Container";
import ReservationListHeaderOptions from "./ReservationListHeaderOptions";
import ReservationListHeaderTabs from "./ReservationListHeaderTabs";
import ReservationListHeaderTitle from "./ReservationListHeaderTitle";
 
const ReservationsListHeader = (props) => {
  return (
    <Container className="reservations-list__header">
      <ReservationListHeaderTitle />
      <ReservationListHeaderOptions />
      <ReservationListHeaderTabs />
    </Container>
  );
};

export default ReservationsListHeader;
