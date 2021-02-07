import React from "react";
import { ProductConsumer } from "../contexts/ProductContext";
import { FormattedMessage } from "react-intl";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";
import "./ResponsiveCart.css";
import CheckoutSteps from "../checkout/CheckoutSteps";
import ResponsiveCartList from "./ResponsiveCartList";

const ResponsiveCart = () => {
  return (
    <div>
      <ProductConsumer>
        {(val) => {
          const { cart } = val;
          if (cart.length > 0) {
            return (
              <div className="responsive-cart-container">
                <div className="responsive-cart-checkoutsteps">
                  <CheckoutSteps step1 />
                </div>
                <div className="responsive-cart-list-container">
                  <ResponsiveCartList val={val} />
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
