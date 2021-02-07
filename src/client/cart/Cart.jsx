import React, { useState, useEffect } from "react";
import "./cart.css";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../contexts/ProductContext";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import CheckoutSteps from "../checkout/CheckoutSteps";
import { FormattedMessage } from "react-intl";
import ResponsiveCart from "./ResponsiveCart";

const Cart = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <React.Fragment>
      {size < 780 ? (
        <ResponsiveCart />
      ) : (
        <div className="cart_container">
          <CheckoutSteps step1 />
          <ProductConsumer>
            {(val) => {
              const { cart } = val;
              if (cart.length > 0) {
                return (
                  <div className="cart-container">
                    <div>
                      <table className="cart-table">
                        <CartColumns />
                        <CartList val={val} />
                      </table>
                    </div>
                    <div className="cart-order-summary-wrapper">
                      <div className="cart-order-summary">
                        <h2 className="order-summary-text">
                          <FormattedMessage
                            id="app.shipping"
                            defaultMessage="Shipping"
                          />
                        </h2>
                        <table className="cart-total-table">
                          <CartTotals val={val} />
                        </table>
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
      )}
    </React.Fragment>
  );
};

export default Cart;
