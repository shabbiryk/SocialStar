import React from 'react'
import "./Profile.css"
import imag from "../img/angel.jpg"
import { useState } from 'react'

const Profile = () => {
  const [Name, setName] = useState("Shabbiryk.eth");
  const [job, setJob] = useState("Blockchain Developer");
  const [about, setAbout] = useState("I'm a finance nerd who wants to hold assets in a decentralized way. I mostly write about communities, DeFi, Blockchain, Tokenization and Open Source Contributions. Also a Developer Relations professional with a knack for Rust.Love sharing my ideas through writings or by taking sessions and hosting conferences!")

  return (
    <div className='profile'>
      <div className='card'>
          <div className='upper-container'>
              <div className='image-container'>
                <img src={imag} alt=""/>
              </div>
          </div>
            <div className='lower-container'>
                    <h3>{Name}</h3>
                    <h4>{job}</h4>
                    <p>{about}</p>
                    <h3>Followers : 487</h3>
                    <h3> Following: 511</h3>
                    <div className='btn'>
                    <button className='btn'>Edit</button>
                    </div>
            </div>
        
      </div>
    </div>
  )
}

export default Profile