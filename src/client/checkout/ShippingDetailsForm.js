import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./ShippingDetailsForm.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import ToggleDeliveryAddress from "./ToggleDeliveryAddress";
import AlternativeAddress from "./AlternativeAddress";

const ShippingDetailsForm = () => {
  const {
    sendFinalPaymentDetails,
    handleBillingAddress,
    handleAlternativeAddress,
  } = useContext(ProductContext);
  const [radio, setRadio] = useState("default address");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    zipcode: "",
    email: "",
    country: "",
    phone: "",
  });
  const [alternativeShippingAddress, setAlternativeShippingAddress] = useState({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    zipcode: "",
    email: "",
    country: "",
    phone: "",
  });

  //copy form if billing address is identical to shipping address

  const handleRadio = (event) => {
    setRadio(event.target.value);
  };

  const copyForm = () => {
    if (radio === "default address") {
      return setAlternativeShippingAddress({ ...values });
    } else {
      return setAlternativeShippingAddress({ ...alternativeShippingAddress });
    }
  };
  useEffect(() => {
    copyForm();
  }, [radio]);

  sendFinalPaymentDetails;
  const handleonClick = () => {
    sendFinalPaymentDetails();
  };

  useEffect(() => {
    handleBillingAddress(values);
  }, [values]);

  const onBillingAddressChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    handleAlternativeAddress(alternativeShippingAddress);
  }, [alternativeShippingAddress]);

  const onAlternativeAddressChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAlternativeShippingAddress({
      ...alternativeShippingAddress,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="shipping-details-form-container">
        <form className="shipping-details-form" onSubmit={handleSubmit}>
          <div className="shipping-details-form-row">
            <h4 className="address-text">Billing Address</h4>
            <label htmlFor="firstName" id="billing-address-firstname-text">
              First name
            </label>
            <input
              name="firstName"
              value={values.firstName}
              onChange={onBillingAddressChange}
              type="text"
              required
            />
          </div>
          <div className="shipping-details-form-row">
            <label htmlFor="lastName">Last name</label>
            <input
              name="lastName"
              value={values.lastName}
              onChange={onBillingAddressChange}
              required
            />{" "}
          </div>
          <div className="shipping-details-form-row">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={values.email}
              onChange={onBillingAddressChange}
              required
            />{" "}
          </div>
          <div className="shipping-details-form-row">
            <label htmlFor="country">Country</label>
            <input
              required
              value={values.country}
              onChange={onBillingAddressChange}
              name="country"
              type="text"
              required
            />
          </div>
          <div className="shipping-details-form-row">
            <label htmlFor="address">Address</label>
            <input
              name="address"
              value={values.address}
              onChange={onBillingAddressChange}
              type="text"
              required
            />{" "}
          </div>
          <div className="shipping-details-form-row">
            <label htmlFor="city">City</label>
            <input
              name="city"
              value={values.city}
              onChange={onBillingAddressChange}
              type="text"
              required
            />{" "}
          </div>
          <div className="shipping-details-form-row">
            <label htmlFor="zipcode">Zip code</label>
            <input
              name="zipcode"
              value={values.zipcode}
              onChange={onBillingAddressChange}
              type="text"
              required
            />{" "}
          </div>
          <div className="shipping-details-form-row">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              value={values.phone}
              onChange={onBillingAddressChange}
              type="text"
              required
            />{" "}
          </div>
          {/* second form        */}
          <div className="continue-payment-btn-container">
            {" "}
            <Link to="/payment">
              <button
                onClick={handleonClick}
                onSubmit={handleSubmit}
                className="continue-payment-btn"
                type="submit"
              >
                Continue to credit card payment
              </button>
            </Link>
          </div>
        </form>

        <div>
          <h4 id="delivery-address-text" className="address-text">
            Delivery Address
          </h4>
          <ToggleDeliveryAddress handleRadio={handleRadio} radio={radio} />

          {radio === "alternative address" ? (
            <AlternativeAddress
              onAlternativeAddressChange={onAlternativeAddressChange}
              alternativeShippingAddress={alternativeShippingAddress}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ShippingDetailsForm;
