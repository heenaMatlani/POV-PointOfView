// import React, {  useState } from "react";
// import "./Payment.css";
// import { loadStripe, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


// function Payment() {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [paymentAmount, setPaymentAmount] = useState("");

//   const handleOptionChange = (option) => {
//     if (selectedOption === option) {
//       setSelectedOption("");
//       setPaymentAmount("");
//     } else {
//       setSelectedOption(option);
//       switch (option) {
//         case "Basic":
//           setPaymentAmount("$8.99");
//           break;
//         case "Standard":
//           setPaymentAmount("$12.99");
//           break;
//         case "Premium":
//           setPaymentAmount("$15.99");
//           break;
//         default:
//           setPaymentAmount("");
//       }
//     }
//   };

//   return (
//     <div className="payment">
//       <form className="payment__details">
//         <div className="container p-0">
//           <div className="px-4">
//             <p className="h8 py-3 payment__heading">Payment Details</p>
//             <div className="row gx-3">
//               <div className="col-12 buttons">
//                 <div
//                   className="btn-group"
//                   role="group"
//                   aria-label="Payment Options"
//                 >
//                   <label
//                     className={`btn btn-md mb-3 ${
//                       selectedOption === "Basic"
//                         ? "btn-selected"
//                         : "btn-unselected"
//                     }`}
//                   >
//                     <button
//                       className="payment__button"
//                       type="button"
//                       onClick={() => handleOptionChange("Basic")}
//                     />{" "}
//                     Basic
//                   </label>
//                   <label
//                     className={`btn btn-md mb-3 ${
//                       selectedOption === "Standard"
//                         ? "btn-selected"
//                         : "btn-unselected"
//                     }`}
//                   >
//                     <button
//                       className="payment__button"
//                       type="button"
//                       onClick={() => handleOptionChange("Standard")}
//                     />{" "}
//                     Standard
//                   </label>
//                   <label
//                     className={`btn btn-md mb-3 ${
//                       selectedOption === "Premium"
//                         ? "btn-selected"
//                         : "btn-unselected"
//                     }`}
//                   >
//                     <button
//                       className="payment__button"
//                       type="button"
//                       onClick={() => handleOptionChange("Premium")}
//                     />{" "}
//                     Premium
//                   </label>
//                 </div>
//               </div>
//               <button className="btn btn-t btn-md mb-3" type="submit" >
//                 <span className="payment__payValue"><a href = {paymentLink}>Pay {paymentAmount}</a></span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Payment;

import React, { useState } from "react";
import "./Payment.css";

function Payment() {
  const [selectedOption, setSelectedOption] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");

  const handleOptionChange = (option, amount) => {
    setSelectedOption(option);
    setPaymentAmount(amount);
  };

  const getPaymentLink = () => {
    let paymentLink = "";
    // Generate the payment link based on the selected option
    switch (selectedOption) {
      case "Basic":
        paymentLink = "https://buy.stripe.com/test_28oaHee88gKZeiI28e";
        break;
      case "Standard":
        paymentLink = "https://buy.stripe.com/test_00g5mU3tu3Yd2A06ot";
        break;
      case "Premium":
        paymentLink = "https://buy.stripe.com/test_14k7v2fccamBeiIeUY";
        break;
      default:
        // Handle if no option is selected
        return "";
    }
    return paymentLink;
  };

  return (
    <div className="payment">
      <div className="payment__details">
        <div className="container p-0">
          <div className="px-4">
            <p className="h8 py-3 payment__heading">Payment Details</p>
            <div className="row gx-3">
              <div className="col-12 buttons">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Payment Options"
                >
                  <button
                    className={`btn btn-md mb-3 ${
                      selectedOption === "Basic"
                        ? "btn-selected"
                        : "btn-unselected"
                    }`}
                    onClick={() => handleOptionChange("Basic", "₹159.00")}
                  >
                    Basic
                  </button>
                  <button
                    className={`btn btn-md mb-3 ${
                      selectedOption === "Standard"
                        ? "btn-selected"
                        : "btn-unselected"
                    }`}
                    onClick={() => handleOptionChange("Standard", "₹219.00")}
                  >
                    Standard
                  </button>
                  <button
                    className={`btn btn-md mb-3 ${
                      selectedOption === "Premium"
                        ? "btn-selected"
                        : "btn-unselected"
                    }`}
                    onClick={() => handleOptionChange("Premium", "₹279.00")}
                  >
                    Premium
                  </button>
                </div>
              </div>
              <a
                className="btn btn-t btn-md mb-3 payment__payValue"
                href={getPaymentLink()}
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                disabled={!selectedOption} // Disable link if no option is selected
              >
                <span className="payment__Value">Pay {paymentAmount}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
