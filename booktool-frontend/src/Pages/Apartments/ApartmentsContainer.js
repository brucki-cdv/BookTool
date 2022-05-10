import Apartments from "./Apartments";
import userService from "../../Services/user.service";

import { useState, useEffect, createContext } from "react";
import { useSelector } from "react-redux";

export const ApartmentsContext = createContext({});

export default function ApartmentsContainer(second) {
  const [apartments, setAparments] = useState([]);
  const { reloadPage } = useSelector((state) => state.modal);

  useEffect(() => {
    userService.getApartments().then((val) => {
      setAparments(val.data.apartments);
    });
  }, [reloadPage]);

  const initValue = {
    apartments,
  };
  return (
    <ApartmentsContext.Provider value={initValue}>
      <Apartments />
    </ApartmentsContext.Provider>
  );
}
