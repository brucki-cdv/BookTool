import "./InformationCardsContainer.css";
import InformationCards from "./InformationCards";
import userService from "../../Services/user.service";

import { useState, useEffect } from "react";

const InformationCardsContainer = (props) => {
  const [summary, setSummary] = useState({});
  const [fetchInformation, setFetchInformation] = useState({
    loading: true,
    error: null,
  });

  useEffect(() => {
    userService
      .getReservationSummary()
      .then((val) => {
        setSummary(val.data);
        setFetchInformation((prevState) => {
          return { ...prevState, loading: false };
        });
      })
      .catch((err) => {
        setFetchInformation((prevState) => {
          return { ...prevState, error: err };
        });
      });
  }, []);

  if (fetchInformation.error) {
    return "";
  } else if (fetchInformation.loading) {
    return "";
  }

  return <InformationCards informations={summary} />;
};

export default InformationCardsContainer;
