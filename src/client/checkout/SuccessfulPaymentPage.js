import React from "react";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import checkmark from "../images/greencheckmark.png";

const formattedDate = (transactionDate) => {
  const newDate = new Date(transactionDate);
  const month = newDate.getMonth() + 1; //months from 1-12
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  return year + "/" + month + "/" + day;
};

const SuccessfulPaymentPage = () => {
  const history = useHistory();
  const transactionDate = history.location.state.transactionDate;
  const transactionId = history.location.state.transactionId;
  const status = history.location.state.status;
  const name = history.location.state.name;
  const transactionAmount = history.location.state.transactionAmount;

  return (
    <div className="successful-payment-outer-wrapper">
      <div className="successful-payment-box">
        <img
          src={checkmark}
          className="checkmark-icon"
          alt="Successful payment image"
        />
        <h3>
          {" "}
          <FormattedMessage
            id="app.successfulpayment"
            defaultMessage="Successful payment!"
          />
        </h3>
        <h5 className="payment-confirmation-long-text">
          <FormattedMessage
            id="app.successfulpaymenttext"
            defaultMessage="Thank you for your purchase! We are processing your order and will
          send you the confirmation shortly."
          />
        </h5>

        <h5>
          <p className="payment-confirmation-details-text">
            {" "}
            <FormattedMessage id="app.name" defaultMessage="Name" />
          </p>
          <p>{name} </p>
        </h5>
        <h5>
          <p className="payment-confirmation-details-text">
            {" "}
            <FormattedMessage
              id="app.ordernumber"
              defaultMessage="Order Number"
            />
          </p>
          <p>{transactionId} </p>
        </h5>
        <h5>
          <p className="payment-confirmation-details-text">
            {" "}
            <FormattedMessage
              id="app.paymentstatus"
              defaultMessage="Payment Status"
            />
          </p>
          <p className="transaction-status">{status}</p>
        </h5>
        <h5>
          <p className="payment-confirmation-details-text">
            {" "}
            <FormattedMessage id="app.date" defaultMessage="Date" />
          </p>
          <p>{formattedDate(transactionDate)}</p>
        </h5>
        <h5>
          <p className="payment-confirmation-details-text">
            <FormattedMessage
              id="app.paymentamount"
              defaultMessage="Payment Amount"
            />
          </p>
          <p>{transactionAmount} HUF</p>
        </h5>
      </div>
    </div>
  );
};

export default SuccessfulPaymentPage;
