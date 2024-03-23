import React from "react";
import "./Payment.css";
import logo from "../assets/logo1.jpeg";
import { Link } from "react-router-dom";
function Payment() {
  return (
    <div className="payment">
      <nav className="navbar">
        <Link to = "/" className="navbar-brand" href="#">
          <img src={logo} className="d-inline-block align-top payment__logo" alt="logo"></img>
        </Link>
      </nav>

      <div className="payment__details">
        
      </div>
    </div>
  );
}

export default Payment;
