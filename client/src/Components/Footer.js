import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div><footer class="footer-distributed">

    <div class="footer-right">

        <a href="https://www.facebook.com/Technoriat"><i class="fa fa-facebook"></i></a>
        <a href="https://www.instagram.com/technoriat/"><i class="fa fa-instagram"></i></a>
        <a href="https://www.linkedin.com/company/technoriat/"><i class="fa fa-linkedin"></i></a>
        

    </div>

    <div class="footer-left">

    <p>Ce site a été créé et est maintenu avec le soutien financier de l’Union Européenne.</p>
    <p>Made with love ❤</p>

        <h5 style={{color:'grey',fontFamily:'Exo 2', fontSize:'15px'}}>Technoriat &copy; 2022 All rights reserved </h5>
    </div>

</footer></div>
  )
}

export default Footer