import React from "react";
import "./cart.css";

export default function CartTotals({ value }) {
  const { cartTotal, clearCart, itemsTotal } = value;
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
          <ul className="shipping-method-list">
            {" "}
            <li id="order-summery-text-right-list">
              <input
                type="checkbox"
                name="shipping-method"
                value="shipping-Hungary"
              />
              <label for="shipping-method">Shipping in Hungary: free </label>
            </li>
            <li id="order-summery-text-right-list">
              <input type="checkbox" />
              <label for="shipping-method" value="shipping-EU">
                Shipping in EU: free{" "}
              </label>
            </li>
            <li id="order-summery-text-right-list">
              <input type="checkbox" />
              <label for="shipping-method" value="shipping-other">
                Shipping outside of EU: $40{" "}
              </label>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th className="order-summary-total">Total</th>
        <td className="order-summary-total" id="order-summery-text-right">
          total ${" "}
        </td>
      </tr>
    </tbody>
  );
}
