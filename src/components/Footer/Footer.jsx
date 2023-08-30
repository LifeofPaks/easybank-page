import React from 'react'
import './Footer.scss'
import Logo from '../../images/logo.svg'
import Facebook from '../../images/icon-facebook.svg'
import Youtube from '../../images/icon-youtube.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'

const Footer = () => {
  return (
    <section className='footer'>
      <div className="left">
      <div className="col">
        <img src={Logo} alt="logo" className='logo'/>
        <div className="socials">
          <img src={Facebook} alt="social-icons" />
          <img src={Youtube} alt="social-icons" />
          <img src={Twitter} alt="social-icons" />
          <img src={Pinterest} alt="social-icons" />
          <img src={Instagram} alt="social-icons" />
        </div>
      </div>

      <ul className="col">
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>

      <ul className="col">
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>
      </div>
   
      <div className="right">
        <button className="primaryBtn">Request Invite</button>
        <p>  © Easybank. All Rights Reserved</p>
      </div>
    </section>
  )
}

export default Footer