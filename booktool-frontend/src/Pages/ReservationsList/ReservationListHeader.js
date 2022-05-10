import "./ReservationListHeader.css";

import ReservationListHeaderOptions from "./ReservationListHeaderOptions";
import ReservationListHeaderTabs from "./ReservationListHeaderTabs";
import ReservationListHeaderTitle from "./ReservationListHeaderTitle";

const ReservationsListHeader = (props) => {
  return (
    <>
      <div className="reservations-list__header">
        <ReservationListHeaderTitle />
        <ReservationListHeaderOptions />
      </div>
      <ReservationListHeaderTabs />
    </>
  );
};

export default ReservationsListHeader;
