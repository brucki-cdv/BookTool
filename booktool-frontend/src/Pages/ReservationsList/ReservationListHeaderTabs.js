import "./ReservationListHeaderTabs.css";
import Container from "../../Components/Container";
import { ReservationContext } from "./ReservationListContainer";

import { useState, useEffect, useContext } from "react";

const ReservationListHeaderTabs = (props) => {
  const { activeTab, onAllClick, onCancelledClick } =
    useContext(ReservationContext);
  return (
    <Container className="header__tabs">
      <ul>
        <li className={`${activeTab.all}`} onClick={onAllClick}>
          <div>Najnowsze</div>
        </li>
        <li className={`${activeTab.cancelled}`} onClick={onCancelledClick}>
          <div>Anulowane</div>
        </li>
      </ul>
    </Container>
  );
};

export default ReservationListHeaderTabs;
