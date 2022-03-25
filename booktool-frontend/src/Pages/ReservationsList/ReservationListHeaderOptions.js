import Container from "../../Components/Container";
import SelectOptions from "../../Components/SelectOptions";
import SearchBar from "../../Components/SearchBar";

import { useContext } from "react";
import { ReservationContext } from "./ReservationListContainer";

const ReservationListHeaderOptions = (props) => {
  const options = ["Data dodania", "Data od"];
  const context = useContext(ReservationContext);

  return (
    <Container className="header__options">
      <ul>
        <li>
          <SelectOptions options={options} label="Sortuj:" />
        </li>
        <li>
          <SearchBar
            lightMode={true}
            onChange={context.onChangeSearchbarInput}
          />
        </li>
      </ul>
    </Container>
  );
};

export default ReservationListHeaderOptions;
