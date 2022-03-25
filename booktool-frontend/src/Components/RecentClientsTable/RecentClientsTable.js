import "./RecentClientsTable.css";
import Wrapper from "../Wrapper";
import Table from "../Table/Table";
import Container from "../Container";
import RecentClientsTableHeader from "./RecentClientsTableHeader";
import { TableContext } from "./RecentClientsTableContainer";

import { useContext } from "react";

const RecentClientsTable = (props) => {
  const context = useContext(TableContext);
  const headArray = ["Id", "Imię", "Nazwisko", "Email", "Nr. Telefonu"];


  return (
    <Container className="details__recent-reservations-table">
      <Wrapper className="table__wrapper">
        <RecentClientsTableHeader />
        <Table
          head={headArray}
          body={context.clients}
          searchbarInput={context.searchbarInput}
          selectInput={context.selectInput}
        />
      </Wrapper>
    </Container>
  );
};

export default RecentClientsTable;
