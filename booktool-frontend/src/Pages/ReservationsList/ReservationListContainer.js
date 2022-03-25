import ReservationList from "./ReservationsList";
import { useDispatch } from "react-redux";
import { useState, useEffect, createContext } from "react";

export const ReservationContext = createContext({});

const ReservationListContainer = () => {
  const [searchbarInput, setSearchbarInput] = useState("");

  const onChangeSearchbarInput = (e) => {
    let searchbar = e.target.value;
    setSearchbarInput(searchbar);
    console.log(searchbar);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "RESERVATION_LIST_ALL_RESERVATION" });
  }, []);

  //Header

  const [activeTab, setActiveTab] = useState({ all: "active", cancelled: "" });
  useEffect(() => {
    dispatch({ type: "RESERVATION_LIST_ALL_RESERVATION" });
  }, []);

  const onAllClick = () => {
    dispatch({ type: "RESERVATION_LIST_ALL_RESERVATION" });
    setActiveTab({ cancelled: null, all: "active" });
  };

  const onCancelledClick = () => {
    dispatch({ type: "RESERVATION_LIST_CANCELLED_RESERVATION" });
    setActiveTab({ cancelled: "active", all: null });
  };

  const transformStatus = () => {
    switch (props.status) {
      case "paid":
        reservationStatusClass = "zaplacono";
        reservationStatusTransform = "Opłacona";
        break;
      case "waiting":
        reservationStatusClass = "oczekuje";
        reservationStatusTransform = "Nieopłacona";
        break;
      case "cancelled":
        reservationStatusClass = "niezaplacono";
        reservationStatusTransform = "Anulowana";
        break;
      case "waiting":
        reservationStatusClass = "oczekuje";
        break;
    }
  };



  const initValue = {
   searchbarInput, 
   onChangeSearchbarInput,
   activeTab,
   onAllClick,
   onCancelledClick,
   transformStatus

  };

  return (
    <ReservationContext.Provider value={initValue}>
      <ReservationList />
    </ReservationContext.Provider>
  );
};

export default ReservationListContainer;
