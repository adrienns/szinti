import React, { useState } from "react";
import "./cart.css";

const CartTotals = ({ val }) => {
  const [radio, setRadio] = useState("Hungary");
  const { cartTotal, clearCart } = val;
  const [totalwithShipping, setFinalTotal] = useState(cartTotal);

  const handleRadio = (event) => {
    const value = event.target.value;
    setRadio(value);
  };

  const handleShippingCost = (event) => {
    const value = event.target.value;
    let shippingCost = 0;
    if (value === "others") {
      shippingCost = 1000;
      return shippingCost;
    }
    if (value === "EU") {
      shippingCost = 100;
      return shippingCost;
    }

    return shippingCost;
  };

  const CalculateTotalswithShipping = (event) => {
    const shippingCost = handleShippingCost(event);
    const newTotalwithShipping = cartTotal + shippingCost;
    setFinalTotal(newTotalwithShipping);
  };

  return (
    <tbody>
      <tr>
        <th className="cart-totals-table-inner-chart">Subtotal</th>
        <td className="cart-totals-table-inner-chart">
          <span id="order-summery-text-right">{cartTotal} $</span>
        </td>
      </tr>
      <tr>
        <th className="cart-totals-table-inner-chart">Shipping</th>
        <td className="cart-totals-table-inner-chart">
          {" "}
          <form onChange={(event) => CalculateTotalswithShipping(event)}>
            <ul className="shipping-method-list">
              {" "}
              <li id="order-summery-text-right-list">
                <input
                  onChange={(event) => handleRadio(event)}
                  type="radio"
                  name="shipping-method"
                  value="Hungary"
                  checked={radio === "Hungary"}
                />
                <label htmlFor="shipping-method">
                  Shipping in Hungary: free{" "}
                </label>
              </li>
              <li id="order-summery-text-right-list">
                <input
                  type="radio"
                  value="EU"
                  checked={radio === "EU"}
                  onChange={(event) => handleRadio(event)}
                />
                <label htmlFor="shipping-method">Shipping in EU: free </label>
              </li>
              <li id="order-summery-text-right-list">
                <input
                  onChange={(event) => handleRadio(event)}
                  type="radio"
                  value="others"
                  checked={radio === "others"}
                />
                <label htmlFor="shipping-method">
                  Shipping outside of EU: $40{" "}
                </label>
              </li>
            </ul>
          </form>
        </td>
      </tr>
      <tr>
        <th className="order-summary-total">Total</th>
        <td className="order-summary-total" id="order-summery-text-right">
          {totalwithShipping}$
        </td>
      </tr>
    </tbody>
  );
};

export default CartTotals;
