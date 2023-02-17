import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <>
      <div className='main'>
        <input type="checkbox" id='chk' aria-hidden="true" />
        <div className='signup'>
          <form>
            <label htmlFor="" className='sig'> Sign Up</label>
            <input type="text" name='text' placeholder='User Name' required="" />
            <input type="email" name='Email' placeholder='Email' required="" />
            <input type="password" name='pswd' placeholder='Password' required="" />
            <button className='sig_btn'>Sign Up</button>
          </form>
        </div>



      </div>
    </>
  )
}

export default Login