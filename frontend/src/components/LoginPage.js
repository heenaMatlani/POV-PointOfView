// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import logo from "../assets/logo1.jpeg";
import { FaUser,FaLock } from 'react-icons/fa';
const LoginPage = () => {
  const [isSignup, setIsSignUp] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const toggleSignup = () => {
    setIsSignUp(!isSignup);
  };
  return (
    <div className='wrapper'>
      {/* <Link to="/homepage">
        <button>Login</button>
      </Link> */}
      <div className="login__left">
<img className="login__logo" src={logo} alt="Logo" />
      </div>
      <div className='heading__pov'>
        <h1 className='heading'>POV</h1>
        <h2 className='subheading'>Point Of View</h2>
      </div>
      <form action="">
        <h1>{isSignup ?  'Sign Up' : 'Login'}</h1>
        <div className='input-box'>
        <input type='text' placeholder='E-mail' required value={email}/>
        <FaUser className='login__icon'/>
        </div>
        <div className='input-box'>
        <input type='password' placeholder='Password' required value={password}/>
        <FaLock className='login__icon'/>
        </div>



        <Link to="/homepage">
        {/* <button type='submit'>Login</button> */}
        <button type='submit'>{isSignup ? 'Sign Up' : 'Login'}</button>
        </Link> 
        <div className='remember-forgot'>
          <label>
          <input type='checkbox'/> Remember me
          </label>
          <a href='#'>Forgot Password?</a>
        </div>
        <div className='register-link'>
          {/* <p>Don't have an account?<a href="#">Sign Up</a></p> */}
          <p>{isSignup ? 'Already have an account?' : "Don't have an account?"}<a href="#" onClick={toggleSignup}>{isSignup ? 'Login' : 'Sign Up'}</a></p>
        </div>
      </form>
    
      
    </div>
  );
};

export default LoginPage;
