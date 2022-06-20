import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";
import "../styles/AdminProfil.css"
const AdminProfil = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  // identifcation d'admin (exclusivement admin task) //
  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuth) nav("/Technoriat/Login");
  }, [isAuth, nav]);

  return (
    <div style={{paddingTop:'50px'}}>
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
    <div className="dashboard">
     
    <div className="container py-0">
    
        <div className="row">
          <div className="col-lg-12 p-4">
            <h1> <i className="fa fa-gauge fa-lg"></i> DASHBOARD</h1>
            <hr />
          </div>
        </div>
        <div className="welcome shadow p-3 mb-5 bg-white rounded"><img src={require("../styles/img/Admin.png")} style={{height:'220px',paddingBottom:'40px'}}/> <p style={{color:"black",fontSize:'20px',fontWeight:'bold',marginTop:'40px',textAlign:'center'}}> Welcome Back Admin,your dashboard is ready!<br/> Great job, your affiliate job is ready to go!You can access to users, update project status, add, update and delete posts using this dashboard</p>
       </div>
        <div className="row dash">
        <div className="col-xs col-sm col-md col-lg p-2">
            <a className="text-decoration-none" href="/Technoriat/UsersList">
              <div className="card p-3 shadow bg-purple text-center border-0">
                <div className="card-body">
                  <i class="fa fa-bars-progress fa-2x"></i>
                  <hr />
                  <p className="card-title lead">USERS AND PROJECTS STATUS</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs col-sm col-md col-lg p-2">
            <a className="text-decoration-none" href="/Technoriat/Dashbord">
              <div className="card p-3 shadow bg-purple text-center border-0">
                <div className="card-body">
                  <i className="fa fa-edit fa-2x" aria-hidden="true" />
                  <hr />
                  <p className="card-title lead">POSTS</p>
                </div>
              </div>
            </a>
          </div>
          
        </div></div>
          </div>
    </div>
    
  );
};

export default AdminProfil;
