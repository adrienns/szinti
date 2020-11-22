import React from "react";
import DeliveryAddress from "./DeliveryAddress";
import ShippingAddressForm from "./ShippingDetailsForm";
import Payment from "./Payment";

const CheckoutPage = () => {
  return (
    <div>
      <ShippingAddressForm />
      <DeliveryAddress />
      <Payment />
    </div>
  );
};

export default CheckoutPage;
