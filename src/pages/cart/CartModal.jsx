import React, { useContext, useState } from "react";
import "./CartModal.css";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import { ProductContext } from "../../contexts/ProductContext";

const CartModal = () => {
  const {
    cart,
    isSideModalOpen,
    closeSideModal,
    cartTotal,
    itemsTotal,
  } = useContext(ProductContext);

  //create a cart item with a correct price when material is added

  const createCartItems = (cart) => {
    let cartItems = [];
    cart.forEach((item) => {
      if (item.count.gold > 0) {
        cartItems.push({
          id: item.id,
          material: "gold",
          firstImage: item.firstImage,
          total: item.total.gold,
          count: item.count.gold,
          name: item.name,
        });
      }
      if (item.count.silver > 0) {
        cartItems.push({
          id: item.id,
          material: "silver",
          firstImage: item.firstImage,
          total: item.total.silver,
          count: item.count.silver,
          name: item.name,
        });
      }
      if (item.count.bronze > 0) {
        cartItems.push({
          id: item.id,
          material: "bronze",
          firstImage: item.firstImage,
          total: item.total.bronze,
          count: item.count.bronze,
          name: item.name,
        });
      }
    });
    return cartItems;
  };

  const items = createCartItems(cart);

  return (
    <div>
      <SlidingPane
        className="cart-modal-column"
        overlayClassName="cart-modal-container"
        isOpen={isSideModalOpen}
        hideHeader={true}
        width="342px"
        onRequestClose={() => {
          closeSideModal();
        }}
      >
        <div className="cart-modal-column">
          <div className="cart-modal-upper-row">
            {itemsTotal === 0 ? (
              <p className="empty-shopping-cart-text">
                Your shopping cart is currently empty
              </p>
            ) : (
              <div className="your-cart-text">
                Your Shopping Bag ({itemsTotal} items)
              </div>
            )}

            <span
              className="exit-cart-modal-btn"
              onClick={() => {
                closeSideModal();
              }}
            ></span>
          </div>

          <div className="cart-modal-items-box">
            <div>
              {items.map((item) => {
                return (
                  <div
                    className="cart-modal-item"
                    key={`${item.id} ${item.material}`}
                  >
                    <img className="cart-modal-img" src={item.firstImage} />
                    <div className="cart-modal-product-info">
                      <div className="cart-modal-name">
                        {item.name} x {item.count}
                      </div>
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
            <div className="cart-modal-subtotal-container">
              <div className="modal-total-cart-wrapper">
                <div> SubTotal:</div>
                <div> {cartTotal}$</div>
              </div>
              <div className="modal-total-cart-wrapper">
                <h5>Including V.A.T </h5>
              </div>
            </div>
            <div>
              <Link to="/cart">
                <div
                  className="cart-modal-btn"
                  id="cart-modal-payment-btn"
                  onClick={() => {
                    closeSideModal();
                  }}
                >
                  Go To Payment
                </div>
              </Link>

              <Link to="/necklaces">
                <div
                  className="cart-modal-btn"
                  id="cart-modal-continue-shopping-btn"
                  onClick={() => {
                    closeSideModal();
                  }}
                >
                  Continue shopping
                </div>
              </Link>
            </div>
          </div>
        </div>
      </SlidingPane>
    </div>
  );
};

export default CartModal;
