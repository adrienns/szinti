import React, { useContext, useState } from "react";
import "./CartModal.css";
import { Link } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import { ProductContext } from "../../product_context";

const CartModal = () => {
  const {
    cart,
    cartModalOpen,
    closeCartModal,
    cartTotal,
    itemsTotal,
  } = useContext(ProductContext);

  return (
    <CSSTransition
      in={cartModalOpen}
      unmountOnExit
      timeout={{
        enter: 1000,
        exit: 1000,
      }}
      classNames="transition"
    >
      <div className="cart-modal-container">
        <div className="cart-modal-column">
          <div className="cart-modal-upper-row">
            <div className="your-cart-text">
              Your Shopping Bag ({itemsTotal} items)
            </div>

            <span
              className="exit-cart-modal-btn"
              onClick={() => {
                closeCartModal();
              }}
            ></span>
          </div>

          <div className="cart-modal-items-box">
            <div>
              {cart.map((item) => {
                return (
                  <div className="cart-modal-item" key={item.id}>
                    <img className="cart-modal-img" src={item.firstImage} />
                    <div className="cart-modal-product-info">
                      <div className="cart-modal-name">{item.name}</div>
                      <div className="cart-modal-price"> {item.total}$</div>
                      <br />
                      <div className="cart-modal-material">
                        {" "}
                        Material: {item.material}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cart-modal-payment-summary">
            <div>
              <div className="total-shipping-fee-container">
                <div className="modal-total-cart-wrapper">
                  {" "}
                  <div> Total:</div>
                  <div> {cartTotal}$</div>
                </div>
                <div className="modal-shipping-fee-cart-wrapper">
                  <div>Shipping fee: </div>
                  <div>the fee</div>
                </div>
              </div>
              <Link to="/cart">
                <div
                  className="cart-modal-payment-btn"
                  onClick={() => {
                    closeCartModal();
                  }}
                >
                  Go To Payment
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default CartModal;
