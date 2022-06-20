import React from 'react'
import '../styles/Team.css'

const Team = () => {
  return (
    <div className="Team-background"> 
    <div className="wrapper">
    <h1>NOTRE EQUIPE</h1>
   
    <div className="our_team">
      <div className="team_member">
        <div className="member_img">
          <img src={require("../styles/img/member_1.png")} alt="our_team" />
          <div className="social_media">
            <a href="https://www.linkedin.com/in/noomanefehri/" className="linkdin item"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:noomane@ourdigitalfuture.org" className="Email item"><i className="fa-solid fa-envelope"></i></a></div>
        </div>
        <h3>Noomane Fehri</h3>
        <span>Directeur Projet</span>
        <br/><br/><br/>
        <p>noomane@ourdigitalfuture.org</p>
      </div>
      <div className="team_member">
        <div className="member_img">
        <img src={require("../styles/img/member_2.png")} alt="our_team" />
          <div className="social_media">
            <a href="https://www.linkedin.com/in/asophie/" className="linkdin item"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:sophie@vitaminn.tn" className="Email item"><i className="fa-solid fa-envelope"></i></a> 
          </div>
        </div>
        <h3>Sophie <br/>Gombart-Masmoudi</h3>
        <span>Responsable unité de prototypage industriel</span>
        <br/>
        <p>sophie@vitaminn.tn</p>
      </div>
      <div className="team_member">
        <div className="member_img">
        <img src={require("../styles/img/member_3.png")} alt="our_team" />
          <div className="social_media">
            <a href="https://www.linkedin.com/in/ramzi-zammali-98a19928/" className="linkdin item"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:ramzi.zammali@mfcpole.com.tn" className="Email item"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <h3>RAMZI ZAMMALI</h3>
        <span>Responsable Sourcing</span>
        <br/><br/><br/>
        <p>ramzi.zammali@mfcpole.com.tn</p>
      </div>
      <div className="team_member">
        <div className="member_img">
        <img src={require("../styles/img/member_4.png")} alt="our_team" />
          <div className="social_media">
            <a href="https://www.linkedin.com/in/nebil-chemek-3bb598b/" className="linkdin item"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:pmo@ourdigitalfuture.org" className="Email item"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <h3>Nebil CHEMEK</h3>
        <span>PMO</span>
        <br/><br/><br/>
        <p>pmo@ourdigitalfuture.org</p>
      </div>  
      <div className="team_member">
        <div className="member_img">
        <img src={require("../styles/img/member_5.png")} alt="our_team" />
          <div className="social_media">
            <a href="https://www.linkedin.com/in/hamza-guizani-253ba855/" className="linkdin item"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:hamza@ourdigitalfuture.org" className="Email item"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <h3>HAMZA GUIZANI</h3>
        <span>Responsable Incubation</span>
        <br/><br/><br/>
        <p>hamza@ourdigitalfuture.org</p>
      </div> 
    </div>
  </div>
  </div>
);
}


export default Team