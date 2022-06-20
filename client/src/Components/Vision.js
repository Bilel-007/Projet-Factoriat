import React from 'react'
import "../styles/vision.css"

const Vision = () => {
  return (
    <div><header className="showcase">
    <div className="content-1">
      <img src={require("../styles/img/Logo Y.png")} className="logo" alt="TECHNORIAT" />
      <div className="title">
        WELCOME TO TECHNORIAT
      </div>
      <div className="text">
      Technoriat a pour objectif de poser les fondements nécessaires à la création d'un écosystème de l'innovation
pérenne et autonome permettant le développement de startups issues des résultats de recherche
scientifique et basées sur la propriété intellectuelle en Tunisie.
      </div>
    </div>
  </header>
  
  {/* About */}
  <section className="about bg-ligh">
    <div className="container-1">
      <div className="grid-2">
        <div className="center">
        <img src={require("../styles/img/logo G.png")} className="logo2" alt="TECHNORIAT" />
        </div>
        <div >
          <h2 style={{fontWeight:900,fontSize:'35px'}}> PROJET TECHNORIAT</h2><br/>
          <p style={{lineHeight:1.5}}className="about-us">La Tunisie jouit d'un environnement de recherche dynamique et productif. Nous observons l'émergence d'un écosystème de startups prometteur. Cependant, non seulement très peu proviennent de la valorisation de la recherche, mais un grand nombre d'innovations scientifiques et technologiques n'arrivent pas à sortir des laboratoires et à être commercialisées.<br/>
Le projet TECHNORIAT a pour objectif de créer des startups technologiques issues des résultats scientifiques des centaines de laboratoires de recherche tunisiens.
<br/>Le projet Technoriat, dans sa première version , consiste à :<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- Sélectionner 24 entrepreneurs chercheurs, appelés TECHNORIATES<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- Accompagner 12 TECHNORIATES pour une première période d’incubation de 8 mois<br/>
&nbsp;&nbsp;&nbsp;- Sélectionner 6 TECHNORIATES pour les accompagner pendant 12 mois supplémentaires à l’internationalisation (période d’accélération) .
</p>
        </div>
      </div>
    </div>
  </section>
  {/* Services */}
  <section className="services">
  <h2 style={{padding:"20px",textAlign:"center",fontWeight:900,fontSize:'35px'}}>8 bonnes raisons de devenir TECHNORIATE</h2>
    <div className="container-1 grid-3 center">
      <div>
        <i className=" fa-solid fa-building-user fa-3x" />
        <h3>Entreprendre</h3>
        <p className="home">Créer une entreprise internationale</p>
      </div>
      <div>
        <i className="fa-solid fa-hand-holding-dollar"></i>
        <h3>Donner Vie</h3>
        <p className="home"> à son projet de recherche à travers de l’expertise et un budget conséquent</p>
      </div>
      <div>
        <i className="fa-solid fa-file-shield" />
        <h3>Enregistrer</h3>
        <p className="home"> son propre brevet à l’international</p>
      </div>
      <div>
        <i className="fa-solid fa-screwdriver-wrench" />
        <h3>Construire</h3>
        <p className="home">une usine à partir de son prototype</p>
      </div>
          <div>
        <i className="fa-solid fa-people-arrows-left-right" />
        <h3>Créer </h3>
        <p className="home">de la richesse pour soi et pour les autres</p>
      </div>
      <div>
        <i className="fa-solid fa-earth-africa" />
        <h3>Impacter </h3>
        <p className="home">positivement le pays</p>
      </div>
      <div>
        <i className="fa-solid fa-award" />
        <h3>Devenir Technoriate</h3>
        <p className="home"> À travers une expérience extraordinaire</p>
      </div>
      <div>
        <i className="fa-solid fa-arrows-to-dot"></i>
        <h3>Financer</h3>
        <p className="home"> Son rêve et acquérir de nouvelles compétences</p>
      </div>
    </div>
    <div style={{display:'flex',padding:'20px 25px',backgroundColor:'rgba(0, 0, 0, 0.7)'}}>
    <div style={{marginTop:'20px',marginLeft:'5%'}}>
    <i style={{fontSize:'30px',fontWeight:'900'}}className="fa-solid fa-1 fa-xl"></i>
    <h3 style={{marginLeft:'25px',color:'white',fontWeight:'900'}}>Vous êtes chercheur Intéressée par l'entrepreneuriat ?</h3>
    <a style={{marginTop:'20px',marginLeft:'40%',fontWeight:'900'}}href="/Technoriat/Register" className=" btn btn-warning btn-sm  " role="button" ariaDisabled="true">POSTULEZ-ICI</a>
    </div>
    <div style={{marginTop:'20px',marginLeft:'15%'}}>
    <i style={{fontSize:'30px',fontWeight:'900'}}className="fa-solid fa-2 fa-xl"></i>
    <h3 style={{marginLeft:'25px',color:'white',fontWeight:'900'}}>Vous êtes industriel ou centre de recherche ?</h3>
    <a style={{marginTop:'20px',marginLeft:'40%',fontWeight:'900'}}href="/Technoriat/contact" className=" btn btn-warning btn-sm  " role="button" ariaDisabled="true">REJOIGNER-NOUS</a>
    </div>
    </div>
  </section></div>
  )
}

export default Vision