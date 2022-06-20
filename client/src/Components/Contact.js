import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import '../styles/contact.css';
const Contact = () => {
  const [result, setResult] = useState(false);
  const form = useRef();
  
  
  const sendEmail = (e) => {
    e.preventDefault();
    const box = document.getElementById("agree");
    if (box.checked===true) {
    emailjs
      .sendForm(
        "service_36646nc",
        "template_1af5awo",
        form.current,
        "F48uG7v8XURm_qIp_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setResult(true);
    e.target.reset();
    setTimeout(() => setResult(false), 5000);
      }
    else
{
alert("If you agree with the terms, check the Agree check box");
}
  };


  return (
  
  <div className="container-contact100">
  <div className="wrap-contact100">
    <form className="contact100-form validate-form"ref={form} onSubmit={sendEmail}>
      <span className="contact100-form-title">
        Contactez-nous
      </span>
      <div className="wrap-input100 validate-input" data-validate="Please enter your name">
        <input className="input100" type="text" name="name" placeholder="Nom et Prénom" required />
        <span className="focus-input100" />
      </div>
      <div className="wrap-input100 validate-input" data-validate="Please enter your email: e@a.x">
        <input className="input100" type="email" name="email" placeholder="E-mail" required  />
        <span className="focus-input100" />
      </div>
      <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
        <input className="input100" type="Number" name="phone" placeholder="Téléphone" required  />
        <span className="focus-input100" />
      </div>
      <div className="wrap-input100 validate-input" data-validate="Please enter your country">
        <input className="input100" type="text" name="country" placeholder="Ville" required />
        <span className="focus-input100" />
      </div>
      <div className="wrap-input100 validate-input" data-validate="Please enter your message">
        <textarea className="input100" name="message" placeholder="Message" defaultValue={""} required />
        <span className="focus-input100" />
      </div>
      <input type="checkbox" name="agree" id="agree" value="agree" /> <label className="checkbox" for='agree'>En utilisant ce formulaire, vous acceptez le stockage et le traitement de vos données par ce site Web.</label>
      <div className="container-contact100-form-btn">
        <button className="contact100-form-btn">
          <span>
            <i className="fa fa-paper-plane-o m-r-1" aria-hidden="true" />
            &nbsp;&nbsp;Soumettre
          </span>
        </button>
      </div>
      {result ? <h3 style={{color:'white',textAlign:'center'}}>Votre Message a été envoyé avec succès</h3> : null}
    </form>
  </div>
</div>
);

};

export default Contact;
