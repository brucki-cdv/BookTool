import AddReservationModal from "./AddReservationModal";
import userService from "../../Services/user.service";

import { useState, useEffect, createContext } from "react";
import { useDispatch } from "react-redux";

export const AddReservationContext = createContext({});

export default function AddReservationModalContainer(second) {
  const [arrival, setArrival] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [status, setStatus] = useState(null);
  const [adultNumber, setAdultNumber] = useState("");
  const [childrenNumber, setChildrenNumber] = useState("");
  const [price, setPrice] = useState("");
  const [apartmentId, setApartmentId] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [apartmentsOption, setApartmentsOption] = useState([]);
  const dispatch = useDispatch();

  const onArrivalChange = (e) => setArrival(e.target.value);
  const onCheckoutChange = (e) => setCheckout(e.target.value);
  const onStatusChange = (e) => setStatus(e);
  const onAdultNumberChange = (e) => setAdultNumber(e.target.value);
  const onChildNumberChange = (e) => setChildrenNumber(e.target.value);
  const onPriceChange = (e) => setPrice(e.target.value);
  const onApartmentIdChange = (e) => setApartmentId(e);
  const onFirstNameChange = (e) => setFirstName(e.target.value);
  const onLastNameChange = (e) => setLastName(e.target.value);
  const onPhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);

  const onReservationCreate = () => {
    userService
      .createReservation({
        arrival: arrival,
        checkout: checkout,
        status: status,
        adults: adultNumber,
        children: childrenNumber,
        amount: price,
        apartment: apartmentId,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
      })
      
      

    dispatch({ type: "MODAL_CLOSE" });
  };

  useEffect(() => {
    userService.getApartments().then((val) => {
      val.data.apartments.map((apartment) => {
        setApartmentsOption((prevState) => {
          return [...prevState, { value: apartment._id, name: apartment.name }];
        });
      });
    });
  }, []);

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
    apartmentsOption,
  ]);

  const initValue = {
    onArrivalChange,
    onCheckoutChange,
    onStatusChange,
    onAdultNumberChange,
    onChildNumberChange,
    onPriceChange,
    onApartmentIdChange,
    onFirstNameChange,
    onLastNameChange,
    onPhoneNumberChange,
    onEmailChange,
    onReservationCreate,
    isValid,
    apartmentsOption,
  };
  return (
    <AddReservationContext.Provider value={initValue}>
      <AddReservationModal />,
    </AddReservationContext.Provider>
  );
}
