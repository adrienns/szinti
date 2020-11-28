import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./modal.css";
import { ProductContext } from "../contexts/ProductContext";
import { MaterialContext } from "../contexts/MaterialContext";
import MaterialDropDown from "../single_product_page/MaterialDropDown";

const Modal = () => {
  const { material } = useContext(MaterialContext);

  const {
    modalOpen,
    newPricewithMaterial,
    closeModal,
    incrementCartProduct,
    handleSingleProduct,
    modalProduct,
    openSideModal,
  } = useContext(ProductContext);

  const { id, name, firstImage, price } = modalProduct;

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
              <div>
                <h3 className="item-info">
                  {name} {material}
                </h3>
              </div>

              <div>
                <h3 className="item-info">${price + newPricewithMaterial}</h3>
              </div>
              <div>
                <MaterialDropDown />
              </div>
              <div>
                <button
                  className="modal-btn"
                  disabled={material === "select" ? true : false}
                  onClick={() => {
                    incrementCartProduct(id, material);
                    openSideModal();
                    closeModal();
                  }}
                >
                  Add To Shopping Cart
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
                    More details
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
