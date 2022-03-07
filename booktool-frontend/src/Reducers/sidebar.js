import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../Constants/sidebarConstant";

const initialState = {
  isOpen: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case OPEN_SIDEBAR:
      return {
        isOpen: true,
      };
    case CLOSE_SIDEBAR:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
}
