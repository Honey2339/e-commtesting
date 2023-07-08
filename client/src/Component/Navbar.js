import React from 'react'
import headerlogo from "../images/headerlogo.svg"
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <div className='navbar-container'>
        <div className="nav-links">
            <img src={headerlogo} style={{height:55}}></img>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/everything"> Everything</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar