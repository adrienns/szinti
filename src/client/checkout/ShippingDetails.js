import CheckoutSteps from "../checkout/CheckoutSteps";
import React, { useContext } from "react";
import ShippingDetailsForm from "./ShippingDetailsForm";

const ShippingDetails = () => {
  return (
    <div>
      <CheckoutSteps step1 step2 />
      <ShippingDetailsForm />
    </div>
  );
};

export default ShippingDetails;
