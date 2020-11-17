import React, { useState } from "react";
import "./cart.css";

const CartTotals = ({ val }) => {
  const { cartTotal, finalTotal, selectedOption } = val;
  const { handleValueChange } = val;

  const onShippingChange = (event) => {
    handleValueChange(event.target.value);
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
          <form>
            <ul className="shipping-method-list">
              {" "}
              <li id="order-summery-text-right-list">
                <input
                  onChange={onShippingChange}
                  type="radio"
                  name="shipping-method"
                  value="Hungary"
                  checked={selectedOption === "Hungary"}
                />
                <label htmlFor="shipping-method">
                  Shipping in Hungary: free{" "}
                </label>
              </li>
              <li id="order-summery-text-right-list">
                <input
                  type="radio"
                  value="EU"
                  name="shipping-method"
                  checked={selectedOption === "EU"}
                  onChange={onShippingChange}
                />
                <label htmlFor="shipping-method">Shipping in EU: free </label>
              </li>
              <li id="order-summery-text-right-list">
                <input
                  onChange={onShippingChange}
                  type="radio"
                  name="shipping-method"
                  value="others"
                  checked={selectedOption === "others"}
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
