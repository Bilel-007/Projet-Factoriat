// import axios from "axios";
import React, { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  updatePost as UpdatepostAction,
  getPostById,
} from "../actions/postsActions";
import { logoutAction } from "../actions/personActions";

const Updatepost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postInfo = useSelector((state) => state.post.postInfo);
  useEffect(() => {
    dispatch(getPostById(postId));
  }, [dispatch]);
  const postInfoLS = JSON.parse(localStorage.getItem("postInfo"));
  const nav = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { ...postInfoLS },
  });
  const [file, setFile] = useState();
  const updatePost = (data) => {
    dispatch(UpdatepostAction({ ...data, _id: postId,file }, nav));
  };
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <div>
       {/*NAvbarSide Dashboard component*/}
    <div className="nav-side-menu">
    <div className="brand"><img
            className="logo-Technoriat"
            src={require("../styles/img/Logo Technoriat.png")}
            alt="Technoriat"
          /></div>
    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" />
    <div className="menu-list">
      <ul id="menu-content" className="menu-content collapse out">
        <li>
          <a href="/Technoriat/AdminProfil">
          <i className="fa-solid fa-gauge fa-lg"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="/Technoriat/Dashbord">
            <i className="fas fa-user-tie fa-lg" />Posts
          </a>
        </li>
        <li>
          <a href="/Technoriat/UsersList">
            <i className="fa fa-users fa-lg" /> &nbsp;Users
          </a>
        </li>
        <li>
      <a><i className="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;<button
        onClick={logout}>
          &nbsp;Logout
      </button>
      </a>
      
        </li>
      </ul>
    </div>
    </div>
    <div style={{marginTop:'100px'}} className="dashboard bag">
      <div>
      <form style={{backgroundColor:'rgba(0, 0, 0, 0.7)',height:'500px',width:'600px',marginLeft:'10%',paddingTop:'30px',paddingLeft:'20px'}} onSubmit={handleSubmit(updatePost)}>
      <h1 style={{marginBottom:'20px',color:'#ffc80a',backgroundColor:'rgba(0, 0, 0, 0.4)',marginRight:'20px'}}>UPDATE POST</h1>
        <label className="addp">Titre</label>
        <input className="put" required type="text" {...register("title")}></input> <br />
        <label className="addp">Date</label>
        <input className="put"required type="date" {...register("date")}></input> <br />
        <label className="addp" style={{paddingRight:'15px'}}>Shorttext</label>
        <input className="put"required type="text" {...register("shorttext")}></input>
        <br />
        <label className="addp"style={{paddingRight:'41px'}}>Image</label>
        {/* <input className="put"required type="text" {...register("image")}></input> */}
        <input style={{color:'red' }}
              className="put"
              required
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
        <br />
        <label className="addp" style={{paddingRight:'24px'}}>Contenu</label>
        <textarea className="put"style={{width:'450px'}}required type="text" {...register("content")}></textarea>
        <br />
        
        <button className="btn btn-light "style={{paddingLeft:'20px',paddingRight:'20px',fontWeight:'bold',marginLeft:'55%',marginRight:'50px' }}>UPDATE</button>
        <Link to="/Technoriat/Dashbord">
        <button className="btn btn-danger "style={{fontWeight:'bold'}}>CANCEL</button>
      </Link>
        
      </form>
      </div>
      
      
      </div>
    </div>
    
    
  );
};

export default Updatepost;
