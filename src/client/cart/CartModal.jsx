import React, { useContext } from "react";
import "./CartModal.css";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { FormattedMessage } from "react-intl";
import { ProductContext } from "../contexts/ProductContext";
import { WrapperContext } from "../Wrapper";
import { createCartItems } from "../cart/CreateCartItems";

const CartModal = () => {
  const {
    cart,
    isSideModalOpen,
    closeSideModal,
    cartTotal,
    itemsTotal,
  } = useContext(ProductContext);

  const { locale } = useContext(WrapperContext);

  //create a cart item with a correct price when material is added

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
                <FormattedMessage
                  id="app.yourshoppingcartisempty"
                  defaultMessage="Your Shopping Cart is empty"
                />
              </p>
            ) : (
              <div className="your-cart-text">
                <FormattedMessage
                  id="app.yourshoppingcart"
                  defaultMessage="Your Shopping Cart"
                />
                ({itemsTotal}{" "}
                <FormattedMessage id="app.items" defaultMessage="items" />)
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
            {items.map((item) => {
              return (
                <div className="cart-modal-item" key={item.id}>
                  <img className="cart-modal-img" src={item.firstImage} />
                  <div className="cart-modal-product-info">
                    <div className="cart-modal-name">
                      {locale == "en" ? item.name : item.name_hun} x{" "}
                      {item.count}
                    </div>
                    <div className="cart-modal-price">
                      {item.total.toLocaleString()} HUF
                    </div>
                    <br />
                    <div className="cart-modal-material">
                      <FormattedMessage
                        id="app.material"
                        defaultMessage="Material"
                      />
                      {locale == "en" ? item.material : item.material_hun}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {itemsTotal == 0 ? null : (
          <div className="cart-modal-payment-summary">
            <div className="cart-modal-subtotal-container">
              <div className="modal-total-cart-wrapper">
                <div>
                  <FormattedMessage
                    id="app.subtotal"
                    defaultMessage="SubTotal"
                  />
                </div>
                <div> {cartTotal.toLocaleString()} HUF</div>
              </div>
              <div className="modal-total-cart-wrapper">
                <h5>
                  {" "}
                  <FormattedMessage
                    id="app.includingvat"
                    defaultMessage="Including V.A.T"
                  />{" "}
                </h5>
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
                  <FormattedMessage
                    id="app.gotopayment"
                    defaultMessage="go to payment"
                  />
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
                  <FormattedMessage
                    id="app.continueshopping"
                    defaultMessage="continue shopping"
                  />
                </div>
              </Link>
            </div>
          </div>
        )}
      </SlidingPane>
    </div>
  );
};

export default CartModal;
