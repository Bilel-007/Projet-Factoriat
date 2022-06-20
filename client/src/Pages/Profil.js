import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";
import "../styles/Profil.css"

const Profil = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  const { isAuth, userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuth) nav("/Technoriat/Login");
  }, [isAuth, nav]);
  return (
  
    <div className="container  " style={{paddingBottom:'8rem'}}>
        <div className="welcome shadow p-4  rounded description"style={{backgroundColor:'rgba(0, 0, 0, 0.7)',width:'800px',marginLeft:'150px',marginBottom:'100px',marginTop:'100px'}}>
          <img src={require("../styles/img/avatar3.png")}/> 
          <p style={{color:"#6699CC",fontSize:'20px',fontWeight:'bold',marginTop:'10px',textAlign:'center'}}> 
          <h1 style={{fontSize:'30px',fontWeight:'bold'}}>Welcome {userInfo.name}</h1>
      {userInfo.project === "Submitted" ? (
        <p  >Votre projet a été bien soumis. Nous allons l'étudier rapidement afin de vous donner une réponse dans les plus brefs délais.</p>
      ) : userInfo.project === "Processed" ? (
        <p >Votre projet est en cours de révision. Nous allons l'étudier rapidement afin de vous donner une réponse dans les plus brefs délais.</p>
      ) : userInfo.project === "Accepted" ? (
        <p >
          Félicitations. Votre projet a été accepté, notre équipe vous contactera 
          prochainement pour la suite.
        </p>
      ) : (
        <p >Malheureusement,votre projet a été refusé. Nous vous remercions pour votre compréhension</p>
      )}</p>
      
      <button className="btn btn-warning "style={{fontWeight:'bold',marginLeft:'100px'}}onClick={logout}>LOGOUT</button>
      </div>
      <span style={{marginLeft:'150px'}}> Si vous rencontrez le moindre problème durant la soumission 
      n'hésitez pas à nous contacter </span>
      <a  href="/Technoriat/contact" className=" btn btn-dark btn-sm  "role="button" ariaDisabled="true"  style={{marginTop:'20px',marginBottom:'20px'}} >Contactez-nous</a>
      </div>
      );
};

export default Profil;
