import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import logo from "../img/Starsocial.png"
import HomeIcon from "@material-ui/icons/Home";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';


function Navbar() {
  return (
    <div>
      <nav id='nav'>
        <div className='container flex'>
          <img src={logo} alt="img" />
          <div className='links'>
            <NavLink to='/'><a href=" "><HomeIcon/></a></NavLink>
            <NavLink to='/search'><a href=" "><SearchOutlinedIcon /></a></NavLink>
            {/* <NavLink to='/login'><a href=" ">Login</a></NavLink> */}
            <NavLink to='/profile'><a href=" "><PersonOutlineOutlinedIcon/></a></NavLink>
          </div>

        </div>

      </nav>
    </div>
  )
}

export default Navbar