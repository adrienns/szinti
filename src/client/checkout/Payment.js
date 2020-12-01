import CheckoutSteps from "../checkout/CheckoutSteps";
import React, { useState, useContext, useEffect } from "react";

import { ProductContext } from "../contexts/ProductContext";
import { PayPalButton } from "react-paypal-button-v2";
import Axios from "axios";
import { order } from "paypal-rest-sdk";

const Payment = () => {
  const [isSent, setisSent] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);

  const {
    cart,
    billingAddress,
    alternativeAddress,
    finalTotal,
    selectedOption,
    cartTotal,
  } = useContext(ProductContext);

  // const { firstName } = alternativeAddress;

  // const successPaymentHandler=() => {
  //   amount={order.totalSum} onSuccess={successPaymentHandler}
  // }

  // useEffect(() => {
  //getting client ID (byPayPal) from my backend

  //   const addPayPalScript = async () => {
  //     const { data } = await Axios.get("/api/config/paypal");
  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.src = `https://www.paypal.com/sdk/js?client-id=${data}&currency=HUF`;
  //     script.async = true;
  //     script.onload = () => {
  //       setSdkReady(true);
  //     };
  //     document.body.appendChild(script);
  //   };
  //   if (!order_Id) {
  //     return orderId;
  //   } else {
  //     if (!order.isPaid) {
  //       if (!window.paypal) {
  //         addPayPalScript();
  //       } else {
  //         sdkReady(true);
  //       }
  //     }
  //   }
  // }, [order, isPaid, orderId, sdkReady]);

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
      <CheckoutSteps step1 step2 step3 />

      <h4>Billing Address</h4>
      <h3>{billingAddress.firstName}</h3>
      <h3>{billingAddress.lastName}</h3>
      <h3>{billingAddress.phone}</h3>
      <h3>{billingAddress.email}</h3>
      <h3>{billingAddress.city}</h3>
      <h3>{billingAddress.address}</h3>

      <h4>Alternative Address</h4>
      <h3>{alternativeAddress.firstName}</h3>
      <h3>{alternativeAddress.lastName}</h3>
      <h3>{alternativeAddress.phone}</h3>
      <h3>{alternativeAddress.email}</h3>
      <h3>{alternativeAddress.city}</h3>
      <h3>{alternativeAddress.address}</h3>
      <h3>Subtotal</h3>
      <h3>{cartTotal}</h3>
      <h4>Shipping:</h4>

      <h3>{selectedOption === "Hungary" ? "free shipping" : "100ft"}</h3>

      <h2>Total price: </h2>
      <h3>{finalTotal}</h3>

      <PayPalButton></PayPalButton>
    </div>
  );
};

export default Payment;
