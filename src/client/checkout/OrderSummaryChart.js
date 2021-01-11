import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export const OrderSummaryChart = () => {
  const { finalTotal, selectedOption, cartTotal, itemsTotal } = useContext(
    ProductContext
  );
  return (
    <div>
      <h3 className="final-order-details">Order review</h3>
      <div className="order-summary-and-payment">
        <div className="order-summary-box">
          <ul>
            <li>
              Products price:<p></p> <p>{cartTotal} HUF</p>
            </li>
            <li>
              <p>Number of products:</p> <p>{itemsTotal} x</p>
            </li>
            <li>
              <p cla>Shipping cost: </p>
              <p>{selectedOption === "Hungary" ? "free shipping" : "100ft"}</p>
            </li>

            <li>
              <p>Total Price: </p>
              <p>{finalTotal} HUF</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryChart;
