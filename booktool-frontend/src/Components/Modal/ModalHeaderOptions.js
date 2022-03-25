import MaterialIcon from "../MaterialIcon";


import { useState } from "react";
import { useDispatch } from "react-redux";

const ModalHeaderOptions = (props) => {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deleteRecord(reservationId));
    window.location.reload(false);
  };

  const onCloseClick = () => {
    dispatch({ type: "MODAL_CLOSE" });
  };

  const onSaveClick = () => {
    dispatch(deleteRecord(reservationId));
    window.location.reload(false);
  };

  const onEditClick = () => {
    dispatch({ type: "MODAL_EDIT_DATA" });
    window.location.reload(false);
  };

  return (
    <div className="header__options">
      <ul>
        <li onClick={onEditClick}>
          <MaterialIcon name="edit" />
        </li>
        <li className="options__delete" onClick={onDeleteClick}>
          <MaterialIcon name="delete" />
        </li>
        <li className="options__save" onClick={onSaveClick}>
          <span>
            Zapisz
            <MaterialIcon name="save" />
          </span>
        </li>
        <li onClick={onCloseClick}>
          <MaterialIcon name="close" />
        </li>
      </ul>
    </div>
  );
};

export default ModalHeaderOptions;
