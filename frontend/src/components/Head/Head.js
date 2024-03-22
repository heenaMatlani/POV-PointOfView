import React from "react";
import "./Head.css";
import { Link } from "react-router-dom";
function Head() {
  return (
    <header className="showcase">
      <div className="showcase-top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logo"
        ></img>
        <Link to="/" className="btn btn-rounded">
          Sign In
        </Link>
      </div>
      <div className="showcase-content">
        <h1 className="showcase-content">
          Unlimited new upload, viewership and more
        </h1>
        <p className="showcase-content ">
          Add videos from anywhere. Cancel anytime.
        </p>

        <Link to="/payment" className="btn btn-xl">
          Come on Board!
          <i className="fas fa-chevron-right btn-icon"></i>
        </Link>
      </div>
    </header>
  );
}

export default Head;
