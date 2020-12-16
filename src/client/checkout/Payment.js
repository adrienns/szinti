import CheckoutSteps from "../checkout/CheckoutSteps";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { PayPalButton } from "react-paypal-button-v2";
import OrderSummaryChart from "./OrderSummaryChart";

const Payment = (props) => {
  // const [sdkReady, setSdkReady] = useState(false);
  // const [paidFor, setPaidFor] = useState(false);
  // const [paymentError, setPaymentError] = useState(false);
  const history = useHistory();

  const { calculateCartData } = useContext(ProductContext);

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
        return history.push("/error");
      })
      .then((details) => {
        const { result } = details;
        const { id, payer, purchase_units, status } = result;
        const transactionId = purchase_units[0].payments.captures[0].id;
        const transactionDate =
          purchase_units[0].payments.captures[0].create_time;
        debugger;
        console.log(
          `Successful payment:${id} status: ${status} Transaction ID:${transactionId}${transactionDate}`
        );
        return history.push({
          pathname: `/success/${purchase_units[0].payments.captures[0].id}`,

          state: {
            transactionDate: transactionDate,
            transactionId: transactionId,
            status: status,
          },
        });
      });
  };

  const onCancel = (data) => {
    // Show a cancel page, or return to cart
  };

  const onError = (err) => {
    // Show an error page here, when an error occurs

    setPaymentError(true);
    console.log(err);
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
      <OrderSummaryChart />
      {/* <div>
    {" "}
    {paid ? (
      <div>Payment successful!</div>
    ) : (
      <div>Error Occurred in processing payment! Please try again.</div>
    )}{" "}
  </div> */}
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
