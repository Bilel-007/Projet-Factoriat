import React from 'react'
import "../styles/PartnersFactoriat.css"

const PartenersFactoriat = () => {
  return (
    <div> 
        <h2 style={{textAlign:'center',paddingTop:20,paddingBottom:20,color:'#ffc80a'}}>PORTEURS DU PROGRAMME</h2>
    <div id="logo-grid">
    <div className="partner-logo"><a href="http://ourdigitalfuture.org/" target="_blank"><img src={require("../styles/img/Logo-odf.png")} /></a></div>
    <div className="partner-logo col-2"><a href="http://www.mfcpole.com.tn/Fr/association-tunisia-technoparks_11_127" target="_blank"><img style={{height:'130px',width:'200px',paddingRight:'20px'}} src={require("../styles/img/logo_ATT.png")} /></a></div>
    <div className="partner-logo"><a href="http://localhost:3000/Technoriat/acceuil" target="_blank"><img src={require("../styles/img/logo-technoriat.png")} /></a></div>
      </div>
    <h2 style={{textAlign:'center',paddingTop:20,paddingBottom:20,color:'#ffc80a'}}>NOS PARTENAIRES</h2>
<div id="logo-grid">
<div className="partner-logo"><a href="https://www.cea.fr/" target="_blank"><img style={{paddingBottom:20,paddingTop:20,paddingRight:40}} src={require("../styles/img/RRO CEA .png")} /></a></div>
<div className="partner-logo col-2"><a href="http://www.mes.tn/" target="_blank"><img src={require("../styles/img/mesrs.png")} /></a></div>
<div className="partner-logo"><a href="http://www.tunisieindustrie.gov.tn/" target="_blank"><img src={require("../styles/img/mipme.png")} /></a></div>
  </div>
  <h2 style={{textAlign:'center',paddingTop:20,paddingBottom:20,color:'#ffc80a'}}>SOUTENU PAR</h2>
<div style={{paddingTop:30,paddingBottom:10}} id="logo-grid">
<div className="partner-logo"><a href="https://innovi.tn/" target="_blank"><img src={require("../styles/img/Logo Black.png")} /></a></div>
<div className="partner-logo col-2"><a  target="_blank"><img style={{height:'130px',width:'170px'}}src={require("../styles/img/eu.png")} /></a></div>
<div className="partner-logo"><a href="https://www.expertisefrance.fr/" target="_blank"><img src={require("../styles/img/Logo Expertise France - Fond transparent.png")} /></a></div>
<div className="partner-logo"><img style={{maxWidth:'800px'}} src={require("../styles/img/Flywheel-Bandeau Sponsors_Plan de travail 1.png")} /></div>
  </div>
  </div>
  )
}

export default PartenersFactoriat