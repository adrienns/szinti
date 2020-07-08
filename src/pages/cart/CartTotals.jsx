import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartTotal, clearCart, itemsTotal } = value;
  return (
    <tfoot className="cart-total-countainer" colspan="5">
      <tr className="cart-total-row">
        <td>
          <Link to="/">
            <span className="clear-cart-btn" onClick={() => clearCart()}>
              Clear Cart
            </span>
          </Link>
        </td>
        <td></td>
        <td></td>
        <td></td>

        <td>
          <strong className="cart-total">Total: {cartTotal}$</strong>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="payment-btn">
          <span id="payment-btn">payment</span>
        </td>
      </tr>
    </tfoot>
  );
}
