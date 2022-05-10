import ReservationDetails from "./ReservationDetails";
import userService from "../../Services/user.service";

import { useState, useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import moment from "moment";

export const ReservationDetailsContext = createContext({});

export default function ReservationDetailsContainer(second) {
  const { reservationId } = useSelector((state) => state.modal);
  const [arrival, setArrival] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [status, setStatus] = useState(null);
  const [adultNumber, setAdultNumber] = useState("");
  const [childrenNumber, setChildrenNumber] = useState("");
  const [price, setPrice] = useState("");
  const [apartmentId, setApartmentId] = useState("");
  const [apartmentName, setApartmentName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [apartmentsOption, setApartmentsOption] = useState([]);
  const [clientId, setClientId] = useState("");
  const [adultCost, setAdultCost] = useState(0);
  const [childrenCost, setChildrenCost] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(reservationId);
    userService.getReservation(reservationId).then((val) => {
      console.log(val);
      setArrival(
        moment(new Date(val.data.reservation.arrival)).format("YYYY-MM-DD")
      );
      setCheckout(
        moment(new Date(val.data.reservation.checkout)).format("YYYY-MM-DD")
      );

      setStatus(val.data.reservation.status);
      setAdultNumber(val.data.reservation.adults);
      setChildrenNumber(val.data.reservation.children);
      setApartmentId(val.data.reservation.apartment._id);
      setApartmentName(val.data.reservation.apartment.name);
      setPrice(val.data.reservation.amount);
      setFirstName(val.data.reservation.client.firstName);
      setLastName(val.data.reservation.client.lastName);
      setPhoneNumber(val.data.reservation.client.phoneNumber);
      setEmail(val.data.reservation.client.email);
      setClientId(val.data.reservation.client._id);
      setAdultCost(val.data.reservation.apartment.adultCost);
      setChildrenCost(val.data.reservation.apartment.childrenCost);
    });

    userService.getApartments().then((val) => {
      val.data.apartments.map((apartment) => {
        setApartmentsOption((prevState) => {
          return [...prevState, { value: apartment._id, name: apartment.name }];
        });
      });
    });
  }, []);

  useEffect(() => {
    userService.getApartment(apartmentId).then((val) => {
      console.log(val);
    });
  }, [apartmentsOption]);

  const onArrivalChange = (e) => setArrival(e.target.value);
  const onCheckoutChange = (e) => setCheckout(e.target.value);
  const onStatusChange = (e) => setStatus(e);
  const onAdultNumberChange = (e) => setAdultNumber(e.target.value);
  const onChildrenNumberChange = (e) => setChildrenNumber(e.target.value);
  const onApartmentIdChange = (e) => setApartmentId(e);
  const onPriceChange = (e) => setPrice(e.target.value);
  const onFirstNameChange = (e) => setFirstName(e.target.value);
  const onLastNameChange = (e) => setLastName(e.target.value);
  const onPhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onEditReservation = () => {
    userService.updateReservation(reservationId, {
      arrival: new Date(arrival).toISOString(),
      checkout: new Date(checkout).toISOString(),
      apartment: apartmentId,
      client: clientId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      adults: adultNumber,
      children: childrenNumber,
      amount: price,
      status: status,
    });

    dispatch({ type: "MODAL_CLOSE" });
  };

  const days = (date_2, date_1) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };

  const calculatePrice = () => {
    let daysBetweenDates = days(new Date(arrival), new Date(checkout));
    console.log(daysBetweenDates);
    console.log(adultNumber);
    console.log(adultCost);
    setPrice(
      adultCost * adultNumber * daysBetweenDates +
        childrenCost * childrenNumber * daysBetweenDates
    );
  };

  useEffect(() => {
    calculatePrice();
  }, [arrival, checkout, adultNumber, childrenNumber]);

  const validateForm = () => {
    if (
      arrival == null ||
      checkout == null ||
      status == null ||
      adultNumber <= 0 ||
      adultNumber == "" ||
      childrenNumber == "" ||
      childrenNumber < 0 ||
      price < 0 ||
      price == "" ||
      firstName == "" ||
      lastName == "" ||
      phoneNumber == "" ||
      email == ""
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  useEffect(() => {
    validateForm();
  }, [
    arrival,
    checkout,
    status,
    adultNumber,
    childrenNumber,
    price,
    apartmentId,
    firstName,
    lastName,
    email,
    phoneNumber,
  ]);

  const initValue = {
    onArrivalChange,
    onCheckoutChange,
    onStatusChange,
    onAdultNumberChange,
    onChildrenNumberChange,
    onApartmentIdChange,
    onPriceChange,
    onFirstNameChange,
    onLastNameChange,
    onPhoneNumberChange,
    onEmailChange,
    onEditReservation,
    arrival,
    checkout,
    status,
    adultNumber,
    childrenNumber,
    price,
    apartmentId,
    apartmentName,
    firstName,
    lastName,
    phoneNumber,
    email,
    isValid,
    apartmentsOption,
  };
  return (
    <ReservationDetailsContext.Provider value={initValue}>
      <ReservationDetails />
    </ReservationDetailsContext.Provider>
  );
}
