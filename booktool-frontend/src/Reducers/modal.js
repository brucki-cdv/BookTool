import {
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_OPEN_RESERVATION,
  MODAL_OPEN_CLIENT,
  MODAL_EDIT_DATA,
  MODAL_SAVE_DATA,
  MODAL_DELETE_DATA,
  MODAL_FIRST_LOAD,
  MODAL_SECOND_LOAD,
  ADD_RESERVATION_OPEN,
  EDIT_RESERVATION_OPEN,
  ADD_APARTMENT_OPEN,
  EDIT_APARTMENT_OPEN,
} from "../Constants/modalConstant";

const initialState = {
  isAddReservationOpen: false,
  isEditReservationOpen: false,
  isAddApartmentOpen: false,
  isEditApartmentOpen: false,
  reservationId: null,
  reloadPage: false,
  clientId: null,
  apartmentId: null,
  card: "reservation",
  clickedSave: null,
  clickedDelete: null,
  clickedEdit: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_RESERVATION_OPEN:
      return {
        isAddReservationOpen: true,
      };
    case EDIT_RESERVATION_OPEN:
      return {
        reloadPage: false,
        isEditReservationOpen: true,
        reservationId: payload.reservationId,
        clientId: payload.clientId,
      };
    case ADD_APARTMENT_OPEN:
      return {
        isAddApartmentOpen: true,
      };
    case EDIT_APARTMENT_OPEN:
      return {
        isEditApartmentOpen: true,
        apartmentId: payload,
      };
    case MODAL_CLOSE:
      return {
        isAddApartmentOpen: false,
        isEditApartmentOpen: false,
        isAddReservationOpen: false,
        isEditReservationOpen: false,
        reservationId: null,
        clientId: null,
        reloadPage: true,
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
        isOpen: false,
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
        isOpen: false,
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
