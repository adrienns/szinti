import React, { useRef, useEffect } from "react";

export const Payment = () => {
  const [sdkReady, setSdkReady] = useState(false);
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, action, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Whatever",
                amount: {
                  currency_code: "HUF",
                  value: 10.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(+order);
        },
        onError: (err) => console.log(err),
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div>Payment</div>
      <h5>Please choose your payment method</h5>
      <div ref={paypal}></div>
    </div>
  );
};

export default Payment;
