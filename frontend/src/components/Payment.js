import React, { useEffect, useState } from "react";
import "./Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

function Payment() {
  const [selectedOption, setSelectedOption] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

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
  }; useEffect(() => {
    fetch("http://localhost:3001/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: totalPrice }),
    })
      .then(res => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);  // <-- setting the client secret here
      });
  }, []);
  const makePayment = async () => {
    const payload = await stripe.confirmCardPayment(clientSecret, {
     payment_method: {
       card: elements.getElement(CardElement),
     },
   });
 }


  return (
    // <div className="payment">
    //   <form className="payment__details" onSubmit={handleSubmit}>
    //     <div className="container p-0">
    //       <div className="px-4">
    //         <p className="h8 py-3 payment__heading">Payment Details</p>
    //         <div className="row gx-3">
    //           <div className="col-12">
    //             <div className="d-flex flex-column">
    //               <p className="text mb-1 payment__input">Person Name</p>
    //               <input
    //                 className="form-control mb-3"
    //                 type="text"
    //                 placeholder="name"
    //               />
    //             </div>
    //           </div>
    //           <div className="col-12">
    //             <div className="d-flex flex-column">
    //               <p className="text mb-1 payment__input">Card Number</p>
    //               <CardElement className="form-control mb-3" />
    //             </div>
    //           </div>
    //           <div className="col-12 buttons">
    //             <div
    //               className="btn-group"
    //               role="group"
    //               aria-label="Payment Options"
    //             >
    //               <label
    //                 className={`btn btn-md mb-3 ${
    //                   selectedOption === "Basic"
    //                     ? "btn-selected"
    //                     : "btn-unselected"
    //                 }`}
    //               >
    //                 <button
    //                   className="payment__button"
    //                   type="button"
    //                   onClick={() => handleOptionChange("Basic")}
    //                 />{" "}
    //                 Basic
    //               </label>
    //               <label
    //                 className={`btn btn-md mb-3 ${
    //                   selectedOption === "Standard"
    //                     ? "btn-selected"
    //                     : "btn-unselected"
    //                 }`}
    //               >
    //                 <button
    //                   className="payment__button"
    //                   type="button"
    //                   onClick={() => handleOptionChange("Standard")}
    //                 />{" "}
    //                 Standard
    //               </label>
    //               <label
    //                 className={`btn btn-md mb-3 ${
    //                   selectedOption === "Premium"
    //                     ? "btn-selected"
    //                     : "btn-unselected"
    //                 }`}
    //               >
    //                 <button
    //                   className="payment__button"
    //                   type="button"
    //                   onClick={() => handleOptionChange("Premium")}
    //                 />{" "}
    //                 Premium
    //               </label>
    //             </div>
    //           </div>
    //           <button className="btn btn-t btn-md mb-3" type="submit">
    //             <span className="">Pay {paymentAmount}</span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <form id="payment-form" onSubmit={makePayment}>
    <CardElement id="card-element" onChange={handleChange} />
    <button id="submit"> Pay Now </button>
  </form>
  );
}

export default Payment;
