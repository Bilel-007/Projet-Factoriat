import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/types";

const initState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},
  token: localStorage.getItem("token") || null,
  errors: null,
  isAuth: Boolean(localStorage.getItem("isAuth")) || false,
};
const PersonReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return { ...state, errors: payload };
    case REGISTER_SUCCESS:
      return {
        ...state,
        userInfo: payload.newPerson,
        errors: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("userInfo", JSON.stringify(payload.existUser));

      return {
        ...state,
        userInfo: payload.existUser,
        token: payload.token,
        isAuth: true,
        errors: null,
      };
    case LOGOUT:
      localStorage.clear();
      return { ...state, token: null, userInfo: {}, isAuth: false };
    default:
      return state;
  }
};
export default PersonReducer;
