import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import './login.css'

const Login = () => {
  return (
    <div className='LoginForm'>
      <div className='container'>
        <div className='form-box Login'>
          <h2>Login</h2>
          <form action='#'>
            <div className='input-box'>
              <input type='text' required></input>
              <label for=""> Username</label>
              <FaUserAlt />
            </div>

            <div className='input-box'>
              <input type='text' required></input>
              <label for=""> Password</label>
              <BiSolidLockAlt />
            </div>

            <div className='input-box'>
              <button className='login-btn' type='submit'> Login </button>
            </div>

            <div className='regi-link'>
              <p>Don't have an account ? 
                <a href='#' className='Login_signin'>Sign in</a>  
              </p>

            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Login