import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { BiSolidLockAlt, BiSolidLockOpenAlt } from "react-icons/bi";
import './signup.css';
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const divStyle = {
    padding: '0 40px',
  };

  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert("Successfully");
        navigate("/login");
      }
      else {
        alert("Password and confirmPassword không trùng nhau")
      }

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
              <input type='text' required value={data.firstName} name='firstName' onChange={handleOnChange}></input>
              <label for=""> First Name</label>
              <FaUserAlt className='icon' />
            </div>

            <div className='input-box'>
              <input type='text' required value={data.lastName} name='lastName' onChange={handleOnChange}></input>
              <label for=""> Last Name</label>
              <FaUserAlt className='icon' />
            </div>

            <div className='input-box'>
              <input type='email' required value={data.email} name='email' onChange={handleOnChange}></input>
              <label for=""> Email </label>
              <FaUserAlt className='icon' />
            </div>



            <div className='input-box'>
              <input type='password' required value={data.password} name='password' onChange={handleOnChange}></input>
              <label for=""> Password</label>
              <BiSolidLockAlt className='icon' />
            </div>

            <div className='input-box'>
              <input type='password' required value={data.confirmPassword} name='confirmPassword' onChange={handleOnChange}></input>
              <label for=""> Confirm Password</label>
              <BiSolidLockAlt className='icon' />
            </div>

            <div className='input-box'>
              <button className='btn' type='submit'> Sign Up </button>
            </div>

            <div className='regi-link'>
              <p>Don't have an account ?
                <Link to={"/login"}> Sign in </Link>
              </p>

            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Signup;