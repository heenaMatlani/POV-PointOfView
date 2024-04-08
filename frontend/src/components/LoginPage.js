// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import logo from "../assets/logoo1.png";
import { FaUser,FaLock } from 'react-icons/fa';
const LoginPage = () => {
  const [isSignup, setIsSignUp] = useState(false);
  const [email,setEmail] = useState('');
  const [username, setUsername] = useState('');
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
    let sending_data = '';
      if (isSignup){
      sending_data = JSON.stringify({ email, password, username});
      }
      else{
      sending_data = JSON.stringify({ email, password });
      }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: sending_data,
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
      <div className="login__left">
{/* <img className="login__logo" src={logo} alt="Logo" /> */}
      </div>
      <div className='heading__pov'>
        {/* <h1 className='heading'>POV</h1> */}
        <img className="login__logo" src={logo} alt="Logo" />
        <h2 className='subheading reddit-mono'>Where News Comes Alive From Every Point Of View</h2>

      </div>
      <div className='login__right'>
      <form onSubmit={handleSubmit} style={{ height: passwordError ? '630px' : (isSignup ? '550px' : '400px') }}>
        <h1>{isSignup ?  'Sign Up' : 'Login'}</h1>
        <div className='input-box'>
        <input type='email' placeholder='E-mail' required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <FaUser className='login__icon'/>
        </div>
        {isSignup && (
            <div className='input-box'>
              <input type='text' placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} />
              <FaUser className='login__icon' />
            </div>
          )}
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
        <button type='submit'>{isSignup ? 'Sign Up' : 'Login'}</button>
        <div className='register-link'>
          <p>{isSignup ? 'Already have an account?' : "Don't have an account?"}<a href="#" onClick={toggleSignup}>{isSignup ? 'Login' : 'Sign Up'}</a></p>
        </div>
      </form>
      <div className='channel-link'>
       <p><Link to="/subscription">Are you a channel? </Link></p>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
