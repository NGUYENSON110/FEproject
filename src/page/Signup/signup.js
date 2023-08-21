import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { BiSolidLockAlt, BiSolidLockOpenAlt } from "react-icons/bi";
import './signup.css';
import { Link, useNavigate } from "react-router-dom";
import loginSignupImage from "../../assest/login-animation.gif"


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

  const handleUploadProfileImage = (e)=>{
    console.log("file",e.target.files[0])
  }



  return (
    <div className='LoginForm'>
      <div className='container'>
        <div className='form-box Login' style={divStyle}>
          <h2>Login</h2>
          <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
            <img src={loginSignupImage} className='w-full'/>

            <label htmlFor='profileImage'>
                <div className='absolute bottom-0 h-1/3 bg-slate-500 w-full text-center cursor-pointer'>
                  <p className='text-sm p-1 text-white'>Upload</p>
                </div>
                <input type={"file"} id="profileImage" className='hidden' onChange={handleUploadProfileImage}/>
            </label>
          </div>
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