import "./ModalBody.css";
import InputDate from "../InputDate/InputDate";
import InputNumber from "../InputNumber/InputNumber";
import ChapterTitle from "../ChapterTitle/ChapterTitle";
import ReservationStatus from "../ReservationStatus/ReservationStatus";
import SelectOptions from "../SelectOptions/SelectOptions";
import InputField from "../InputField/InputField";
import userService from "../../Services/user.service";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dateConverter from "../../Helpers/dateConverter";

const ReservationInformation = (props) => {
  const { reservationId, card, clickedSave, clickedDelete } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();
  const [reservation, setReservation] = useState({});
  const [options, setOptions] = useState([]);
  const [apartment, setApartment] = useState({});
  const [isHidden, setIsHidden] = useState("");

  const checkIfHidden = () => {
    if (card == "client") {
      return "hidden";
    } else {
      return "";
    }
  };

  const postDate = () => {
    const patchReservation = {
      arrival: reservation.arrival,
      checkout: reservation.checkout,
      houseNumber: reservation.houseNumber,
      adults: reservation.adults,
      children: reservation.children,
      amount: reservation.amount,
      status: reservation.status,
    };

    userService.updateReservation(patchReservation, reservation._id);
  };

  console.log(clickedSave);

  if (clickedSave) {
    postDate();
  }

  useEffect(() => {
    let isApiSubscribed = true;
    userService.getReservation(reservationId).then((val) => {
      if (isApiSubscribed) {
        console.log(val);
        setReservation(val.data.reservation);
        userService
          .getApartment(val.data.reservation.houseNumber)
          .then((value) => {
            if (isApiSubscribed) {
              setApartment(value.data.apartment);
            }
          });
      }
    });

    userService.getApartments().then((val) => {
      if (isApiSubscribed) {
        val.data.apartments.map((data) => {
          setOptions((prevState) => {
            return [...prevState, { name: data.name, value: data.houseNumber }];
          });
        });
      }
    });

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  const onChangeArriveInput = (e) => {
    let arriveInput = e.target.value;
    setReservation((prevState) => {
      return {
        ...prevState,
        arrival: dateConverter.convertToISOFormat(arriveInput),
      };
    });
  };

  const onChangeCheckoutInput = (e) => {
    let checkoutInput = e.target.value;
    setReservation((prevState) => {
      return {
        ...prevState,
        checkout: dateConverter.convertToISOFormat(checkoutInput),
      };
    });
  };

  const onChangeAdultInput = (e) => {
    let adultInput = e.target.value;
    setReservation((prevState) => {
      return {
        ...prevState,
        adults: adultInput,
      };
    });
  };

  const onChangeChildrenInput = (e) => {
    let childrenInput = e.target.value;
    setReservation((prevState) => {
      return {
        ...prevState,
        children: childrenInput,
      };
    });
  };

  const onChangePriceInput = (e) => {
    let priceInput = e.target.value;

    setReservation((prevState) => {
      return {
        ...prevState,
        amount: priceInput,
      };
    });
  };

  const countFinalPrice = () => {
    const { arrival, checkout, adults, children } = reservation;
    const { adultCost, childrenCost } = apartment;

    let diff = dateConverter.diffBetweenDates(arrival, checkout);
    let price = (adults * adultCost + children * childrenCost) * diff;
    return price;
  };

  console.log(reservation);

  return (
    <div className={"body__reservation " + checkIfHidden()}>
      <div className="reservation__left">
        <div className="reservation__date-picker">
          <ChapterTitle title="Data rezerwacji" />
          <div className="date-picker__inputs">
            <InputDate
              label="Od"
              value={dateConverter.convertToSimpleFormat(reservation.arrival)}
              onChange={onChangeArriveInput}
            />
            <InputDate
              label="Do"
              value={dateConverter.convertToSimpleFormat(reservation.checkout)}
              onChange={onChangeCheckoutInput}
              min={dateConverter.convertToSimpleFormat(reservation.arrival)}
            />
          </div>
        </div>
        <div className="reservation__status">
          <ChapterTitle title="Status rezerwacji" />
          <ReservationStatus status={reservation.status} />
        </div>
        <div className="reservation__number-of-people">
          <ChapterTitle title="Liczba osób" />
          <div className="date-picker__inputs">
            <InputNumber
              label="Dorośli"
              onChange={onChangeAdultInput}
              value={reservation.adults}
            />
            <InputNumber
              label="Dzieci"
              onChange={onChangeChildrenInput}
              value={reservation.children}
            />
          </div>
        </div>
        <div className="reservation__house-picker">
          <ChapterTitle title="Wybrany domek" />
          <SelectOptions
            id="house"
            label="Domek"
            options={options}
            value={reservation.houseNumber}
          />
        </div>
      </div>
      <div className="reservation__right">
        <ChapterTitle title="Cena" />
        <InputNumber
          label="Cena końcowa"
          value={reservation.amount}
          onChange={onChangePriceInput}
        />
        <InputNumber label="Zadatek" />
      </div>
    </div>
  );
};

const ClientInformation = (props) => {
  const { clientId, card } = useSelector((state) => state.modal);
  const [client, setClient] = useState({});
  const [isHidden, setIsHidden] = useState("");

  const checkIfHidden = () => {
    if (card == "reservation") {
      return "hidden";
    } else {
      return "";
    }
  };

  useEffect(() => {
    // let isApiSubscribed = true;

    userService.getClientInformation(clientId).then((val) => {
      setClient(val.data.client);
      console.log(val);
    });

    return () => {
      // isApiSubscribed = false;
    };
  }, []);

  return (
    <div className={"body__client " + checkIfHidden()}>
      <ChapterTitle title="Dane osobowe" />
      <InputField name="test" label="Imię" value={client.firstName} />
      <InputField name="test" label="Nazwisko" value={client.lastName} />
      <InputField
        name="test"
        label="Numer telefonu"
        value={client.phoneNumber}
      />
      <InputField name="test" label="Email" value={client.email} />
    </div>
  );
};

const ModalBody = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "MODAL_OPEN_RESERVATION" });
  }, []);

  return (
    <div className="modal-body">
      <ClientInformation />
      <ReservationInformation />
    </div>
  );
};

export default ModalBody;
