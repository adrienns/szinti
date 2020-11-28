import React, { useState, useContext } from "react";
import axios from "axios";
import DeliveryAddress from "./DeliveryAddress";
import ShippingAddressForm from "./ShippingDetailsForm";
import { ProductContext } from "../contexts/ProductContext";
import { PayPalButton } from "react-paypal-button-v2";

const CheckoutPage = () => {
  const [isSent, setisSent] = useState(false);
  const { finalTotal, itemsTotal } = useContext(ProductContext);

  // const handlePayment = () => {
  //   let data = { finalTotal: finalTotal, itemsTotal: itemsTotal };
  //   axios
  //     .post(`${window.api_url}/api/pay`, data)
  //     .then((res) => {
  //       setisSent(true);
  //     })
  //     .catch(() => {
  //       console.log("not successful. please try it again");
  //     });
  // };
  return (
    <div>
      <ShippingAddressForm />
      <DeliveryAddress />
      <PayPalButton amount={finalTotal}></PayPalButton>
    </div>
  );
};

export default CheckoutPage;
