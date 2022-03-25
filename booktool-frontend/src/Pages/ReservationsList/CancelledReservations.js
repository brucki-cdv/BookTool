import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";

import { ReservationContext } from "./ReservationListContainer";
import userService from "../../Services/user.service";
import Reservation from "./Reservation";

const FilteredReservation = (props) => {
  const [reservations, setReservations] = useState([]);
  let searchbarInput = props.searchbarInput;

  useEffect(() => {
    userService
      .getAllReservations(1, 10, props.status)
      .then((val) => setReservations(val.data.reservations));
  }, []);

  return reservations
    .filter((val) => {
      if (searchbarInput === "") {
        return val;
      } else if (
        val._id.toLowerCase().includes(searchbarInput.toLowerCase()) ||
        val.arrival.toLowerCase().includes(searchbarInput.toLowerCase()) ||
        val.checkout.toLowerCase().includes(searchbarInput.toLowerCase())
      ) {
        return val;
      }
    })
    .map((val, index) => {
      return (
        <Reservation
          houseTitle={val.houseNumber}
          status={val.status}
          arrival={val.arrival}
          checkout={val.checkout}
          amount={val.amount}
          reservationId={val._id}
          clientId={val.client}
          key={index}
        />
      );
    });
};

const CancelledReservations = (props) => {
  const context = useContext(ReservationContext);
  const { card } = useSelector((state) => state.reservationList);
  const checkIfHidden = () => {
    if (card == "cancelled") {
      return "hidden";
    } else {
      return "";
    }
  };

  return (
    <div className={"reservations-list__body-cancelled " + checkIfHidden()}>
      <div className="list-body__reservations">
        <FilteredReservation
          searchbarInput={context.searchbarInput}
          status="cancelled"
        />
      </div>
    </div>
  );
};

export default CancelledReservations;
