import {
  GET_USER_BYID_SUCCESS,
  GET_USER_FAILED,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_LOADING,
  UPDATE_USER_SUCCESS,
} from "../actions/usertypes";

const initState = {
  clientList: [],
  loading: false,
  errors: null,
};

const UserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_USER_LOADING:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, clientList: payload, loading: false, errors: false };
    case GET_USER_FAILED:
      return { ...state, loading: false, errors: payload };
    case GET_USER_BYID_SUCCESS:
      return { ...state, clientInfo: payload };
    case UPDATE_USER_LOADING:
      return { ...state, loading: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, clientId: payload, loading: false, errors: false };
    case UPDATE_USER_FAILED:
      return { ...state, loading: false, errors: payload };
    default:
      return state;
  }
};
export default UserReducer;
