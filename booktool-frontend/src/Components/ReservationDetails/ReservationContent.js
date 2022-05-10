import "./ReservationContent.css";
import ModalHeading from "../Modal/ModalHeading";
import InputDate from "../InputDate";
import InputNumber from "../InputNumber";
import StatusPicker from "../StatusPicker";
import SelectItem from "../SelectItem/SelectItem";
import InputField from "../InputField/InputField";

import { ReservationDetailsContext } from "./ReservationDetailsContainer";

import { useContext } from "react";

export default function ReservationContent({ isHidden }) {
  const {
    onArrivalChange,
    onCheckoutChange,
    onStatusChange,
    onAdultNumberChange,
    onChildrenNumberChange,
    onApartmentIdChange,
    onPriceChange,
    arrival,
    checkout,
    status,
    adultNumber,
    childrenNumber,
    price,
    apartmentName,
    apartmentsOption,
  } = useContext(ReservationDetailsContext);

  console.log(apartmentsOption);

  return (
    <div className={`modal-reservation__container ${isHidden && `hidden`}`}>
      <div className="container__left-panel">
        <ModalHeading>Termin</ModalHeading>
        <div className="left-panel__row">
          <InputDate label="Od" value={arrival} onChange={onArrivalChange} />
          <InputDate label="Do" value={checkout}  min={arrival} onChange={onCheckoutChange} />
        </div>
        <ModalHeading>Status</ModalHeading>
        <StatusPicker onChange={onStatusChange} value={status} />
        <ModalHeading>Ilość Osób</ModalHeading>
        <div className="left-panel__row">
          <InputNumber
            label="Dorośli"
            value={adultNumber}
            onChange={onAdultNumberChange}
          />
          <InputNumber
            label="Dzieci"
            value={childrenNumber}
            onChange={onChildrenNumberChange}
          />
        </div>
      </div>
      <div className="container__right-panel">
        <ModalHeading>Cena</ModalHeading>
        <InputField
          type="number"
          placeholder="Cena"
          label="Podaj cene"
          value={price}
          onChange={onPriceChange}
        />
        <ModalHeading>Pokój</ModalHeading>
        <SelectItem
          onChange={onApartmentIdChange}
          options={apartmentsOption}
          defaultValue={apartmentName}
        />
      </div>
    </div>
  );
}
