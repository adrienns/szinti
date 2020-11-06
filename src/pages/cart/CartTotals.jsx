import React, { useState } from "react";
import "./cart.css";

const CartTotals = ({ val }) => {
  const [radio, setRadio] = useState("Hungary");
  const { cartTotal, finalTotal } = val;
  const { updateWithShippingCost } = val;

  const handleRadio = (event) => {
    const value = event.target.value;
    // props.handleRadio()??????????? how to pass props back to contect api;
    setRadio(value);
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
          <form onChange={(event) => updateWithShippingCost(event)}>
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
          {finalTotal}$
        </td>
      </tr>
    </tbody>
  );
};

export default CartTotals;
