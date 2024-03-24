import React, { useEffect, useState } from "react";
import "./Payment.css";
import logo from "../assets/logo1.jpeg";
import { Link , useNavigate  } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

function Payment() {
  const [selectedOption, setSelectedOption] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    if (selectedOption === option) {
      setSelectedOption("");
      setPaymentAmount("");
    } else {
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
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe stuff

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${paymentAmount*100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [paymentAmount]);

  console.log("THE CLIENT SECRET IS >>>", clientSecret);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/subscription", { replace: true });
      });
    
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? error.error.message : "");
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
      <form className="payment__details" onSubmit={handleSubmit}>
        <CardElement onChange={handleChange}></CardElement>
        <div className="col-12 buttons">
          <div className="btn-group" role="group" aria-label="Payment Options">
            <label
              className={`btn btn-md mb-3 ${
                selectedOption === "Basic" ? "btn-selected" : "btn-unselected"
              }`}
            >
              <button
                className="payment__button"
                type="button"
                onClick={() => handleOptionChange("Basic")}
              />{" "}
              Basic
            </label>
            <label
              className={`btn btn-md mb-3 ${
                selectedOption === "Standard"
                  ? "btn-selected"
                  : "btn-unselected"
              }`}
            >
              <button
                className="payment__button"
                type="button"
                onClick={() => handleOptionChange("Standard")}
              />{" "}
              Standard
            </label>
            <label
              className={`btn btn-md mb-3 ${
                selectedOption === "Premium" ? "btn-selected" : "btn-unselected"
              }`}
            >
              <button
                className="payment__button"
                type="button"
                onClick={() => handleOptionChange("Premium")}
              />{" "}
              Premium
            </label>
          </div>
        </div>
        <div>
          <h3>Amount = {paymentAmount}</h3>

          <button
            disabled={processing || disabled || succeeded}
            className="btn btn-t btn-md mb-3"
          >
            <span>
              {processing ? <p> Processing</p> : "Pay"}
            </span>
          </button>
        </div>

        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default Payment;
{
  /* <form className="payment__details">
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
      </form> */
}
