import React from 'react'
import "../styles/Factoriat.css"
import backgroundImage1 from '../styles/img/BG-FC.PNG'
import backgroundImage2 from '../styles/img/BG-FC-2.PNG'

const Factoriat = () => {
  return (
    <div className="bg-div"><header className="showcase-1">
    <div className="content-3">
      <img src={require("../styles/img/Logo Y.png")} className="logo" alt="FACTORIAT" />
      <div className="title">
       FACTORIAT <br/>
       ​FROM LAB TO FAB: INDUSTRIALISING INNOVATION
      </div>
    </div>
  </header>
  <section className="bg-section">
    <div className="grid-flex">
      <div className="col col-image" style={{backgroundImage: `url(${backgroundImage1})`}} >
      </div>
      <div className="col col-text" style={{backgroundColor:'#ffc80a'}}>
        <div className="Aligner-item"  >
        <h2 style={{fontSize:'40px',textAlign:'center',}}> A PROPOS DE NOUS</h2><br/>
          <p style={{color:"black"}}>FACTORIAT aide les innovateurs à accélérer le temps « du prototype à la machine » et à assurer la qualité et la conformité aux normes industrielles.<br/>
FACTORIAT prend en charge la conception électro-mécanique, la programmation, supervise la fabrication, réalise l'assemblage et les tests de validation.<br/> 
Avec un prototype industrialisé par FACTORIAT, vous pouvez démontrer votre technologie dans les conditions réelles de l'industrie.<br/>
Pilier prototypage industriel du Programme TECHNORIAT, FACTORIAT est financé aux deux tiers par l’Union européenne dans le cadre du projet Innov’i –EU4Innovation mis en œuvre par Expertise France ainsi que par le programme DEAL de Smart Capital.<br/> 
<a style={{marginTop:'20px',marginLeft:'40%'}}href="/Technoriat/contact" className=" btn btn-dark btn-sm  " role="button" ariaDisabled="true">Contactez-nous</a>
           
          </p>
        </div>
      </div>
    </div>
    <div className="grid-flex">
      <div className="col col-image" style={{backgroundImage: `url(${backgroundImage2})`}}>
        &nbsp;
      </div>
      <div className="col col-text col-left" style={{backgroundColor:'black',color:'white',fontWeight:'lighter'}}>
        <div className="Aligner-item" >
        <h2 style={{fontSize:'40px',textAlign:'center',color:'#ffc80a'}}> Vous avez un projet de prototypage?</h2><br/>
          <p style={{color:"white"}}>Vous avez un projet technologique en TRL 4 ou plus nécessitant un prototype?<br/>
Vous êtes un industriel cherchant à intégrer une technologie innovante?<br/>
Participez à l'appel à projet de FACTORIAT pour tenter d'obtenir la subvention complète de la conception et de la programmation de votre prototype (design for manufacturing) ainsi qu'une subvention jusqu'à 5 000DT en matériel hardware.<br/> 
Remplissez le formulaire de participation avant le 28/2 à minuit.<br/>

<a style={{marginTop:'20px',marginLeft:'40%'}}href="/Technoriat/Register" className=" btn btn-warning btn-sm  " role="button" ariaDisabled="true">Postulez ici</a>
            
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Factoriat