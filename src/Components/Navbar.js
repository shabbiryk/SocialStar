import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import logo from "../img/Starsocial.png"

function Navbar() {
  return (
    <div>
      <nav id='nav'>
        <div className='container flex'>
          <img src={logo} alt="img" />
          <div className='links'>
            <NavLink to='/'><a href=" ">Home</a></NavLink>
            <NavLink to='/search'><a href=" ">Search</a></NavLink>
            <NavLink to='/login'><a href=" ">Login</a></NavLink>
            <NavLink to='/profile'><a href=" ">Profile</a></NavLink>
          </div>

        </div>

      </nav>
    </div>
  )
}

export default Navbar