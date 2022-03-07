import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import modal from "./modal";
import reservationList from "./reservationList"
import sidebar from "./sidebar"

export default combineReducers({
  modal,
  auth,
  message,
  reservationList,
  sidebar
});
