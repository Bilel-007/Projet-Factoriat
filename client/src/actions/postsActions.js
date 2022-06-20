import axios from "axios";
import {
  ADD_POST_FAILED,
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
  DELETE_POST_FAILED,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  GET_POST_BYID_SUCCESS,
  GET_POST_FAILED,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  UPDATE_POST_FAILED,
  UPDATE_POST_LOADING,
  UPDATE_POST_SUCCESS,
} from "./poststypes";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_LOADING });
    const res = await axios.get("/admin/api/post");
    dispatch({ type: GET_POST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_POST_FAILED, payload: error });
  }
};

export const getPostById = (postId) => async (dispatch) => {
  try {
    // dispatch({ type: GET_POST_LOADING });
    const res = await axios.get(`/admin/api/post/${postId}`);
    dispatch({ type: GET_POST_BYID_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_POST_FAILED, payload: error });
  }
};

export const addPost = (postData, nav) => async (dispatch) => {
  try {
    dispatch({ type: ADD_POST_LOADING });

        //cloud name:bilel
        //preset:Technoriat
        const form= new FormData();
        form.append("file",postData.file);
        form.append("upload_preset","Technoriat");
       const rep = await axios.post("https://api.cloudinary.com/v1_1/bilel/upload",form)
       postData.image=rep.data.secure_url

    
    const res = await axios.post("/admin/api/post", postData);
    dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
    nav("/Technoriat/Dashbord");
  } catch (error) {
    dispatch({ type: ADD_POST_FAILED, payload: error });
  }
};

export const deletePost = (postData, nav) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_POST_LOADING });
    const res = await axios.delete(`/admin/api/post/${postData._id}`, postData);
    dispatch({ type: DELETE_POST_SUCCESS, payload: res.data });
    // dispatch(getPosts());
    nav("/Technoriat/Dashbord");
  } catch (error) {
    dispatch({ type: DELETE_POST_FAILED, payload: error });
  }
};

export const updatePost = (postData, nav) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_POST_LOADING });

        //cloud name:bilel
        //preset:Technoriat
        const form= new FormData();
        form.append("file",postData.file);
        form.append("upload_preset","Technoriat");
       const rep = await axios.post("https://api.cloudinary.com/v1_1/bilel/upload",form)
       postData.image=rep.data.secure_url

    const res = await axios.put(`/admin/api/post/${postData._id}`, postData);
    dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data });
    // dispatch(getPosts());
    nav("/Technoriat/Dashbord");
  } catch (error) {
    dispatch({ type: UPDATE_POST_FAILED, payload: error });
  }
};
