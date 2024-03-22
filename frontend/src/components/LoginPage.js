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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const toggleSignup = () => {
    setIsSignUp(!isSignup);
    setPasswordError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!validatePassword(password))
    {
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter and one special character.');
      return;
    }
    if (isSignup && password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }
    console.log({ email, password });
    let url = 'http://localhost:5000/login';
    if (isSignup) {
      url = 'http://localhost:5000/signup';
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      window.location.href = '/homepage';
    } else {
    if (data.message === 'User not found. Please sign up.') {
      setIsSignUp(true);
    }
    else if (data.message === 'User already exists. Please log in.') {
      setIsSignUp(false);
    }
    alert(data.message);
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regex.test(password);
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
      <div className='login__right'>
      <form onSubmit={handleSubmit} style={{ height: passwordError ? '550px' : (isSignup ? '500px' : '400px') }}>
        <h1>{isSignup ?  'Sign Up' : 'Login'}</h1>
        <div className='input-box'>
        <input type='email' placeholder='E-mail' required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <FaUser className='login__icon'/>
        </div>
        <div className='input-box'>
        <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <FaLock className='login__icon'/>
        </div>
        {isSignup && (
            <div className='input-box'>
              <input type='password' placeholder='Confirm Password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <FaLock className='login__icon'/>
            </div>
          )}

        {passwordError && <p className="error-message">{passwordError}</p>}
        {/* <button type='submit'>Login</button> */}
        <button type='submit'>{isSignup ? 'Sign Up' : 'Login'}</button>
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
      <div className='channel-link'>
       <p><Link to="/ChannelPage">Are you a channel? </Link></p>
      </div>

      </div>
    </div>
  );
};

export default LoginPage;
