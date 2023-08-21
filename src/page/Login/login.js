import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import './login.css';
import { Link } from "react-router-dom"



const Login = () => {

  const divStyle = {
    padding: '0 40px',
  };

  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({

    email: "",
    password: "",
  })
  console.log("data", data)

  const handleOnChange = (e) => {
    console.log("e", e)
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      alert("Successfully")
    }
    else {
      alert("Hãy điền đầy đủ thông tin !")
    }

  }

  return (
    <div className='LoginForm'>
      <div className='container'>
        <div className='form-box Login' style={divStyle}>
          <h2>Login</h2>
         
          <form action='#' onSubmit={handleSubmit}>
            <div className='input-box'>
              <input type='text' required name='email'></input>
              <label for=""> Username</label>
              <FaUserAlt className='icon' />
            </div>

            <div className='input-box'>
              <input type='text' required name='password'></input>
              <label for=""> Password</label>
              <BiSolidLockAlt className='icon' />
            </div>

            <div className='input-box'>
              <button className='btn' type='submit'> Login </button>
            </div>

            <div className='regi-link'>
              <p>Don't have an account ?
                <Link to={"/signup"}>Sign up </Link>
              </p>

            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Login