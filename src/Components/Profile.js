import React from 'react'
import "./Profile.css"
import imag from "../img/Starsocial.png"
import { useState } from 'react'

const Profile = () => {
  const [Name, setName] = useState("Your Name");
  const [job, setJob] = useState("Your Job");
  const [about, setAbout]= useState("Tell us something about yourself")

  return (
    <div className='profile'>
      <div className='card'>
          <div className='upper-container'>
              <div className='image-container'>
                <img src={imag} alt="" height="300px" width="300px"/>
              </div>
          </div>
            <div className='lower-container'>
                    <h3>{Name}</h3>
                    <h4>{job}</h4>
                    <p>{about}</p>
                    <div className='btn'>
                    <button className='btn'>Follow</button>
                    </div>
            </div>
        
      </div>
    </div>
  )
}

export default Profile