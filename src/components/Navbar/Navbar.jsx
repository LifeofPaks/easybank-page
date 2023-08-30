import React from 'react'
import './Navbar.scss'
import Logo from '../../images/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar '>
        <img src={Logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>contact</li>
          <li>blog</li>
          <li>carrers</li>
        </ul>

        <button className='primaryBtn'>Request Invite</button>
    </nav>
  )
}

export default Navbar