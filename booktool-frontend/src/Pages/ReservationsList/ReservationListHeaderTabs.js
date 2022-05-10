import "./ReservationListHeaderTabs.css";
import { ReservationContext } from "./ReservationListContainer";

import { useState, useEffect, useContext } from "react";

const ReservationListHeaderTabs = (props) => {
  const { activeTab, onAllClick, onCancelledClick } =
    useContext(ReservationContext);
  return (
    <div className="header__tabs">
      <ul>
        <li className={`${activeTab.all}`} onClick={onAllClick}>
          <div>Najnowsze</div>
        </li>
        <li className={`${activeTab.cancelled}`} onClick={onCancelledClick}>
          <div>Anulowane</div>
        </li>
      </ul>
    </div>
  );
};

export default ReservationListHeaderTabs;
