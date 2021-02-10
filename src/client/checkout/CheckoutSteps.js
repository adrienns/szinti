import React from "react";
import "./Checkout.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";

library.add(faChevronRight);

const CheckoutSteps = (props) => {
  return (
    <div className="checkout-steps-container">
      <div className="row checkout-steps">
        <div className={props.step1 ? "active" : ""} id="step1">
          <FormattedMessage
            id="app.yourshoppingcart"
            defaultMessage="Shopping cart"
          />
          <FontAwesomeIcon icon={faChevronRight} className="greater-icon" />
        </div>
        <div className={props.step2 ? "active" : ""} id="step2">
          <FormattedMessage
            id="app.shippingaddress&payment"
            defaultMessage=" Shipping Address & Payment"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
