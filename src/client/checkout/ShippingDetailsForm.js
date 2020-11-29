import React, { useState } from "react";
import axios from "axios";
import "./ShippingDetailsForm.css";

const ShippingDetailsForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    city: "",
    zipcode: "",
    email: "",
    country: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="shipping-details-form-container">
      <form className="shipping-details-form" onSubmit={handleSubmit}>
        <div className="shipping-details-form-row">
          <label htmlFor="firstName">First name</label>
          <input
            name="firstName"
            value={values.firstname}
            onChange={handleChange}
            type="text"
            required
          />
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="lastName">Last name</label>
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            required
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="country">Country</label>
          <input
            required
            value={values.country}
            onChange={handleChange}
            name="country"
            type="text"
            required
          />
        </div>
        <div className="shipping-details-form-row">
          <label name="address" htmlFor="address">
            Address
          </label>
          <input
            value={values.address}
            onChange={handleChange}
            type="text"
            required
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="city">City</label>
          <input
            name="city"
            value={values.city}
            onChange={handleChange}
            type="text"
            required
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="zipcode">Zip code</label>
          <input
            name="zipcode"
            value={values.zipcode}
            onChange={handleChange}
            type="text"
            required
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            type="text"
            required
          />{" "}
        </div>
      </form>
    </div>
  );
};

export default ShippingDetailsForm;
