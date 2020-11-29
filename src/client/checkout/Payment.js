import CheckoutSteps from "../checkout/CheckoutSteps";
import PayPalBtn from "./PayPalBtn";
import React, { useState, useContext } from "react";
import axios from "axios";

import { ProductContext } from "../contexts/ProductContext";
import { PayPalButton } from "react-paypal-button-v2";
import Axios from "axios";

const Payment = () => {
  const [isSent, setisSent] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);

  // useEffect(() => {
  //   const {data} =await Axios.get('/api/config/paypal');
  //   const script= document.createElement('script');
  //   script.type='text/javascript';
  //   script.src=`https://www.paypal.com/sdk/js?client-id=${data}`;
  //   script.async= true;
  //   script.onload= ()=>{
  //     setSdkReady(true)
  //   }document.body.appendChild(script)

  // },)

  // const { finalTotal, itemsTotal } = useContext(ProductContext);

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
      {/* <PayPalButton amount={finalTotal}></PayPalButton> */}
    </div>
  );
};

export default Payment;
