import React, { useState } from "react";
import "./Payment.css";
import logo from "../assets/logo1.jpeg";
import { Link } from "react-router-dom";

function Payment() {
  const [selectedOption, setSelectedOption] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");

  const handleOptionChange = (option) => {
    if (selectedOption === option) {
      // If the clicked option is already selected, deselect it
      setSelectedOption("");
      setPaymentAmount("");
    } else {
      // Otherwise, select the clicked option
      setSelectedOption(option);
      switch (option) {
        case "Basic":
          setPaymentAmount("$8.99");
          break;
        case "Standard":
          setPaymentAmount("$12.99");
          break;
        case "Premium":
          setPaymentAmount("$15.99");
          break;
        default:
          setPaymentAmount("");
      }
    }
  };

  return (
    <div className="payment">
      <nav className="navbar">
        <Link to="/" className="navbar-brand" href="#">
          <img
            src={logo}
            className="d-inline-block align-top payment__logo"
            alt="logo"
          />
        </Link>
      </nav>

      <form className="payment__details">
        <div className="container p-0">
          <div className="px-4">
            <p className="h8 py-3 payment__heading">Payment Details</p>
            <div className="row gx-3">
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1 payment__input">Person Name</p>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1 payment__input">Card Number</p>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="xxxx xxxx xxxxxx"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1 payment__input">Expiry</p>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="mm/yyyy"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="mb-1 payment__input">CVV/CVC</p>
                  <input
                    className="form-control mb-3 pt-2"
                    type="password"
                    placeholder="***"
                  />
                </div>
              </div>
              <div className="col-12 buttons">
                <div className="btn-group" role="group" aria-label="Payment Options">
                  <label className={`btn btn-md mb-3 ${selectedOption === "Basic" ? "btn-selected" : "btn-unselected"}`}>
                    <button className="payment__button" type="button" onClick={() => handleOptionChange("Basic")} /> Basic
                  </label>
                  <label className={`btn btn-md mb-3 ${selectedOption === "Standard" ? "btn-selected" : "btn-unselected"}`}>
                    <button className="payment__button" type="button" onClick={() => handleOptionChange("Standard")} /> Standard
                  </label>
                  <label className={`btn btn-md mb-3 ${selectedOption === "Premium" ? "btn-selected" : "btn-unselected"}`}>
                    <button className="payment__button" type="button" onClick={() => handleOptionChange("Premium")} /> Premium
                  </label>
                </div>
              </div>
              <div className="btn btn-t btn-md mb-3">
                <span className="">Pay {paymentAmount}</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;
