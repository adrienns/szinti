import CheckoutSteps from "../checkout/CheckoutSteps";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { PayPalButton } from "react-paypal-button-v2";
import OrderSummaryChart from "./OrderSummaryChart";
import Loader from "../products_display/Loader";

const Payment = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { calculateCartData, clearCart } = useContext(ProductContext);

  const cartData = calculateCartData();
  const createOrder = () => {
    debugger;
    return fetch(`${window.api_url}/api/payment`, {
      method: "POST",
      body: JSON.stringify(cartData),

      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch(() => {
        console.log("error");
        alert(
          "Payment process was cancelled. Please try it again, if you are still having  trouble, please sned us an email."
        );
      })
      .then((data) => {
        return data.orderID; // Use the same key name for order ID on the client and server
      });
  };

  const onApprove = (data) => {
    setIsLoading(true);
    return fetch(`${window.api_url}/api/paypal-transaction-complete`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((details) => {
        console.log("error");
        alert("Something went wrong suring the payment. -on approve");
        return history.push("/error");
      })
      .then((details) => {
        const { result } = details;
        const { id, payer, purchase_units, status } = result;
        const transactionId = purchase_units[0].payments.captures[0].id;
        const transactionDate =
          purchase_units[0].payments.captures[0].create_time;
        const name = payer.name.given_name + payer.name.surname;
        const email = payer.email_address;
        const address = payer.address.country_code;
        const transactionAmount =
          purchase_units[0].payments.captures[0].amount.value;

        setIsLoading(false);
        fetch(`${window.api_url}/api/payment_details`, {
          headers: { "content-type": "application/json" },
          method: "post",
          body: JSON.stringify({
            transactionDate,
            transactionId,
            status,
            address,
            email,
            name,
            transactionAmount,
          }),
        })
          .then((res) => {
            console.log("message to the seller was sent");
          })
          .catch(() => {
            console.log("message not sent");
          });

        console.log(
          `Successful payment:${id} status: ${status} Transaction ID:${transactionId}${transactionDate}`
        );
        clearCart();
        return history.push({
          pathname: `/success/${purchase_units[0].payments.captures[0].id}`,

          state: {
            transactionDate: transactionDate,
            transactionId: transactionId,
            status: status,
            name: name,
            email: email,
            address: address,
            transactionAmount: transactionAmount,
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

  return (
    <div>
      <CheckoutSteps step1 step2 />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="paypal-outer-wrapper">
          <div className="paypal-payment-wrapper">
            <OrderSummaryChart />
            <section className="paypal-btn-container">
              <PayPalButton
                className="paypal-btn"
                createOrder={createOrder}
                onApprove={onApprove}
              ></PayPalButton>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
