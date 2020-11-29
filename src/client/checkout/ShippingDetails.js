import CheckoutSteps from "../checkout/CheckoutSteps";
import React, { useContext } from "react";
import DeliveryAddress from "./DeliveryAddress";
import ShippingDetailsForm from "./ShippingDetailsForm";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
const ShippingDetails = () => {
  const { sendFinalPaymentDetails } = useContext(ProductContext);

  const handleSubmit = (e) => {
    e.target.value;
  };

  sendFinalPaymentDetails;
  const handleonClick = () => {
    sendFinalPaymentDetails();
  };
  return (
    <div>
      <CheckoutSteps step1 step2 />
      <ShippingDetailsForm />
      <DeliveryAddress />
      <Link to="/payment">
        <button
          onClick={handleonClick}
          onSubmit={handleSubmit}
          className="continue-payment-btn"
          type="submit"
        >
          Continue
        </button>
      </Link>
    </div>
  );
};

export default ShippingDetails;
