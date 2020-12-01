import React from "react";

const GetShippingDetails = (cartData) => {
  const { shippingDetails } = cartData;
  const addresses = shippingDetails.map((el) => el);
  const [{ billingAddress }] = addresses;
  const convertedBillingAddress = {
    // addresseeName: `${billingAddress.firstName} ${billingAddress.lastName}`,
    // email: billingAddress.email,
    city: billingAddress.city,
    // country: billingAddress.country,
    // zip: billingAddress.zipcode,
    // phone: billingAddress.phone,
  };
  return convertedBillingAddress;
};
export default GetShippingDetails;
