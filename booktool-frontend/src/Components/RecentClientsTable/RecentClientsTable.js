import "./RecentClientsTable.css";
import Wrapper from "../Wrapper";
import Table from "../Table/Table";

import RecentClientsTableHeader from "./RecentClientsTableHeader";
import { TableContext } from "./RecentClientsTableContainer";

import { useContext } from "react";

export default function RecentClientsTable(props) {
  const context = useContext(TableContext);
  const headArray = ["Id", "Imię", "Nazwisko", "Email", "Nr. Telefonu"];

  return (
    <div className="details__recent-reservations-table">
      <div className="wrapper table__wrapper">
        <RecentClientsTableHeader />
        <Table
          head={headArray}
          body={context.clients}
          searchbarInput={context.searchbarInput}
          selectInput={context.selectInput}
        />
      </div>
    </div>
  );
}
