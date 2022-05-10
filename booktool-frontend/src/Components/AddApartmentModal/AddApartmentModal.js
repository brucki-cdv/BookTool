import "./AddApartmentModal.css";
import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalContainer from "../Modal/ModalContainer";
import ModalHeader from "../Modal/ModalHeader";
import ModalControls from "../Modal/ModalControls";
import ModalControlItem from "../Modal/ModalControlItem";
import ModalTitle from "../Modal/ModalTitle";
import ModalBody from "../Modal/ModalBody";
import InputField from "../InputField";
import { AddApartmentContext } from "./AddApartmentModalContainer";

import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { useContext } from "react";

export default function AddApartmentModal(second) {
  const {
    onNameChange,
    onMaxSlotsChange,
    onChildCostChange,
    onAdultCostChange,
    onHouseNumberChange,
    onApartmentCreate,
    onCloseClick,
    isValid,
  } = useContext(AddApartmentContext);
  return (
    <ModalBackdrop>
      <ModalContainer style={{ width: "520px" }}>
        <ModalHeader>
          <ModalTitle>Dodaj pokój</ModalTitle>
          <ModalControls>
            <ModalControlItem disabled={!isValid} onClick={onApartmentCreate}>
              <AiOutlineEdit size={25} />
            </ModalControlItem>
            <ModalControlItem onClick={onCloseClick}>
              <AiOutlineClose size={25} />
            </ModalControlItem>
          </ModalControls>
        </ModalHeader>
        <ModalBody>
          <div className="add-apartments__input-container">
            <InputField
              type="text"
              label="Enter name"
              onChange={onNameChange}
            />
            <InputField
              type="text"
              label="Enter apartment ID"
              onChange={onHouseNumberChange}
            />
            <InputField
              type="number"
              label="Adult cost"
              onChange={onAdultCostChange}
            />
            <InputField
              type="number"
              label="Children cost"
              onChange={onChildCostChange}
            />
            <InputField
              type="number"
              label="Max slots"
              onChange={onMaxSlotsChange}
            />
          </div>
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
}
