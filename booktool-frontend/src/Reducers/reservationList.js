import {
  RESERVATION_LIST_ALL_RESERVATION,
  RESERVATION_LIST_CANCELLED_RESERVATION,
} from "../Constants/reservationListConstant";

const initialState = {
  card: "all",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_LIST_CANCELLED_RESERVATION:
      return {
        card: "cancelled",
      };
    case RESERVATION_LIST_ALL_RESERVATION:
      return {
        card: "all",
      };
    default:
      return state;
  }
}
