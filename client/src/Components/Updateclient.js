import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getUserById,
  updateUser as UpdateclientAction,
} from "../actions/userActions";
import { logoutAction } from "../actions/personActions";

const Updateclient = () => {
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const clientInfo = useSelector((state) => state.client.clientInfo);
  useEffect(() => {
    dispatch(getUserById(clientId));
  }, [dispatch]);
  const clientInfoLS = JSON.parse(localStorage.getItem("clientInfo"));
  const nav = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: { ...clientInfoLS },
  });

  const updateClient = (data) => {
    dispatch(UpdateclientAction({ ...data, _id: clientId }, nav));
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
      
      <form style={{backgroundColor:'rgba(0, 0, 0, 0.7)',height:'400px',width:'600px',marginLeft:'10%',paddingTop:'30px',paddingLeft:'40px'}}onSubmit={handleSubmit(updateClient)}>
      <h1 style={{marginBottom:'20px',color:'white',backgroundColor:'rgba(0, 0, 0, 0.4)',marginRight:'20px'}}>UPDATE PROJECT STATUS</h1>
      
        <label style={{backgroundColor:'rgba(0, 0, 0, 0.4)',marginBottom:'20px',color:'#ffc80a',fontWeight:'400',fontSize:'20px'}}>Full Name : {<span style={{color:'white'}}>{clientInfoLS.name}</span>}</label>
        <br />
        <label style={{backgroundColor:'rgba(0, 0, 0, 0.4)',marginBottom:'20px',color:'#ffc80a',fontWeight:'400',fontSize:'20px'}}>Email : {<span style={{color:'white'}}>{clientInfoLS.email}</span>} </label>

        <br />
        <label style={{backgroundColor:'rgba(0, 0, 0, 0.4)',marginBottom:'20px',color:'#ffc80a',fontWeight:'400',fontSize:'20px'}}>Title : {<span style={{color:'white'}}>{clientInfoLS.titre}</span>} </label>
       
        {/* <br />
        <label style={{backgroundColor:'rgba(0, 0, 0, 0.4)',marginBottom:'20px',color:'#ffc80a',fontWeight:'400',fontSize:'20px'}}>File : {<span style={{color:'white'}}><a href={clientInfoLS.fichier}>Download file</a></span>} </label> */}
       
        <br />
        <label style={{backgroundColor:'rgba(0, 0, 0, 0.4)',marginBottom:'20px',color:'#ffc80a',fontWeight:'400',fontSize:'20px'}}>Phone : {<span style={{color:'white'}}>{clientInfoLS.phone}</span>} </label>
       
        <br />
        <label style={{backgroundColor:'rgba(0, 0, 0, 0.4)',marginBottom:'20px',color:'#ffc80a',fontWeight:'400',fontSize:'20px'}}>Project Status</label>
        <select style={{marginLeft:'20px'}} required type="text" {...register("project")}>
          <option value='Submitted'>Submitted</option>
          <option value='Processed'>Processed</option>
          <option value='Accepted'>Accepted</option>
          <option value='Rejected'>Rejected</option>
        </select>
        <button className="btn btn-light "style={{paddingLeft:'20px',paddingRight:'20px',fontWeight:'bold',marginLeft:'55%',marginRight:'50px' }}>UPDATE</button>
        <Link to="/Technoriat/UsersList">
        <button className="btn btn-danger "style={{fontWeight:'bold'}}>CANCEL</button>
      </Link>
      </form>
      </div>

      
    </div>
  );
};

export default Updateclient;
