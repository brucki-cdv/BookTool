import { MODAL_CLOSE } from "../Constants/modalConstant";

import userService from "../Services/user.service";

export const deleteRecord = (id) => (dispatch) => {
  return userService.deleteReservation(id).then((response) => {
    dispatch({ type: MODAL_CLOSE });
  });
};
