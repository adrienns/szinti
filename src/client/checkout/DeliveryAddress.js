import React, { useState } from "react";
import ShippingDetailsForm from "./ShippingDetailsForm";

const DeliveryAddress = () => {
  const [radio, setRadio] = useState("default address");

  const handleRadio = (event) => {
    setRadio(event.target.value);
  };

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
            <label htmlFor="default_address">Default Address</label>
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
            <label htmlFor="alternative_address">Alternative Address</label>
          </li>
        </ul>
      </form>
      {radio === "alternative address" ? (
        <div>
          <ShippingDetailsForm />
        </div>
      ) : null}
    </div>
  );
};

export default DeliveryAddress;
