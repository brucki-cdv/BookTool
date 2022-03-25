import RecentClientTable from "./RecentClientsTable";
import { useState, useEffect, createContext } from "react";
import userService from "../../Services/user.service";

export const TableContext = createContext({});

const RecentClientsTableContainer = (props) => {
  const [searchbarInput, setSearchBarInput] = useState("");
  const [selectInput, setSelectInput] = useState(10);
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  
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


  const contextValue = {
    searchbarInput,
    selectInput,
    clients,
    onChangeSearchbar,
    onChangeSelectInput,
    decreasePage,
    increasePage,
  }

  return (
    <TableContext.Provider value={contextValue}>
      <RecentClientTable />
    </TableContext.Provider>
  );
};

export default RecentClientsTableContainer;
