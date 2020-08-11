import React, { Component } from "react";
import "./cart.css";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../product_context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart_container">
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div className="cart-container">
                  <div>
                    <table className="cart-table">
                      <CartColumns />
                      <CartList value={value} />
                    </table>
                  </div>
                  <div className="cart-order-summary-wrapper">
                    <div className="cart-order-summary">
                      <h2 className="order-summary-text">Order Summary</h2>
                      <table className="cart-total-table">
                        <CartTotals value={value} />
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
    );
  }
}

export default Cart;
