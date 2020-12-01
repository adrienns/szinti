import React, { useState } from "react";
import ShippingDetailsForm from "./ShippingDetailsForm";
import "./Checkout.css";

const ToggleDeliveryAddress = ({ handleRadio, radio }) => {
  return (
    <div>
      <form>
        <ul className="delivery-addresses">
          <li id="default-delivery-address">
            <input
              id="default_address"
              onChange={handleRadio}
              type="radio"
              name="default address"
              value="default address"
              checked={radio === "default address"}
            />
            <label id="default-address" htmlFor="default_address">
              Default Address{" "}
            </label>
          </li>
          <li id="alternative-delivery-address">
            <input
              id="alternative_address"
              type="radio"
              value="alternative address"
              name="alternative address"
              checked={radio === "alternative address"}
              onChange={handleRadio}
            />{" "}
            <label htmlFor="alternative_address"> Alternative Address</label>
          </li>
        </ul>
      </form>
      {radio === "alternative address" ? <div></div> : null}
    </div>
  );
};

export default ToggleDeliveryAddress;
