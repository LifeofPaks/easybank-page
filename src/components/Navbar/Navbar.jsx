import React, { useState } from 'react'
import './Navbar.scss'
import Logo from '../../images/logo.svg'
import Hamburger from '../../images/icon-hamburger.svg'
import Close from '../../images/icon-close.svg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMobileMenu = () =>{
    setShowMenu(!showMenu)
  }


  return (
    <nav className='navbar '>
        <img src={Logo} alt="logo" />
        <ul className={showMenu ? 'show' : '' }>
          <li>Home</li>
          <li>about</li>
          <li>contact</li>
          <li>blog</li>
          <li>carrers</li>
        </ul>
       
        <button className='primaryBtn'>Request Invite</button>
        {
          showMenu ? 
          <img src={Close} alt="menu-icon"  className='menuIcon' onClick={toggleMobileMenu}/>:
          <img src={Hamburger} alt="menu-icon"  className='menuIcon' onClick={toggleMobileMenu}/>

        }

    </nav>
  )
}

export default Navbar