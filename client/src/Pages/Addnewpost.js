import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPost as addPostAction } from "../actions/postsActions";
import { logoutAction } from "../actions/personActions";
import "../styles/Addnewpost.css";

const Addnewpost = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState();
  const addnewpost = (data) => {
    dispatch(addPostAction({ ...data, file }, nav));
  };
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    
    <div style={{paddingTop:'50px'}}>
      {/*Dashboard style*/}
      <div className="nav-side-menu">
        <div className="brand">
          <img
            className="logo-Technoriat"
            src={require("../styles/img/Logo Technoriat.png")}
            alt="Technoriat"
          />
        </div>
        <i
          className="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        />
        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            <li>
              <a href="/Technoriat/AdminProfil">
                <i className="fa-solid fa-gauge fa-lg"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="/Technoriat/Dashbord">
                <i className="fas fa-user-tie fa-lg" />
                Posts
              </a>
            </li>
            <li>
              <a href="/Technoriat/UsersList">
                <i className="fa fa-users fa-lg" /> &nbsp;Users
              </a>
            </li>
            <li>
              <a>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
                &nbsp;<button onClick={logout}>&nbsp;Logout</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: "100px" }} className="dashboard bag">
        <div>
          <form
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              height: "500px",
              width: "600px",
              marginLeft: "10%",
              paddingTop: "30px",
              paddingLeft: "20px",
            }}
            onSubmit={handleSubmit(addnewpost)}
          >
            <h1
              style={{
                marginBottom: "20px",
                color: "#ffc80a",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                marginRight: "20px",
              }}
            >
              ADD NEW POST
            </h1>
            <label className="addp">Titre</label>
            <input
              className="put"
              required
              type="text"
              {...register("title")}
            ></input>{" "}
            <br />
            <label className="addp">Date</label>
            <input
              className="put"
              required
              type="date"
              {...register("date")}
            ></input>{" "}
            <br />
            <label className="addp" style={{ paddingRight: "15px" }}>
              ShortText
            </label>
            <input
              className="put"
              required
              type="text"
              {...register("shorttext")}
            ></input>
            <br />
            <label className="addp" style={{ paddingRight: "41px" }}>
              Image
            </label>
            {/* <input className="put"required type="text" {...register("image")}></input> */}
            <input style={{color:'red' }}
              className="put"
              required
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
            <br />
            <label className="addp" style={{ paddingRight: "24px" }}>
              Text
            </label>
            <textarea
              className="put"
              style={{ width: "450px" }}
              required
              type="text"
              {...register("content")}
            ></textarea>
            <br />
            <button
              className="btn btn-light "
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                fontWeight: "bold",
                marginLeft: "55%",
                marginRight: "50px",
              }}
            >
              ADD
            </button>
            <Link to="/Technoriat/Dashbord">
              <button
                className="btn btn-danger "
                style={{ fontWeight: "bold" }}
              >
                CANCEL
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addnewpost;
