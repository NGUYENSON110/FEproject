import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import './signup.css';
import { Link } from "react-router-dom";

const Signup = () => {

  const divStyle = {
    padding: '0 40px',
  };

  return (
    <div className='LoginForm'>
      <div className='container'>
        <div className='form-box Login' style={divStyle}>
          <h2>Login</h2>
          <form action='#'>
            <div className='input-box'>
              <input type='text' required></input>
              <label for=""> First Name</label>
              <FaUserAlt className='icon'/>
            </div>

            <div className='input-box'>
              <input type='text' required></input>
              <label for=""> Last Name</label>
              <FaUserAlt className='icon'/>
            </div>

            <div className='input-box'>
              <input type='email' required></input>
              <label for=""> Email </label>
              <FaUserAlt className='icon'/>
            </div>

            

            <div className='input-box'>
              <input type='password' required></input>
              <label for=""> Password</label>
              <BiSolidLockAlt className='icon' />
            </div>

            <div className='input-box'>
              <input type='password' required></input>
              <label for=""> Confirm Password</label>
              <BiSolidLockAlt className='icon' />
            </div>

            <div className='input-box'>
              <button className='btn' type='submit'> Sign Up </button>
            </div>

            <div className='regi-link'>
              <p>Don't have an account ? 
                <Link to={"login"}> Sign in </Link>
              </p>

            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Signup;