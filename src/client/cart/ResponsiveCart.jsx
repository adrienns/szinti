import React from "react";
import CartList from "./CartList";
import { ProductConsumer } from "../contexts/ProductContext";
import { FormattedMessage } from "react-intl";
import CartTotals from "./CartTotals";

const ResponsiveCart = () => {
  return (
    <div>
      <ProductConsumer>
        {(val) => {
          const { cart } = val;
          if (cart.length > 0) {
            return (
              <div className="responsive-cart-container">
                <CartList val={val} />
                <div className="responsive-cart-order-summary">
                  <h2 className="responsive-order-summary-text">
                    <FormattedMessage
                      id="app.shipping"
                      defaultMessage="Shipping"
                    />
                  </h2>
                  <CartTotals val={val} />
                </div>
              </div>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </div>
  );
};

export default ResponsiveCart;
