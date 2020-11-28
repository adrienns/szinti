import React, { Component } from "react";
import "./cart.css";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../contexts/ProductContext";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = (props) => {
  return (
    <div>
      <div className="responsive-cart-wrapper">
        <div>
          <div className="responsive-your-cart-text">
            Your Shopping Bagggerawawr
          </div>
        </div>

        <ProductConsumer>
          {(val) => {
            const { cart } = val;
            if (cart.length > 0) {
              return (
                <div className="responsive-cart-container">
                  <table>
                    <CartList val={val} />
                  </table>
                  <div className="responsive-cart-order-summary-wrapper">
                    <div className="responsive-cart-order-summary">
                      <h2 className="responsive-order-summary-text">
                        Order Summary
                      </h2>
                      <table className="responsive-cart-total-table">
                        <CartTotals val={val} history={props.history} />
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
      <div className="cart_container">
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
                      <h2 className="order-summary-text">Order Summary</h2>
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
    </div>
  );
};

export default Cart;
