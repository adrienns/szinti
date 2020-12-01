import React from "react";

const AlternativeAddress = ({
  onAlternativeAddressChange,
  alternativeShippingAddress,
}) => {
  return (
    <div>
      <form>
        <div className="alternative-address-details-form-row">
          <label htmlFor="firstName">First name</label>
          <input
            name="firstName"
            value={alternativeShippingAddress.firstName}
            onChange={onAlternativeAddressChange}
            type="text"
            required
          />
        </div>
        <div className="alternative-address-details-form-row">
          <label htmlFor="lastName">Last name</label>
          <input
            name="lastName"
            value={alternativeShippingAddress.lastName}
            onChange={onAlternativeAddressChange}
            required
          />{" "}
        </div>
        <div className="alternative-address-details-form-row">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={alternativeShippingAddress.email}
            onChange={onAlternativeAddressChange}
            required
          />{" "}
        </div>
        <div className="alternative-address-details-form-row">
          <label htmlFor="country">Country</label>
          <input
            required
            value={alternativeShippingAddress.country}
            onChange={onAlternativeAddressChange}
            name="country"
            type="text"
            required
          />
        </div>
        <div className="alternative-address-details-form-row">
          <label htmlFor="address">Address</label>
          <input
            name="address"
            value={alternativeShippingAddress.address}
            onChange={onAlternativeAddressChange}
            type="text"
            required
          />{" "}
        </div>
        <div className="alternative-address-details-form-row">
          <label htmlFor="city">City</label>
          <input
            name="city"
            value={alternativeShippingAddress.city}
            onChange={onAlternativeAddressChange}
            type="text"
            required
          />{" "}
        </div>
        <div className="alternative-address-details-form-row">
          <label htmlFor="zipcode">Zip code</label>
          <input
            name="zipcode"
            value={alternativeShippingAddress.zipcode}
            onChange={onAlternativeAddressChange}
            type="text"
            required
          />{" "}
        </div>
        <div className="alternative-address-details-form-row">
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            value={alternativeShippingAddress.phone}
            onChange={onAlternativeAddressChange}
            type="text"
            required
          />{" "}
        </div>
      </form>
    </div>
  );
};

export default AlternativeAddress;
