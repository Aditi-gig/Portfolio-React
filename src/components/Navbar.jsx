import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg'



const Navbar = () => {
  const [menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo-img' />
        <ul className="nav-menu">
           <li>Home</li>
            <li>About me</li>
            <li>Contact</li>
        </ul>

        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
