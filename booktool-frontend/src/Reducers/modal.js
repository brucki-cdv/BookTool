import {
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_OPEN_RESERVATION,
  MODAL_OPEN_CLIENT,
  MODAL_EDIT_DATA,
  MODAL_SAVE_DATA,
  MODAL_DELETE_DATA,
  MODAL_FIRST_LOAD,
  MODAL_SECOND_LOAD
} from "../Constants/modalConstant";

const initialState = {
  isOpen: false,
  reservationId: null,
  clientId: null,
  card: "reservation",
  clickedSave: null,
  clickedDelete: null,
  clickedEdit: null,
  test: 0
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MODAL_OPEN:
      return {
        isOpen: true,
        reservationId: payload.reservationId,
        clientId: payload.clientId,
      };
    case MODAL_CLOSE:
      return {
        isOpen: false,
        reservationId: null,
        clientId: null,
      };

    case MODAL_OPEN_RESERVATION:
      return {
        ...state,
        card: "reservation",
      };

    case MODAL_OPEN_CLIENT:
      return {
        ...state,
        card: "client",
      };

    case MODAL_SAVE_DATA:
      return {
        ...state,
        clickedSave: true,
        isOpen: false
      };

    case MODAL_EDIT_DATA:
      return {
        ...state,
        clickedEdit: true,
      };

    case MODAL_DELETE_DATA:
      return {
        ...state,
        clickedDelete: true,
        isOpen: false
      };

    case MODAL_FIRST_LOAD:
      return {
        ...state,
        isReloaded: false,
      };

    case MODAL_SECOND_LOAD:
      return {
        ...state,
        isReloaded: true,
      };

    default:
      return state;
  }
}
