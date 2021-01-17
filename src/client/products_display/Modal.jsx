import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./modal.css";
import { ProductContext } from "../contexts/ProductContext";
import { FormattedMessage } from "react-intl";

const Modal = () => {
  const {
    modalOpen,
    closeModal,
    incrementCartProduct,
    handleSingleProduct,
    modalProduct,
    openSideModal,
  } = useContext(ProductContext);

  const { id, name, firstImage, price, material } = modalProduct;

  return modalOpen ? (
    <div className="modal-container">
      <div className="image-container" onClick={() => handleSingleProduct(id)}>
        <div className="modal-coloumns">
          <div className="modal-image-container">
            <img className="modal-image" src={firstImage} alt="Product" />
          </div>

          <div className="modal-row-container">
            <div>
              <span className="exit-btn-container" onClick={closeModal}>
                <p className="exit-btn"></p>
              </span>
            </div>
            <div id="modal-row">
              <h2 className="item-info" id="modal-item-name">
                {name}
              </h2>
              <h4 className="item-info"> {material}</h4>

              <h4 className="item-info">{price} HUF</h4>

              <div>
                <button
                  className="modal-btn"
                  onClick={() => {
                    incrementCartProduct(id);
                    openSideModal();
                    closeModal();
                  }}
                >
                  <FormattedMessage
                    id="app.addtoshoppingbag"
                    defaultMessage="Add to Shopping Bag"
                  />
                </button>
              </div>

              <div>
                <Link to="/cart">
                  <button
                    className="go-to-cart-btn"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    Go to Your Cart
                  </button>
                </Link>
                <Link to={`/organicproduct/${name}`}>
                  <div
                    className="more-details-text"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    <span id="more-details-text"> More details</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default Modal;
