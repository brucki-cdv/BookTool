import AddApartmentModal from "./AddApartmentModal";
import userService from "../../Services/user.service";

import { useState, useEffect, createContext } from "react";
import { useDispatch } from "react-redux";

export const AddApartmentContext = createContext({});

export default function AddApartmentContainer(second) {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState();
  const [houseNumber, setHouseNumber] = useState(null);
  const [adultCost, setAdultCost] = useState();
  const [childrenCost, setChildrenCost] = useState();
  const [maxSlots, setMaxSlots] = useState();

  const onNameChange = (e) => setName(e.target.value);
  const onHouseNumberChange = (e) => setHouseNumber(e.target.value);
  const onAdultCostChange = (e) => setAdultCost(e.target.value);
  const onChildCostChange = (e) => setChildrenCost(e.target.value);
  const onMaxSlotsChange = (e) => setMaxSlots(e.target.value);
  const onCloseClick = () => dispatch({ type: "MODAL_CLOSE" });

  const onApartmentCreate = () => {
    userService.createApartment({
      name: name,
      houseNumber: houseNumber,
      adultCost: adultCost,
      childrenCost: childrenCost,
      maxSlots: maxSlots,
    });
    dispatch({ type: "MODAL_CLOSE" });
  };

  const validateForm = () => {
    if (
      name == "" ||
      houseNumber == "" ||
      adultCost == null ||
      adultCost <= 0 ||
      childrenCost == null ||
      childrenCost <= 0 ||
      maxSlots == null ||
      maxSlots <= 0
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  useEffect(() => {
    validateForm();
  }, [name, houseNumber, maxSlots, childrenCost, adultCost]);

  const initValue = {
    onNameChange,
    onMaxSlotsChange,
    onChildCostChange,
    onAdultCostChange,
    onHouseNumberChange,
    onApartmentCreate,
    onCloseClick,
    isValid,
  };

  return <AddApartmentModal context={initValue} />;
}
