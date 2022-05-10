import "./ClientContent.css";
import ModalHeading from "../Modal/ModalHeading";
import InputField from "../InputField";

import { AddReservationContext } from "./AddReservationModalContainer";

import { useContext } from "react";

export default function ClientContent({ isHidden }) {
  const {
    onFirstNameChange,
    onLastNameChange,
    onPhoneNumberChange,
    onEmailChange,
  } = useContext(AddReservationContext);

  return (
    <div className={`modal-client__container ${isHidden && "hidden"}`}>
      <ModalHeading>Dane Klienta</ModalHeading>
      <InputField
        type="text"
        placeholder="Imię"
        label="Imię"
        onChange={onFirstNameChange}
      />
      <InputField
        type="text"
        placeholder="Nazwisko"
        label="Nazwisko"
        onChange={onLastNameChange}
      />
      <InputField
        type="text"
        placeholder="Telefon"
        label="Telefon"
        onChange={onPhoneNumberChange}
      />
      <InputField
        type="text"
        placeholder="Email"
        label="Email"
        onChange={onEmailChange}
      />
    </div>
  );
}
