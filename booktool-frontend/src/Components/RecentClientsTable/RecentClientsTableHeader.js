import "./RecentClientsTableHeader.css";
import Container from "../Container";
import Title from "../Title";
import SearchBar from "../SearchBar";
import SelectOptions from "../SelectOptions";
import SwitchPageButton from "../SwitchPageButton";

import { TableContext } from "./RecentClientsTableContainer";
import { useContext } from "react";

const RecentClientsTableHeader = (props) => {
  const context = useContext(TableContext);
  const selectOptions = [10, 20, 50];

  return (
      <Container className="wrapper__header">
        <Container className="searchbar-container">
          <SearchBar
            lightMode={true}
            onChange={context.onChangeSearchbar}
            placeholder="Szukaj..."
          />
        </Container>
        <Container className="header__options">
          <SelectOptions
            id="numbers"
            label="Ilość:"
            options={selectOptions}
            onChange={context.onChangeSelectInput}
            className="options"
          />
          <SwitchPageButton
            onLeftButtonClick={context.decreasePage}
            onRightButtonClick={context.increasePage}
          />
        </Container>
      </Container>

  );
};

export default RecentClientsTableHeader;
