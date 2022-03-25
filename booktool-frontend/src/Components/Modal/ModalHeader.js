import "./ModalHeader.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";
import ModalHeaderTitle from "./ModalHeaderTitle";
import ModalHeaderOptions from "./ModalHeaderOptions";
import ModalHeaderTabs from "./ModalHeaderTabs";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { deleteRecord } from "../../Actions/modal";

const ModalHeader = (props) => {
  return (
    <div className="modal-header">
      <ModalHeaderTitle />
      <ModalHeaderOptions />
      <ModalHeaderTabs />
    </div>
  );
};

export default ModalHeader;
