import React, { useContext, useState } from "react";
import "./CartModal.css";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { ProductContext } from "../../product_context";

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

const CartModal = () => {
  // const [opacityBackground, setOpacityBackGround] = useState(false);

  const {
    cart,
    isSideModalOpen,
    closeSideModal,
    cartTotal,
    itemsTotal,
  } = useContext(ProductContext);

  const items = createCartItems(cart);

  return (
    <div>
      <SlidingPane
        className="cart-modal-column"
        overlayClassName="cart-modal-container"
        isOpen={isSideModalOpen}
        hideHeader={true}
        width="390px"
        onRequestClose={() => {
          closeSideModal();
        }}
      >
        {/* {opacityBackground && <div className="cart-modal-background" />}
      <CSSTransition
        in={sideModalOpen}
        unmountOnExit
        timeout={{
          enter: 1000,
          exit: 1000,
        }}
        classNames="transition"
        onEntered={() => setOpacityBackGround(true)}
        onExiting={() => setOpacityBackGround(false)}
      > */}

        {/* <div>
          <div className="cart-modal-container"> */}
        <div className="cart-modal-column">
          <div className="cart-modal-upper-row">
            <div className="your-cart-text">
              Your Shopping Bag ({itemsTotal} items)
            </div>

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
            <div className="total-shipping-fee-container">
              <div className="modal-total-cart-wrapper">
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
                  closeSideModal();
                }}
              >
                Go To Payment
              </div>
            </Link>
          </div>
        </div>
        {/* </div>
        </div> */}
        {/* </CSSTransition> */}
      </SlidingPane>
    </div>
  );
};

export default CartModal;
