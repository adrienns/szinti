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
      <div className="cart-totals-table-inner-chart">
        <div>
          <FormattedMessage id="app.subtotal" defaultMessage="SubTotal" />
        </div>
        <div id="order-summary-text-right">
          {cartTotal.toLocaleString()} HUF
        </div>
      </div>
      <div className="cart-totals-table-inner-chart">
        <div className="cart-totals-shipping-text">
          <FormattedMessage id="app.shipping" defaultMessage="Shipping" />
        </div>
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
      </div>

      <div className="cart-totals-table-inner-chart">
        <div className="order-summary-total" id="order-summary-total-text-left">
          <FormattedMessage id="app.totalprice" defaultMessage="Total" />
        </div>
        <div className="order-summary-total" id="order-summary-text-right">
          {finalTotal.toLocaleString()} HUF
        </div>
      </div>
      <div className="continue-to-shipping-details-row">
        <Link to="/payment">
          <p
            className="continue-to-shipping-details-btn"
            disabled={finalTotal === 0}
          >
            <FormattedMessage id="app.continue" defaultMessage="Continue" />
          </p>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CartTotals;
