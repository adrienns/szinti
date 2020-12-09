import CheckoutSteps from "../checkout/CheckoutSteps";
import React, { useState, useContext, useEffect } from "react";

import { ProductContext } from "../contexts/ProductContext";
import { PayPalButton } from "react-paypal-button-v2";
import Axios from "axios";
import { idText } from "typescript";

const Payment = (props) => {
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
        console.log("error");
      })
      .then((data) => {
        return data.orderID; // Use the same key name for order ID on the client and server
      });
  };

  const onApprove = (data, actions) => {
    return fetch(`${window.api_url}/api/paypal-transaction-complete`, {
      headers: {
        "content-type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((details) => {
        console.log("error");
        return props.history.push("/form");
      })
      .then((details) => {
        const { result } = details;
        const { id, payer, purchase_unit } = result;
        console.log(
          `Successful payment:${id} ${payer.name.given_name} ${payer.email}`
        );
        return props.history.push("/success");
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

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <div className="order-summary-and-payment-container">
        <div className="order-summary-and-payment">
          <h3 className="final-order-details">Order details</h3>
          <h4>Your shipping address:</h4>
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
        {/* <div>
          {" "}
          {paid ? (
            <div>Payment successful!</div>
          ) : (
            <div>Error Occurred in processing payment! Please try again.</div>
          )}{" "}
        </div> */}
      </div>
      <section className="paypal-btn-container">
        <PayPalButton
          className="paypal-btn"
          createOrder={createOrder}
          onApprove={onApprove}
        ></PayPalButton>
      </section>
    </div>
  );
};

export default Payment;
