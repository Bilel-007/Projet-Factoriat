import React from 'react'
import "../styles/HomeOne.css"

const HomeOne = () => {
  return (
    <div className="class">   
    <form className="landing">
    <input type="radio" name="fancy" autofocus defaultValue="clubs" id="clubs" />
    <input type="radio" name="fancy" defaultValue="hearts" id="hearts" />
    <input type="radio" name="fancy" defaultValue="spades" id="spades" />
    <input type="radio" name="fancy" defaultValue="diamonds" id="diamonds" />			
    <label className="One"htmlFor="clubs"><span style={{backgroundColor:'black'}}>TECHNORIAT</span>
    <span className="desc">Projet de soutien aux startups issues des résultats de la recherche scientifique</span> </label>
    <label className="One" htmlFor="hearts"><span style={{backgroundColor:'black'}}>TECHNORIAT</span>
    <span  className="desc">a pour objectif de poser les fondements nécessaires au développement d'un écosystème de l'innovation en Tunisie</span></label>
    <label className="One" htmlFor="spades"><span style={{backgroundColor:'black'}}>FACTORIAT</span><span className="desc">Pilier prototypage industriel du Programme TECHNORIAT</span></label>
    <label className="One" htmlFor="diamonds" ><span style={{backgroundColor:'black'}}>DEVENIR TECHNORIATE</span><a style={{marginTop:'150px',paddingRight:'4%',paddingLeft:'4%'}}href="/Technoriat/Register" className=" btn btn-warning btn-lg  " role="button" ariaDisabled="true">Postulez ici</a></label>
  </form></div>
  
  )
}

export default HomeOne