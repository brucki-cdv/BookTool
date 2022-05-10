import "./EditApartmentModal.css";
import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalContainer from "../Modal/ModalContainer";
import ModalHeader from "../Modal/ModalHeader";
import ModalControls from "../Modal/ModalControls";
import ModalControlItem from "../Modal/ModalControlItem";
import ModalTitle from "../Modal/ModalTitle";
import ModalBody from "../Modal/ModalBody";
import InputField from "../InputField";
import { EditApartmentContext } from "./EditApartmentModalContainer";

import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { useContext } from "react";

export default function EditApartmentModal(second) {
  const {
    onNameChange,
    onMaxSlotsChange,
    onChildCostChange,
    onAdultCostChange,
    onHouseNumberChange,
    onApartmentUpdate,
    onCloseClick,
    name,
    houseNumber,
    adultCost,
    childrenCost,
    maxSlots,
    isValid,
  } = useContext(EditApartmentContext);
  return (
    <ModalBackdrop>
      <ModalContainer style={{ width: "520px" }}>
        <ModalHeader>
          <ModalTitle>Edytuj pokój</ModalTitle>
          <ModalControls>
            <ModalControlItem disabled={!isValid} onClick={onApartmentUpdate}>
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
              value={name}
            />
            <InputField
              type="text"
              label="Enter apartment ID"
              onChange={onHouseNumberChange}
              value={houseNumber}
            />
            <InputField
              type="number"
              label="Adult cost"
              onChange={onAdultCostChange}
              value={adultCost}
            />
            <InputField
              type="number"
              label="Children cost"
              onChange={onChildCostChange}
              value={childrenCost}
            />
            <InputField
              type="number"
              label="Max slots"
              onChange={onMaxSlotsChange}
              value={maxSlots}
            />
          </div>
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
}
