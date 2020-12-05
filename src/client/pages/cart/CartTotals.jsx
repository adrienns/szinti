import React from "react";

import "./cart.css";
import { Link } from "react-router-dom";

const CartTotals = ({ val, history }) => {
  const { cartTotal, finalTotal, selectedOption } = val;
  const { handleValueChange } = val;

  const onShippingChange = (event) => {
    const value = event.target.value;
    handleValueChange(value);
  };

  return (
    <React.Fragment>
      <tbody>
        <tr>
          <th className="cart-totals-table-inner-chart">Subtotal</th>
          <td className="cart-totals-table-inner-chart">
            <span id="order-summery-text-right">{cartTotal} HUF</span>
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
                  <label htmlFor="shipping-method">to Hungary: free </label>
                </li>
                <li id="order-summery-text-right-list">
                  <input
                    type="radio"
                    value="EU"
                    name="shipping-method"
                    checked={selectedOption === "EU"}
                    onChange={onShippingChange}
                  />
                  <label htmlFor="shipping-method">to EU: free </label>
                </li>
                <li id="order-summery-text-right-list">
                  <input
                    onChange={onShippingChange}
                    type="radio"
                    name="shipping-method"
                    value="others"
                    checked={selectedOption === "others"}
                  />
                  <label htmlFor="shipping-method">outside of EU: $40 </label>
                </li>
              </ul>
            </form>
          </td>
        </tr>
        <tr>
          <th
            className="order-summary-total"
            id="order-summary-total-text-left"
          >
            Total
          </th>
          <td className="order-summary-total" id="order-summery-text-right">
            {finalTotal} HUF
          </td>
        </tr>
      </tbody>
      <Link to="/checkout">
        <button disabled={finalTotal === 0}>Continue</button>
      </Link>
    </React.Fragment>
  );
};

export default CartTotals;
