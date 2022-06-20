import React from 'react'
import "../styles/EngCandidate.css"

const EngCandidate = () => {
  return (
    <div style={{paddingTop:'40px',paddingBottom:'40px',backgroundColor:'#f4f4f4'}}>
        <h2 style={{padding:"20px",textAlign:"center",fontWeight:900,fontSize:'35px'}}>VOTRE ENGAGEMENT</h2>
        <div className="container mt-5">
    <div className="row g-2">
      <div className="col-md-4" >
        <div className="card p-3"style={{backgroundColor:"#ffc80a"}}>
          <div className="mt-3">
            <h3 className="mt-3 text-truncate">CONTRAT</h3> <span className="text justify-content mt-3 colortext">Signer un contrat d’accompagnement</span><br/><br/>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3 "style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
          <div className="mt-3">
            <h3 className="mt-3 text-truncate colortitle ">ENGAGEMENT</h3> <span className="text justify-content mt-3 ">Suivre la totalité du programme avec assiduité jusqu’à la fin (4jours/mois)</span>
                      </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3"style={{backgroundColor:"#ffc80a"}}>
          <div className="mt-3"> 
            <h3 className="mt-3 text-truncate">AUGMENTER VOTRE VISIBILITE</h3> <span className="text justify-content mt-3 colortext">Créer son entreprise avant le début de la période d’accélération</span>
                     </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3"style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
          <div className="mt-3" >
            <h3 className="mt-3 text-truncate colortitle">DEVELOPPEMENT </h3> <span className="text justify-content mt-3">Se consacrer exclusivement à la gestion et au développement de son entreprise dont le condidat est majoritaire et gestionnaire.(Les enseignants-chercheurs peuvent continuer leur activité).</span>
                      </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3"style={{backgroundColor:"#ffc80a"}}>
          <div className="mt-3"  > 
            <h3 className="mt-3 text-truncate">CONFIDENTIALITE</h3> <span className="text justify-content mt-3 colortext">Signer et respecter un accord de gestion de la propriété intellectuelle avec les entités concernées</span><br/><br/><br/>
                      </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3"style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
          <div className="mt-3"> 
            <h3 className="mt-3 text-truncate colortitle">ACCORD PARTAGE</h3> <span className="text justify-content mt-3 ">Partager sous accord de confidentialité toutes les informations du projet nécessaires pour le brevetage et/ou le prototypage</span><br/><br/><br/>
                      </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default EngCandidate