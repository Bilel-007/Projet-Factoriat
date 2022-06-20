import { useState } from "react";
import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { isAuth } = useSelector((state) => state.user);

  return (
    <div>
      <nav className="navigation">
        <a href="http://localhost:3000/Technoriat/acceuil">
          <img
            href="http://localhost:3000/Technoriat/acceuil"
            className="logo-Technoriat"
            src={require("../styles/img/Logo Technoriat.png")}
            alt="Technoriat"
          />
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link className="nav" to="/Technoriat/acceuil">
                ACCEUIL
              </Link>
            </li>
            <li>
              <Link className="nav" to="/Technoriat/Technoriat">
                TECHNORIAT
              </Link>
            </li>
            <li>
              <Link className="nav" to="/Technoriat/Factoriat">
                FACTORIAT
              </Link>
            </li>
            <li>
              <Link className="nav" to="/Technoriat/equipe">
                EQUIPE
              </Link>
            </li>
            <li>
              <Link className="nav" to="/Technoriat/Journal">
                ACTUALITE
              </Link>
            </li>
            <li>
              <Link className="nav" to="/Technoriat/contact">
                CONTACT
              </Link>
            </li>
            <li>
              { (isAuth === false) ? (<a href="/Technoriat/Register" className=" btn  btn-sm hbutton  " role="button" ariaDisabled="true"><i className="fa fa-right-to-bracket fa-lg"> </i>CONNEXION
                
                </a>) : (<a href="/Technoriat/Register" className=" btn  btn-sm hbutton  " role="button" ariaDisabled="true"><i > </i>PROFIL
                
                </a>)}
                {/* <span className='text'>Se connecter</span > */}
              
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
