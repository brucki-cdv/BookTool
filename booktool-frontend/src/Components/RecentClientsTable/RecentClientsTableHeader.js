import "./RecentClientsTableHeader.css";
import Searchbar from "../Searchbar";
import SelectOptions from "../SelectOptions";
import SwitchPageButton from "../SwitchPageButton";
import CreateButton from "../CreateButton";
import { TableContext } from "./RecentClientsTableContainer";

import { useContext } from "react";

export default function RecentClientsTableHeader(props) {
  const context = useContext(TableContext);
  const selectOptions = [10, 20, 50];

  return (
    <div className="wrapper__header">
      <div className="searchbar-container">
        <Searchbar
          lightMode={true}
          onChange={context.onChangeSearchbar}
          placeholder="Szukaj..."
        />
      </div>
      <div className="header__options">
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
        <CreateButton name="Dodaj klienta" />
      </div>
    </div>
  );
}
