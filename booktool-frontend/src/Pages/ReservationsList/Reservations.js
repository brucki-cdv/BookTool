import { useSelector } from "react-redux";
import { useState, useEffect, useContext } from "react";

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
      console.log(val);
      return (
        <Reservation
          houseTitle={val.apartment.houseNumber}
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

const Reservations = (props) => {
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
    <div className={"reservations-list__body-all " + checkIfHidden()}>
      <div className="list-body__reservations">
        <FilteredReservation
          searchbarInput={context.searchbarInput}
          status="all"
        />
      </div>
    </div>
  );
};

export default Reservations;
