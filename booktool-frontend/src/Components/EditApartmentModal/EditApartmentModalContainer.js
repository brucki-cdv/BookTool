import EditApartmentModal from "./EditApartmentModal";
import userService from "../../Services/user.service";

import { useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export const EditApartmentContext = createContext({});

export default function EditApartmentModalContainer(second) {
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState();
  const [houseNumber, setHouseNumber] = useState(null);
  const [adultCost, setAdultCost] = useState();
  const [childrenCost, setChildrenCost] = useState();
  const [maxSlots, setMaxSlots] = useState();
  const { apartmentId } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onNameChange = (e) => setName(e.target.value);
  const onHouseNumberChange = (e) => setHouseNumber(e.target.value);
  const onAdultCostChange = (e) => setAdultCost(e.target.value);
  const onChildCostChange = (e) => setChildrenCost(e.target.value);
  const onMaxSlotsChange = (e) => setMaxSlots(e.target.value);
  const onCloseClick = () => dispatch({ type: "MODAL_CLOSE" });

  const onApartmentUpdate = () => {
    userService.updateApartment(apartmentId, {
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
    userService.getApartment(apartmentId).then((val) => {
      setName(val.data.apartment.name);
      setHouseNumber(val.data.apartment.houseNumber);
      setAdultCost(val.data.apartment.adultCost);
      setChildrenCost(val.data.apartment.childrenCost);
      setMaxSlots(val.data.apartment.maxSlots);
    });
  }, []);

  useEffect(() => {
    validateForm();
  }, [name, houseNumber, maxSlots, childrenCost, adultCost]);

  const initValue = {
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
  };
  return (
    <EditApartmentContext.Provider value={initValue}>
      <EditApartmentModal />
    </EditApartmentContext.Provider>
  );
}
