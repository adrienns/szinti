import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const CartTotals = ({ val }) => {
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
          <th className="cart-totals-table-inner-chart">
            <FormattedMessage id="app.subtotal" defaultMessage="SubTotal" />
          </th>
          <td className="cart-totals-table-inner-chart">
            <span id="order-summary-text-right">
              {cartTotal.toLocaleString()} HUF
            </span>
          </td>
        </tr>
        <tr>
          <th className="cart-totals-table-inner-chart">
            <FormattedMessage id="app.shipping" defaultMessage="Shipping" />
          </th>
          <td className="cart-totals-table-inner-chart">
            <form>
              <ul className="shipping-method-list">
                <li id="order-summary-text-right-list">
                  <input
                    onChange={onShippingChange}
                    type="radio"
                    name="shipping-method"
                    value="pickup"
                    checked={selectedOption === "pickup"}
                  />
                  <label htmlFor="shipping-method">
                    {" "}
                    <FormattedMessage
                      id="app.pickupfree"
                      defaultMessage="pick up: free"
                    />
                  </label>
                </li>
                <li id="order-summary-text-right-list">
                  <input
                    onChange={onShippingChange}
                    type="radio"
                    name="shipping-method"
                    value="Hungary"
                    checked={selectedOption === "Hungary"}
                  />
                  <label htmlFor="shipping-method">
                    {" "}
                    <FormattedMessage
                      id="app.tohungary"
                      defaultMessage="to Hungary: 1,500 FT"
                    />
                  </label>
                </li>
                <li id="order-summary-text-right-list">
                  <input
                    type="radio"
                    value="EU"
                    name="shipping-method"
                    checked={selectedOption === "EU"}
                    onChange={onShippingChange}
                  />
                  <label htmlFor="shipping-method">
                    {" "}
                    <FormattedMessage
                      id="app.toeu"
                      defaultMessage="to EU countries: 2,500 FT"
                    />
                  </label>
                </li>
              </ul>
            </form>
          </td>
        </tr>
        <tr className="order-summary-total-row">
          <th
            className="order-summary-total"
            id="order-summary-total-text-left"
          >
            <FormattedMessage id="app.totalprice" defaultMessage="Total" />
          </th>
          <td className="order-summary-total" id="order-summary-text-right">
            {finalTotal.toLocaleString()} HUF
          </td>
        </tr>
        <tr className="continue-to-shipping-details-row">
          <td colSpan="2">
            <Link to="/payment">
              <p
                className="continue-to-shipping-details-btn"
                disabled={finalTotal === 0}
              >
                <FormattedMessage id="app.continue" defaultMessage="Continue" />
              </p>
            </Link>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default CartTotals;
