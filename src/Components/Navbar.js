import React from 'react'
import { useState } from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
// import logo from "../img/Starsocial.png"
import HomeIcon from "@material-ui/icons/Home";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
//import { connect } from '@argent/get-starknet/dist';
// import {connect} from "@argent/get-starknet";


function Navbar() {

  const [account, setAccount] = useState();



  // const connectWallet = async () => {
  //   try {
  //     // const starknet = connect();
  //     const starknet = await connect();
  //     await starknet.enable({
  //       starknetVersion: "v4",
  //     });

  //     setAccount(starknet?.account);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div>
      <nav id='nav'>
        <div className='container flex'>
          <h2> Socialstar ✨</h2>
          {/* <img src={logo} alt="img" /> */}
          <div className='links'>
            <NavLink to='/'><a href=" "><HomeIcon /></a></NavLink>
            <NavLink to='/searched'><a href=" "><SearchOutlinedIcon /></a></NavLink>
            {/* <NavLink to='/login'><a href=" ">Login</a></NavLink> */}
            <NavLink to='/profile'><a href=" "><PersonOutlineOutlinedIcon /></a></NavLink>

            <button style={{textTransform:"capitalize"}}> Shabbiryk.eth</button>
            {/* <div>
              {!account && <button
                className="btn"
                hidden={account}
                onClick={connectWallet}
              >
                Connect
              </button>}

              {account && (
                <div>
                  <p className="btn">Connected</p>
                </div>
              )}
            </div> */}

          </div>

        </div>

      </nav>
    </div>
  )
}

export default Navbar
