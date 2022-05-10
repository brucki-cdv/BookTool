import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

import ModalContext from "./ModalContainer";

const ModalHeaderTabs = (props) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState({
    reservation: "active",
    client: null,
  });

  useEffect(() => {
    dispatch({ type: "MODAL_OPEN_RESERVATION" });
  }, []);

  const onReservationClick = () => {
    dispatch({ type: "MODAL_OPEN_RESERVATION" });
    setActiveTab({ client: null, reservation: "active" });
  };

  const onClientClick = () => {
    dispatch({ type: "MODAL_OPEN_CLIENT" });
    setActiveTab({ client: "active", reservation: null });
  };

  return (
    <div className="header__tabs">
      <ul>
        <li onClick={onReservationClick} className={`${activeTab.reservation}`}>
          <div>Rezerwacja</div>
        </li>
        <li onClick={onClientClick} className={`${activeTab.client}`}>
          <div>Klient</div>
        </li>
      </ul>
    </div>
  );
};

export default ModalHeaderTabs;
