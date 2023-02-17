import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import logo from "../img/Starsocial.png"
import HomeIcon from "@material-ui/icons/Home";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
// import { connect } from '@argent/get-starknet/dist';

function Navbar() {
  
  // async function connectWallet() {
  //   const starknet = connect({ showList: false });

  //   if (!starknet) {
  //     throw Error("User rejected wallet selection or silent connect found nothing")
  //   }

  //   // (optional) connect the wallet
  //   await starknet.enable();

  //   if (starknet.isConnected) {
  //     // If the extension was installed and successfully connected, you have access to a starknet.js Signer object to do all kinds of requests through the user's wallet contract.
  //     console.log("connected");
  //   } else {
  //     // In case the extension wasn't successfully connected you still have access to a starknet.js Provider to read starknet states and sent anonymous transactions
  //       console.log("not connected");
  //   }

  // }

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

            <button > Connect Wallet</button>

          </div>

        </div>

      </nav>
    </div>
  )
}

export default Navbar