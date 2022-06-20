import React from 'react'
import '../styles/EngagmentTest.css'

const EngagementTest = () => {
  return (
    <div >
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <header>
          <div className="poster">
            <h1 className="poster__heading">TECHNORIAT 
              <span className="poster__subheading">NOTRE ENGAGEMENT</span>
            </h1>
            </div>
        </header>
    <div className="timeline">
      <ul>
      <h5 style={{color:'white',fontSize:'1.5em',fontWeight:400}}>Nos partenaires s'engagent à </h5>
        <li>
          <div className="content">
            <h3>Période de sélection</h3>
            <p>- Travailler avec le comité scientifique Technoriat qui sélectionnera les meilleurs couples porteur
de projet + innovation (TRL4)<br/>
- Réaliser une sélection rigoureuse des meilleurs potentiels Technoriates à travers les
laboratoires de toutes les régions tunisiennes<br/>
- Donner la priorité pour les secteurs suivants: énergies renouvelables, environnement,
économie circulaire, sciences de matériaux, biotechnologies, santé et agro-alimentaire<br/>
- Aspirer à atteindre la parité homme-femme dans la sélection</p>
          </div>
          <div className="time">
            <h4>Janvier-Mars 2022</h4>
          </div>
        </li>
        <li>
          <div className="content">
            <h3>Période d’incubation</h3>
            <p>- Donner une formation de qualité internationale lors du Bootcamp<br/>
- Réaliser 8 sessions de 4 jours de formation et d’accompagnement par des experts nationaux
et internationaux en 2022</p>
          </div>
          <div className="time">
            <h4>Avril-Décembre 2022</h4>
          </div>
        </li>
        <li>
          <div className="content">
            <h3>Période d’accélération</h3>
            <p><i className="fa-regular fa-star " style={{fontsize:'10px',paddingRight:'10px'}}></i>Accompagnement et financement du brevetage international<br/>
            <i className="fa-regular fa-star " style={{fontsize:'10px',paddingRight:'10px'}}></i>Accompagnement et financement de la production d’un prototype industriel à partir d’un
prototype de laboratoire<br/>
<i className="fa-regular fa-star " style={{fontsize:'10px',paddingRight:'10px'}}></i>Accompagnement à la commercialisation nationale et internationale<br/>
<i className="fa-regular fa-star " style={{fontsize:'10px',paddingRight:'10px'}}></i>Budget réservé au financement d’études spécifiques pour chaque projet<br/>
<i className="fa-regular fa-star " style={{fontsize:'10px',paddingRight:'10px'}}></i>Dotation financière<br/>
<i className="fa-regular fa-star " style={{fontsize:'10px',paddingRight:'10px'}}></i>4 voyages de formation internationale, de recherche de partenariat<br/>
<i className="fa-regular fa-star " style={{fontsize:'10px',paddingRight:'10px'}}></i>1 voyage de participation à une foire internationale professionnelle spécifique</p><br/>
          </div>
          <div className="time">
            <h4>Janvier-Décembre 2022</h4>
          </div>
        </li>
        <div style={{clear: 'both'}} />
      </ul>
    </div></div>
  )
}

export default EngagementTest
