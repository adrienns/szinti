// import React, { useRef, useEffect, useState, useContext } from "react";
// // import { ProductContext } from "../contexts/ProductContext";

// export const PayPalBtn = ({ finalTotal }) => {
// const paypal = useRef();

// useEffect(() => {
//   window.paypal
//     .Buttons({
//       createOrder: (data, action, err) => {
//         return actions.order.create({
//           intent: "CAPTURE",
//           purchase_units: [
//             {
//               description: "Whatever",
//               amount: {
//                 currency_code: "HUF",
//                 value: { finalTotal },
//               },
//             },
//           ],
//         });
//       },
//       onApprove: async (data, actions) => {
//         const order = await actions.order.capture();
//         console.log(+order);
//       },
//       onError: (err) => console.log(err),
//     })
//     .render(paypal.current);
// }, []);

//   return (
//     <div>
//       <div>Payment</div>
//       <h5>Please choose your payment method</h5>
//     </div>
//   );
// };

// export default PayPalBtn;
