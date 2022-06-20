import axios from "axios";
import {
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  GET_USER_BYID_SUCCESS,
  UPDATE_USER_LOADING,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  GET_USER_ByID_FAILED,
  GET_USER_ByID_LOADING,
} from "./usertypes";

export const getUsersList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_LOADING });
    const res = await axios.get("/admin/api/user");
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILED, payload: error });
  }
};

export const getUserById = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_ByID_LOADING });
    const res = await axios.get(`/admin/api/user/${userId}`);
    dispatch({ type: GET_USER_BYID_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USER_ByID_FAILED, payload: error });
  }
};

export const updateUser = (userData, nav) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_LOADING });
    const res = await axios.put(`/admin/api/user/${userData._id}`, userData);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    // dispatch(getPosts());
    nav("/Technoriat/UsersList");
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILED, payload: error });
  }
};
