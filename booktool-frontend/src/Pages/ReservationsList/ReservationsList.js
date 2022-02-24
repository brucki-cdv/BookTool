import "./ReservationsList.css";
import FormTitle from "../../Components/FormTitle/FormTitle";
import SelectOptions from "../../Components/SelectOptions/SelectOptions";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MaterialIcon from "../../Components/MaterialIcon/MaterialIcon";

const ReservationsListHeader = (props) => {
  const options = ["Data dodania", "Data od"];

  return (
    <div className="reservations-list__header">
      <span className="header__reservation-number">
        Liczba rezerwacji {props.reservationNumber}
      </span>
      <div className="header__options">
        <ul>
          <li>
            <SelectOptions options={options} label="Sortuj:" />
          </li>
          <li>
            <SearchBar lightMode={true} />
          </li>
        </ul>
      </div>
      <div className="header__tabs">
        <ul>
          <li>
            <div>Najnowsze</div>
          </li>
          <li>
            <div>Anulowane</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Reservation = (props) => {
  return (
    <div className="reservation">
      <div className="reservation__house">
        <span className="reservation__house__icon">
          <MaterialIcon name="event" />
        </span>
        <ul>
          <li className="house__title">Pokój nr. 1</li>
          <li className="house__status">Zapłacono</li>
        </ul>
      </div>
      <div className="reservation__information">
        <ul>
          <li>
            <div className="reservation__icon">
              <MaterialIcon name="arrow_forward" />
            </div>
            <span className="information__text">2020-01-20</span>
          </li>
          <li>
            <div className="reservation__icon">
              <MaterialIcon name="arrow_back" />
            </div>
            <span className="information__text">2020-01-25</span>
          </li>
          <li>
            <div className="reservation__icon">
              <MaterialIcon name="attach_money" />
            </div>
            <span className="information__text">250</span>
          </li>
          <li>
            <div className="reservation__icon">
              <MaterialIcon name="tag" />
            </div>
            <span className="information__text">123123132</span>
          </li>
        </ul>
      </div>
      <div className="reservation__options">
        <ul>
          <li>
            <MaterialIcon name="edit" />
          </li>
          <li>
            <MaterialIcon name="delete" />
          </li>
          <li>
            <MaterialIcon name="visibility" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const ReservationsListBody = (props) => {
  return (
    <div className="reservations-list__body">
      <div className="list-body__reservations">
        <Reservation />
        <Reservation />
        <Reservation />
      </div>
    </div>
  );
};

const ReservationsListWrapper = (props) => {
  return <div className="reservations-list__wrapper">{props.children}</div>;
};

const ReservationsList = (props) => {
  return (
    <div>
      <FormTitle name="Lista rezerwacji" />
      <ReservationsListWrapper>
        <ReservationsListHeader />
        <ReservationsListBody />
      </ReservationsListWrapper>
    </div>
  );
};

export default ReservationsList;
