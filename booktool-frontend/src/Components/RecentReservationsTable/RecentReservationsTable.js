import "./RecentReservationsTable.css";
import TableWrapper from "../Table/TableWrapper";
import Table from "../Table/Table";
import FormTitle from "../FormTitle/FormTitle";
import SearchBar from "../SearchBar/SearchBar";
import SelectOptions from "../SelectOptions/SelectOptions";
import SwitchPageButton from "../SwitchPageButton/SwitchPageButton";


const RecentReservationsTable = (props) => {
  let headArray = ["Nr.", "Konto", "Test"];
  let bodyArray = [
    ["1", "Bartka", "Elo"],
    ["2", "Tomasz", "Kozak"],
  ];

  let options = [10, 20, 50];

  let iconArray = ["", "event", "phone", "message"];

  return (
    <div className="details__recent-reservations-table">
      <TableWrapper>
        <div className="wrapper__header">
          {props.title && <FormTitle name={props.title} />}
          <div className="searchbar-container">
            <SearchBar lightMode={true} />
          </div>
          <div className="options">
            <SelectOptions id="numbers" label="Ilość:" options={options} />
            <SwitchPageButton />
            <span className="table__button">Więcej</span>
          </div>
        </div>
        <Table head={props.headArray} body={props.bodyArray} icon={iconArray} />
      </TableWrapper>
    </div>
  );
};

export default RecentReservationsTable;
