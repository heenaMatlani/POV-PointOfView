// LoginPage.js
import thumbnail from "../assets/thumbnail.png";
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <Link to="/homepage">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default LoginPage;
