import "./ClientContent.css";
import ModalHeading from "../Modal/ModalHeading";
import InputField from "../InputField";

import { ReservationDetailsContext } from "./ReservationDetailsContainer";

import { useContext } from "react";

export default function ClientContent({ isHidden }) {
  const {
    onFirstNameChange,
    onLastNameChange,
    onPhoneNumberChange,
    onEmailChange,
    firstName,
    lastName,
    phoneNumber,
    email,
    isValid,
  } = useContext(ReservationDetailsContext);

  return (
    <div className={`modal-client__container ${isHidden && "hidden"}`}>
      <ModalHeading>Dane Klienta</ModalHeading>
      <InputField
        type="text"
        placeholder="Imię"
        label="Imię"
        value={firstName}
        onChange={onFirstNameChange}
      />
      <InputField
        type="text"
        placeholder="Nazwisko"
        label="Nazwisko"
        value={lastName}
        onChange={onLastNameChange}
      />
      <InputField
        type="text"
        placeholder="Telefon"
        label="Telefon"
        value={phoneNumber}
        onChange={onPhoneNumberChange}
      />
      <InputField
        type="text"
        placeholder="Email"
        label="Email"
        value={email}
        onChange={onEmailChange}
      />
    </div>
  );
}
