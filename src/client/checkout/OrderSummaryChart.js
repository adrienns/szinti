import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { FormattedMessage } from "react-intl";

export const OrderSummaryChart = () => {
  const { finalTotal, selectedOption, cartTotal, itemsTotal } = useContext(
    ProductContext
  );
  return (
    <div>
      <h3 className="final-order-details">
        <FormattedMessage id="app.orderreview" defaultMessage="Order Review" />
      </h3>
      <div className="order-summary-and-payment">
        <div className="order-summary-box">
          <ul>
            <li>
              <FormattedMessage
                id="app.productprice"
                defaultMessage="Product price:"
              />
              <p></p> <p>{cartTotal} HUF</p>
            </li>
            <li>
              <p>
                {" "}
                <FormattedMessage
                  id="app.numberofproducts"
                  defaultMessage="Number of products:"
                />
              </p>{" "}
              <p>{itemsTotal} x</p>
            </li>
            <li>
              <p>
                <FormattedMessage
                  id="app.shippingcost"
                  defaultMessage="Shipping cost:"
                />
              </p>
              <p>
                {selectedOption === "Hungary" ? (
                  <FormattedMessage
                    id="app.freeshipping"
                    defaultMessage="Free Shipping:"
                  />
                ) : (
                  "100ft"
                )}
              </p>
            </li>

            <li>
              <p>
                <FormattedMessage
                  id="app.totalprice"
                  defaultMessage="Total price:"
                />{" "}
              </p>
              <p>{finalTotal} HUF</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryChart;
