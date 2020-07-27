import React, { useContext, useState } from "react";
import "./CartModal.css";

import { CSSTransition } from "react-transition-group";

import { ProductContext } from "../../product_context";

const CartModal = () => {
  const {
    cart,
    cartModalOpen,
    closeCartModal,
    cartTotal,
    itemsTotal,
  } = useContext(ProductContext);
  debugger;

  return cartModalOpen ? (
    <div className="cart-modal-container">
      <CSSTransition
        timeout={{ enter: 500, exit: 100 }}
        classNames="transition"
      >
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
                  <div className="cart-modal-item">
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
            <div> Total: {cartTotal}$</div>
            <div>Shipping fee: </div>
            <div className="cart-modal-payment-btn">Go To Payment</div>
          </div>
        </div>
      </CSSTransition>
    </div>
  ) : (
    <div />
  );
};

export default CartModal;
