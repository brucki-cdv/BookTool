import Modal from "./Modal";
import ReactDOM from "react-dom";
import React, { useState, useEffect, createContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import userService from "../../Services/user.service";
import dateConverter from "../../Helpers/dateConverter";

export const ModalContext = createContext({});

export default function ModalContainer(props) {
  const { reservationId, card, clientId, clickedSave, clickedDelete } =
    useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const [reservation, setReservation] = useState({});
  const [apartment, setApartment] = useState({});
  const [client, setClient] = useState({});
  const options = ["Data dodania", "Sortowanie malejąco"];

  const checkIfHidden = () => {
    if (card == "client") {
      return "hidden";
    } else {
      return "";
    }
  };

  const setClientInformationHidden = () => {
    if (card == "reservation") {
      return "hidden";
    } else {
      return "";
    }
  };

  const setReservationInformationHidden = () => {
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

  if (clickedSave) {
    postDate();
  }

  useEffect(() => {
    dispatch({ type: "MODAL_OPEN_RESERVATION" });
    userService
      .getReservation(reservationId)
      .then((val) => {
        setReservation(val.data.reservation);
        console.log(val.data.reservation);
        userService
          .getApartment(val.data.reservation.houseNumber)
          .then((value) => {
            setApartment(value.data.apartment);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    userService.getApartments().then((val) => {
      val.data.apartments.map((data) => {
        setOptions((prevState) => {
          return [...prevState, { name: data.name, value: data.houseNumber }];
        });
      });
    });

    userService.getClientInformation(clientId).then((val) => {
      setClient(val.data.client);
    });
  }, []);

  const onChangeArriveInput = (e) => {
    countFinalPrice();
    let arriveInput = e.target.value;
    setReservation((prevState) => {
      return {
        ...prevState,
        arrival: dateConverter.convertToISOFormat(arriveInput),
      };
    });
  };

  const onChangeCheckoutInput = (e) => {
    countFinalPrice();
    let checkoutInput = e.target.value;
    setReservation((prevState) => {
      return {
        ...prevState,
        checkout: dateConverter.convertToISOFormat(checkoutInput),
      };
    });
  };

  const onChangeAdultInput = (e) => {
    countFinalPrice();
    let adultInput = e.target.value;
    setReservation((prevState) => {
      return {
        ...prevState,
        adults: adultInput,
      };
    });
  };

  const onChangeChildrenInput = (e) => {
    countFinalPrice();
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
    console.log("ADULTCOST = ", adultCost);
    setReservation((prevState) => {
      return { ...prevState, amount: price };
    });
  };

  const initValue = {
    setClientInformationHidden,
    setReservationInformationHidden,
    countFinalPrice,
    onChangePriceInput,
    onChangeChildrenInput,
    onChangeAdultInput,
    onChangeCheckoutInput,
    onChangeArriveInput,
    checkIfHidden,
    client,
    reservation,
    options,
  };

  return (
    <React.Fragment>
      {props.isOpen &&
        ReactDOM.createPortal(
          <ModalContext.Provider value={initValue}>
            <Modal />
          </ModalContext.Provider>,
          document.getElementById("modal-root")
        )}
    </React.Fragment>
  );
}
