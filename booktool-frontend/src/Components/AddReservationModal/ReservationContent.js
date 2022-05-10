import "./ReservationContent.css";
import ModalHeading from "../Modal/ModalHeading";
import InputDate from "../InputDate";
import InputNumber from "../InputNumber";
import StatusPicker from "../StatusPicker";
import SelectItem from "../SelectItem/SelectItem";
import InputField from "../InputField/InputField";

import { AddReservationContext } from "./AddReservationModalContainer";

import { useContext } from "react";

export default function ReservationContent({ isHidden }) {
  const {
    onArrivalChange,
    onCheckoutChange,
    onStatusChange,
    onAdultNumberChange,
    onChildNumberChange,
    onPriceChange,
    onApartmentIdChange,
    apartmentsOption
  } = useContext(AddReservationContext);

  console.log(apartmentsOption);

  return (
    <div className={`modal-reservation__container ${isHidden && `hidden`}`}>
      <div className="container__left-panel">
        <ModalHeading>Termin</ModalHeading>
        <div className="left-panel__row">
          <InputDate label="Od" onChange={onArrivalChange} />
          <InputDate label="Do" onChange={onCheckoutChange} />
        </div>
        <ModalHeading>Status</ModalHeading>
        <StatusPicker onChange={onStatusChange} />
        <ModalHeading>Ilość Osób</ModalHeading>
        <div className="left-panel__row">
          <InputNumber label="Dorośli" onChange={onAdultNumberChange} />
          <InputNumber label="Dzieci" onChange={onChildNumberChange} />
        </div>
      </div>
      <div className="container__right-panel">
        <ModalHeading>Cena</ModalHeading>
        <InputField
          type="number"
          placeholder="Cena"
          label="Podaj cene"
          onChange={onPriceChange}
        />
        <ModalHeading>Pokój</ModalHeading>
        <SelectItem
          onChange={onApartmentIdChange}
          options={apartmentsOption}
          defaultValue={"Apartment"}
        />
      </div>
    </div>
  );
}
