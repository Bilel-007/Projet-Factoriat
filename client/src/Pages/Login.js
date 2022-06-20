// import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login as loginAction } from "../actions/personActions";
import "../styles/Login.css"

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const { errors } = useSelector((state) => state.user);
  // useEffect(() => {
  //   if (isAuth) nav("/Technoriat/Profil");
  // }, [isAuth, nav]);
  const loginPerson = (data) => {
    dispatch(loginAction(data, nav));
  };
  return (
    <div className="vid-container">
      <div className="inner-container">
    <body className="login">
      <form className="box-1" onSubmit={handleSubmit(loginPerson)}>
        <h1 style={{backgroundColor:'#ffc80a',color:'rgba(0, 0, 0, 0.7)',fontWeight:'bold'}}>CONNEXION</h1>
        <input className="Log" required placeholder="Email"type="email" {...register("email")}></input>
        <br />
        
        <input className="Log" required type="password" placeholder="Mot de passe" {...register("password")}></input>
        <br />
        {errors && <p>{errors}</p>}
        <button className="btn btn-warning btn-sm " style={{width:'300px',marginLeft:'50px',fontSize:'16px',fontWeight:'bold'}}>Se Connecter</button> <br />
        <Link to="/Technoriat/Register">
          <p>Je ne suis pas encore enregistré(e)?</p>
          <p  style={{backgroundColor:'rgba(0, 0, 0, 0.7)',paddingBottom:'20px',fontSize:'16px',fontWeight:'600'}}>S'inscrire & Postuler</p>
        </Link>
      </form>
    </body>
    </div>
    </div>
  );
};

export default Login;
