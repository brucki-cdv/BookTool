import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_USER,
  SET_ERROR,
} from "../Constants/authConstant";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case SET_USER:
      return {
        user: payload,
        isLoggedIn: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
