import React from "react";
import error from "../images/error_icon.png";

export const PaymentError = () => {
  return (
    <div className="payment-error-page">
      <div className="payment-error-container">
        <div className="payment-error-icon-container">
          <img
            src={error}
            className="payment-error-icon"
            alt="Unsuccessful payment"
          />{" "}
        </div>
        <h1>Payment Error</h1>
        <h4>
          Payment was unsuccessful. Your credit card was not charged. Please try
          again.
        </h4>
      </div>
    </div>
  );
};

export default PaymentError;
