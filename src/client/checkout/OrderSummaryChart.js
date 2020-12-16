import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export const OrderSummaryChart = () => {
  const {
    alternativeAddress,
    finalTotal,
    selectedOption,
    cartTotal,
  } = useContext(ProductContext);
  return (
    <div>
      <h3 className="final-order-details">Order details</h3>
      <div className="order-summary-and-payment-container">
        <div className="order-summary-and-payment">
          <div className="order-summary-column1">
            <h4 className="order-review-shipping-text">Shipping details:</h4>
            <ul>
              <li>
                {alternativeAddress.firstName} {alternativeAddress.lastName}
              </li>
              <li>
                {alternativeAddress.zipcode}
                {alternativeAddress.city} {alternativeAddress.address}
              </li>
              <li>{alternativeAddress.email}</li>
              <li>{alternativeAddress.phone}</li>
              <li></li>
            </ul>
          </div>
          <div className="order-summary-column2">
            <h4 className="order-review-shipping-text">Order Review:</h4>
            <ul>
              <li>Products price: {cartTotal}</li>
              <li>
                Shipping cost:{" "}
                {selectedOption === "Hungary" ? "free shipping" : "100ft"}
              </li>

              <li>Total Price: {finalTotal}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryChart;
