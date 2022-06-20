import React from 'react'
import "../styles/Application.css"

const Application = () => {
  return (

<div className="box">
    <h2 style={{padding:"20px",textAlign:"center",fontWeight:900,fontSize:'35px'}}>Secteurs cibles ayant des compétences et un potentiel non adressé</h2>
    <div className="square bg img1">
    <div className="content-2">
    <div className="table-1">
        <div className="table-cell">
        Biotechnologies<br/>
        Santé<br/>
        Agro -alimentaire<br/>
        </div>
    </div>
    </div>
  </div>
  <div className="square bg img2">
    <div className="content-2">
      <div className="table-1">
        <div className="table-cell">
        Energie renouvelables<br/>
Environnement<br/>
Économie circulaires<br/>
        </div>
      </div>
    </div>
  </div>
  <div className="square bg img3">
    <div className="content-2">
      <div className="table-1">
        <div className="table-cell">
        Science des Matériaux<br/>
        Textile technique<br/>
        Packaging
        </div>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Application