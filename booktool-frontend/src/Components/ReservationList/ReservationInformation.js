import "./ReservationInformation.css";
import ChapterTitle from "../ChapterTitle";
import InputDate from "../InputDate";
import InputNumber from "../InputNumber";
import SelectOptions from "../SelectOptions";
import ReservationStatus from "../ReservationStatus";
import dateConverter from "../../Helpers/dateConverter";
import { ModalContext } from "./ModalContainer";

import { useContext } from "react";

const ReservationInformation = (props) => {
  const {
    reservation,
    options,
    setReservationInformationHidden,
    onChangeArriveInput,
    onChangeCheckoutInput,
    onChangeAdultInput,
    onChangeChildrenInput,
    onChangePriceInput,
    checkIfHidden,
  } = useContext(ModalContext);


  console.log(reservation);

  return (
    <div className={"body__reservation " + setReservationInformationHidden()}>
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

export default ReservationInformation;
