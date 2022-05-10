import "./ReservationListHeaderOptions.css";
import SelectOptions from "../../Components/SelectOptions";
import SearchBar from "../../Components/SearchBar";
import CreateButton from "../../Components/CreateButton";

import { useContext } from "react";
import { ReservationContext } from "./ReservationListContainer";

const ReservationListHeaderOptions = (props) => {
  const options = ["Data dodania", "Data od"];
  const context = useContext(ReservationContext);

  return (
    <div className="reservation-list-header__options">
      <ul>
        <li>
          <SelectOptions options={options} label="Sortuj:" />
        </li>
        <li>
          <CreateButton
            name="Dodaj rezerwacje"
            onClick={context.onAddReservationClick}
          />
        </li>
      </ul>
    </div>
  );
};

export default ReservationListHeaderOptions;
