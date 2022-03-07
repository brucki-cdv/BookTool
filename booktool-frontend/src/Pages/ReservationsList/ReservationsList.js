import "./ReservationsList.css";
import FormTitle from "../../Components/FormTitle/FormTitle";
import SelectOptions from "../../Components/SelectOptions/SelectOptions";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MaterialIcon from "../../Components/MaterialIcon/MaterialIcon";
import { useEffect, useState } from "react";
import userService from "../../Services/user.service";
import { useDispatch, useSelector } from "react-redux";

const ReservationsListHeader = (props) => {
  const dispatch = useDispatch();
  const options = ["Data dodania", "Data od"];
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

  return (
    <div className="reservations-list__header">
      <span className="header__reservation-number">
        Liczba rezerwacji {props.reservationNumber}
      </span>
      <div className="header__options">
        <ul>
          <li>
            <SelectOptions options={options} label="Sortuj:" />
          </li>
          <li>
            <SearchBar lightMode={true} onChange={props.onChange} />
          </li>
        </ul>
      </div>
      <div className="header__tabs">
        <ul>
          <li className={`${activeTab.all}`} onClick={onAllClick}>
            <div>Najnowsze</div>
          </li>
          <li className={`${activeTab.cancelled}`} onClick={onCancelledClick}>
            <div>Anulowane</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Reservation = (props) => {
  let reservationStatusClass;
  let reservationStatusTransform;
  let dispatch = useDispatch();
  const { reservationId } = useSelector((state) => state.modal);

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

  return (
    <div className={`reservation ${reservationStatusClass}`} key={props.index}>
      <div className="reservation__house">
        <span className="reservation__house__icon">
          <MaterialIcon name="event" />
        </span>
        <ul>
          <li className="house__title">Dom nr: {props.houseTitle}</li>
          <li className="house__status">{reservationStatusTransform}</li>
        </ul>
      </div>
      <div className="reservation__information">
        <ul>
          <li>
            <div className="reservation__icon">
              <MaterialIcon name="arrow_forward" />
            </div>
            <span className="information__text">{props.arrival}</span>
          </li>
          <li>
            <div className="reservation__icon">
              <MaterialIcon name="arrow_back" />
            </div>
            <span className="information__text">{props.checkout}</span>
          </li>
          <li>
            <div className="reservation__icon">
              <MaterialIcon name="attach_money" />
            </div>
            <span className="information__text">{props.amount}</span>
          </li>
          <li>
            <div className="reservation__icon">
              <MaterialIcon name="tag" />
            </div>
            <span className="information__text">{props.reservationId}</span>
          </li>
        </ul>
      </div>
      <div className="reservation__options">
        <ul>
          <li
            onClick={() =>
              dispatch({
                type: "MODAL_OPEN",
                payload: {
                  reservationId: props.reservationId,
                  clientId: props.clientId,
                },
              })
            }
          >
            <MaterialIcon name="edit" />
          </li>
          <li>
            <MaterialIcon name="delete" />
          </li>
          <li>
            <MaterialIcon name="visibility" />
          </li>
        </ul>
      </div>
    </div>
  );
};

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

const ReservationsListBody = (props) => {
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
          searchbarInput={props.searchbarInput}
          status="all"
        />
      </div>
    </div>
  );
};

const ReservationsListWrapper = (props) => {
  return <div className="reservations-list__wrapper">{props.children}</div>;
};

const CancelledReservationList = (props) => {
  const { card } = useSelector((state) => state.reservationList);
  const checkIfHidden = () => {
    if (card == "all") {
      return "hidden";
    } else {
      return "";
    }
  };

  return (
    <div className={"reservations-list__body-cancelled " + checkIfHidden()}>
      <div className="list-body__reservations">
        <FilteredReservation
          searchbarInput={props.searchbarInput}
          status="cancelled"
        />
      </div>
    </div>
  );
};

const ReservationsList = (props) => {
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

  return (
    <div>
      <FormTitle name="Lista rezerwacji" />
      <ReservationsListWrapper>
        <ReservationsListHeader onChange={onChangeSearchbarInput} />
        <ReservationsListBody searchbarInput={searchbarInput} />
        <CancelledReservationList searchbarInput={searchbarInput} />
      </ReservationsListWrapper>
    </div>
  );
};

export default ReservationsList;
