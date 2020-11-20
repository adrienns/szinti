import React, { useState } from "react";

import "./ShippingDetailsForm.css";

const ShippingAddressForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    phone: "",
    zipcode: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };
  return (
    <div className="shipping-details-form-container">
      <h2>Billing address</h2>
      <form className="shipping-details-form" onSubmit={handleSubmit}>
        <div className="shipping-details-form-row">
          <label htmlFor="firstName">First name:</label>
          <input
            name="address"
            value={values.firstname}
            onChange={handleOnChange}
            type="text"
            required
          />
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="lastName">Last name</label>
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleOnChange}
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="country">Country</label>
          <input
            value={values.country}
            onChange={handleOnChange}
            type="text"
            required
          />
        </div>
        <div className="shipping-details-form-row">
          <label name="address" htmlFor="address">
            Address:
          </label>
          <input
            value={values.address}
            onChange={handleOnChange}
            type="text"
            required
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="city">City</label>
          <input
            name="city"
            value={values.city}
            onChange={handleOnChange}
            type="text"
            required
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="zipcode">Zip code</label>
          <input
            name="zipcode"
            value={values.zipcode}
            onChange={handleOnChange}
            type="text"
            required
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            value={values.phone}
            onChange={handleOnChange}
            type="text"
            required
          />{" "}
        </div>
        <button>Continue</button>
      </form>
    </div>
  );
};

export default ShippingAddressForm;
