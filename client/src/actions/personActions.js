import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";
export const register = (personData, nav) => async (dispatch) => {
  try {
        //cloud name:bilel
        //preset:Technoriat
        const form= new FormData();
        form.append("file",personData.file);
        form.append("upload_preset","Technoriat");
       const rep = await axios.post("https://api.cloudinary.com/v1_1/bilel/upload",form)
       personData.fichier=rep.data.secure_url
    const res = await axios.post("/api/person/register", personData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    nav("/Technoriat/Login");
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};

export const login = (personData, nav) => async (dispatch) => {
  try {
    const res = await axios.post("/api/person/login", personData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    if (res.data.existUser.role ==='user') nav("/Technoriat/Profil");
    else if (res.data.existUser.role ==='admin') nav("/Technoriat/Dashbord");
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};
