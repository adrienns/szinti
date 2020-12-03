import CheckoutSteps from "../checkout/CheckoutSteps";
import React, { useState, useContext, useEffect } from "react";

import { ProductContext } from "../contexts/ProductContext";
import { PayPalButton } from "react-paypal-button-v2";
import Axios from "axios";

const Payment = () => {
  const [isSent, setisSent] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);

  const {
    cart,
    calculateCartData,
    billingAddress,
    alternativeAddress,
    finalTotal,
    selectedOption,
    cartTotal,
  } = useContext(ProductContext);

  const cartData = calculateCartData();
  const createOrder = () => {
    return fetch(`${window.api_url}/api/payment`, {
      method: "post",
      body: JSON.stringify(cartData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((data) => {
        debugger;
        console.log("error");
      })
      .then((data) => {
        return data.orderID; // Use the same key name for order ID on the client and server
      });
  };

  const onApprove = (data, actions) => {
    // This function captures the funds from the transaction.
    return actions.order.capture().then(function (details) {
      // This function shows a transaction success message to your buyer.
      alert("Transaction completed by " + details.payer.name.given_name);
    });
  };
  // const { firstName } = alternativeAddress;

  // const successPaymentHandler=() => {
  //   amount={order.totalSum} onSuccess={successPaymentHandler}
  // }

  // useEffect(() => {
  //   // getting client ID (byPayPal) from my backend

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
  //   // if (!order_Id) {
  //   //   return orderId;
  //   // } else {
  //   //   if (!order.isPaid) {
  //   if (!window.paypal) {
  //     addPayPalScript();
  //   } else {
  //     setSdkReady(true);
  //   }
  //   //   }
  //   // }
  // }, []);

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
      <div className="order-summary-and-payment">
        <div>
          <h4>Billing Address</h4>
          <ul>
            <li>
              {billingAddress.firstName} {billingAddress.lastName}
            </li>
            <li>
              {billingAddress.zipcode}
              {billingAddress.city} {billingAddress.address}
            </li>
            <li>{billingAddress.email}</li>
            <li>{billingAddress.phone}</li>
            <li></li>
          </ul>

          <ul>
            <li>
              {alternativeAddress.firstName} {alternativeAddress.lastName}
            </li>
            <li>
              {alternativeAddress.zipcode}
              {alternativeAddress.city} {alternativeAddress.address}
            </li>
            <li>{alternativeAddress.email}</li>
            <li>{alternativeAddress.phone}</li>
            <li></li>
          </ul>
          <ul>
            <li>Products price:{cartTotal}</li>
            <li>
              Shipping cost:
              {selectedOption === "Hungary" ? "free shipping" : "100ft"}
            </li>

            <li>{cartTotal}</li>
            <li>Total Price: {finalTotal}</li>
          </ul>
        </div>
      </div>
      <div className="paypal-btn-container">
        <PayPalButton
          // onClick={calculateCartData}
          className="paypal-btn"
          createOrder={createOrder}
          onApprove={onApprove}
        ></PayPalButton>
      </div>
    </div>
  );
};

export default Payment;
