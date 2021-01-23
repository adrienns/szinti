import React from "react";
import error from "../images/error_icon.png";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export const PaymentError = () => {
  return (
    <div className="payment-error-page">
      <div className="payment-error-container">
        <div className="payment-error-text-and-image-container">
          <img
            src={error}
            className="payment-error-icon"
            alt="Unsuccessful payment"
          />

          <div className="payment-error-text-wrapper">
            <h2 className="payment-error-upper-text">
              <FormattedMessage
                id="app.paymenterror"
                defaultMessage="Payment Error"
              />
            </h2>
            <h4 className="payment-error-lower-text">
              <FormattedMessage
                id="app.paymentunsuccessfultext"
                defaultMessage=" Payment was unsuccessful. Your credit card was not charged. Please
                  try again."
              />
            </h4>
            <Link to="/payment">
              <span className="payment-error-text-go-back">
                <FormattedMessage
                  id="app.goback"
                  defaultMessage="Go back and try again"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentError;
