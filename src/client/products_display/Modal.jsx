import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./modal.css";
import { ProductContext } from "../contexts/ProductContext";

const Modal = () => {
  const [material, SetMaterial] = useState("select");

  const {
    modalOpen,
    newPricewithMaterial,
    changePriceandMaterial,
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
                <form>
                  <label htmlFor="materials">
                    <div className="item-info">Select Material:</div>
                    <select
                      value={material}
                      onClick={(event) =>
                        changePriceandMaterial(event.target.value)
                      }
                      onChange={(event) => {
                        SetMaterial(event.target.value);
                      }}
                      className="item-info"
                      id="select-material"
                    >
                      <option value="select">Please select material</option>
                      <option value="gold">Gold</option>
                      <option value="silver">Silver</option>
                      <option value="bronze">Bronze</option>
                    </select>
                  </label>
                  {/* 
                  <label htmlFor="materials">
                    <div className="item-info"> Select necklace length:</div>
                    <select
                      value={material}
                      className="item-info"
                      id="select-material"
                      onChange={(event) => {
                        SetMaterial(event.target.value);
                      }}
                    >
                      <option value="select">Please select length</option>
                      <option value="10cm">10 cm</option>
                      <option value="20cm">20 cm</option>
                      <option value="30cm">30 cm</option>
                    </select>
                  </label> */}
                </form>
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
