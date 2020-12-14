import React from "react";
import { useHistory } from "react-router-dom";

import checkmark from "../images/greencheckmark.png";

const SuccessfulPaymentPage = () => {
  const history = useHistory();
  const transactionDate = history.location.state.transactionDate;
  const transactionId = history.location.state.transactionId;
  const status = history.location.state.status;

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
        <h5>Order Number:{transactionId} </h5>
        <h5 className="successful-payment-order-id"></h5>
        <h5>Payment Status:{status}</h5>
        <h5>Date: {transactionDate}</h5>
        <h5>Payment amount: </h5>
      </div>
    </React.Fragment>
  );
};

export default SuccessfulPaymentPage;
