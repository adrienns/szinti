import React from "react";
import "./Checkout.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faChevronRight);

const CheckoutSteps = (props) => {
  return (
    <div className="checkout-steps-container">
      <div className="row checkout-steps">
        <div className={props.step1 ? "active" : ""} id="step1">
          Your Shopping Cart <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className={props.step3 ? "active" : ""} id="step3">
          Shipping Address & Payment
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
