import React from 'react'

const About = () => {
  return (
    <section style={{backgroundColor:'white'}} className="about bg-ligh">
      <div className="container-1">
        <div className="grid-2">
          <div className="center">
          <img src={require("../styles/img/Logo Y.png")} className="logo2" alt="TECHNORIAT" />
          </div>
          <div >
            <h2 style={{fontWeight:900,fontSize:'35px'}}> PROJET TECHNORIAT</h2><br/>
            <p className="about-us">Technoriat est un programme de soutien permettant le développement de startups technologiques issues des résultats de la recherche scientifique et basées sur la propriété intellectuelle. Il vise à :<br/>
  - Ancrer la culture entrepreneuriale chez les chercheurs<br/>
  - Fluidifier et démocratiser le processus de brevetage<br/>
  - Combler le manque de services d’industrialisation (du prototype à l’industrialisation)<br/>
  Technoriat est porté conjointement par le cabinet OurDigitalFuture et l’Association des Technoparks Tunisiens en partenariat avec la RRO – CEA et plusieurs instituts de recherche tunisiens.<br/>
  Technoriat est financé par l’Union Européenne à travers le programme Innov’i – EU4Innovation mis en œuvre par Expertise France.
  </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About