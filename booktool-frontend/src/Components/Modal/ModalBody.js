import "./ModalBody.css";
import InputDate from "../InputDate/InputDate";
import InputNumber from "../InputNumber/InputNumber";
import ChapterTitle from "../ChapterTitle/ChapterTitle";
import ReservationStatus from "../ReservationStatus/ReservationStatus";
import SelectOptions from "../SelectOptions/SelectOptions";
import InputField from "../InputField/InputField";

const ReservationInformation = (props) => {
  let options = ["Domek 1", "Domek 2", "Domek 3", "Domek 4", "Domek 5"];

  return (
    <div className="body__reservation">
      <div className="reservation__left">
        <div className="reservation__date-picker">
          <ChapterTitle title="Data rezerwacji" />
          <div className="date-picker__inputs">
            <InputDate label="Od" />
            <InputDate label="Do" />
          </div>
          <InputNumber id="date-in-days" label="Ilość dni" />
        </div>
        <div className="reservation__status">
          <ChapterTitle title="Status rezerwacji" />
          <ReservationStatus />
        </div>
        <div className="reservation__number-of-people">
          <ChapterTitle title="Liczba osób" />
          <div className="date-picker__inputs">
            <InputDate label="Dorośli" />
            <InputDate label="Dzieci" />
          </div>
        </div>
        <div className="reservation__house-picker">
          <ChapterTitle title="Wybrany domek" />
          <SelectOptions id="house" label="Domek" options={options} />
        </div>
        <div className="reservation__price">
          <ChapterTitle title="Cena" />
          sertstststs
        </div>
      </div>
      <div className="reservation__right">
        <ChapterTitle title="Cena" />
        <InputNumber label="Cena końcowa"/>
        <InputNumber label="Zadatek"/>
      </div>
    </div>
  );
};

const ClientInformation = (props) => {
  return (
    <div className="body__client">
      <ChapterTitle title="Dane osobowe" />
      <InputField name="test" label="Imię"/>
      <InputField name="test" label="Nazwisko"/>
      <InputField name="test" label="Numer telefonu"/>
      <InputField name="test" label="Email"/>
    </div>
  )
}

const ModalBody = (props) => {
  return (
    <div className="modal-body">
      {/* <ReservationInformation /> */}
      {/* <ClientInformation /> */}
    </div>
  );
};

export default ModalBody;
