import "./AddReservationModal.css";
import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalContainer from "../Modal/ModalContainer";
import ModalHeader from "../Modal/ModalHeader";
import ModalControls from "../Modal/ModalControls";
import ModalControlItem from "../Modal/ModalControlItem";
import ModalTitle from "../Modal/ModalTitle";
import ModalBody from "../Modal/ModalBody";
import ModalTabs from "../Modal/ModalTabs";
import ModalTab from "../Modal/ModalTab";
import ReservationContent from "./ReservationContent";
import ClientContent from "./ClientContent";
import { AddReservationContext } from "./AddReservationModalContainer";

import { useDispatch } from "react-redux";
import { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";

export default function AddReservationModal(second) {
  const [tab, setTab] = useState("reservation");
  const dispatch = useDispatch();
  const { isValid, onReservationCreate } = useContext(AddReservationContext);

  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Dodaj rezerwacje</ModalTitle>
          <ModalControls>
            <ModalControlItem disabled={!isValid} onClick={onReservationCreate}>
              <AiOutlineEdit size={25} />
            </ModalControlItem>
            <ModalControlItem>
              <AiOutlineClose
                size={25}
                onClick={() => dispatch({ type: "MODAL_CLOSE" })}
              />
            </ModalControlItem>
          </ModalControls>
        </ModalHeader>
        <ModalTabs>
          <ModalTab
            style={{ width: "50%" }}
            onClick={() => setTab("reservation")}
            isClicked={tab == "reservation"}
          >
            Rezerwacja
          </ModalTab>
          <ModalTab
            style={{ width: "50%" }}
            onClick={() => setTab("client")}
            isClicked={tab == "client"}
          >
            Klient
          </ModalTab>
        </ModalTabs>
        <ModalBody>
          <ReservationContent isHidden={tab != "reservation"} />
          <ClientContent isHidden={tab != "client"} />
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
}
