import React from "react";
import checkmark from "../images/greencheckmark.png";

const SuccessfulPaymentPage = ({ payer_id }) => {
  return (
    <React.Fragment>
      <div className="checkmark-icon-container">
        <img
          src={checkmark}
          className="checkmark-icon"
          alt="Successful payment image"
        />
      </div>
      <div className="successful-payment-text">
        <h3>Successful payment!</h3>
        <h5>
          Thank you for your purchase! We are processing your order and will
          send you the confirmation shortly.{" "}
        </h5>
        <h5>Order Number: </h5>
        <h5 className="successful-payment-order-id">{payer_id}</h5>
        <h5>Payment Status:</h5>
        <h5>Date: </h5>
        <h5>Payment amount: </h5>
      </div>
    </React.Fragment>
  );
};

export default SuccessfulPaymentPage;
