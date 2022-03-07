import "./RecentReservationsTable.css";
import TableWrapper from "../Table/TableWrapper";
import Table from "../Table/Table";
import FormTitle from "../FormTitle/FormTitle";
import SearchBar from "../SearchBar/SearchBar";
import SelectOptions from "../SelectOptions/SelectOptions";
import SwitchPageButton from "../SwitchPageButton/SwitchPageButton";
import { useState, useEffect } from "react";
import userService from "../../Services/user.service";

const RecentReservationsTable = (props) => {
  let options = [10, 20, 50];
  let iconArray = ["", "event", "phone", "message"];
  const [searchbarInput, setSearchBarInput] = useState("");
  const [selectInput, setSelectInput] = useState(10);
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  const headArray = ["Id", "Imię", "Nazwisko", "Email", "Nr. Telefonu"];

  useEffect(() => {
    userService
      .getAllClients(page, selectInput)
      .then((val) => setClients(val.data.clients));
  }, [selectInput, page]);

  const onChangeSearchbar = (e) => {
    const searchbar = e.target.value;
    setSearchBarInput(searchbar);
  };

  const onChangeSelectInput = (e) => {
    const select = e.target.value;
    setSelectInput(select);
  };

  const decreasePage = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

  const increasePage = () => {
    setPage(page + 1);

    if (clients.length == 0) {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };


  return (
    <div className="details__recent-reservations-table">
      <TableWrapper>
        <div className="wrapper__header">
          {props.title && <FormTitle name={props.title} />}
          <div className="searchbar-container">
            <SearchBar lightMode={true} onChange={onChangeSearchbar} />
          </div>
          <div className="options">
            <SelectOptions
              id="numbers"
              label="Ilość:"
              options={options}
              onChange={onChangeSelectInput}
            />
            <SwitchPageButton
              onLeftButtonClick={decreasePage}
              onRightButtonClick={increasePage}
            />
            <span className="table__button">Więcej</span>
          </div>
        </div>
        <Table
          head={headArray}
          body={clients}
          icon={iconArray}
          searchbarInput={searchbarInput}
          selectInput={selectInput}
        />
      </TableWrapper>
    </div>
  );
};

export default RecentReservationsTable;
