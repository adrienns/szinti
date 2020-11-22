import React, { useState } from "react";

import "./ShippingDetailsForm.css";

const ShippingAddressForm = () => {
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

    //redirect user to payment screen
    // props.history.push("/payment");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  console.log(values);
  return (
    <div className="shipping-details-form-container">
      <form className="shipping-details-form" onSubmit={handleSubmit}>
        <div className="shipping-details-form-row">
          <label htmlFor="firstName">First name</label>
          <input
            name="address"
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
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
          />{" "}
        </div>
        <div className="shipping-details-form-row">
          <label htmlFor="country">Country</label>
          <input
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
        <button>Continue</button>
      </form>
    </div>
  );
};

export default ShippingAddressForm;
