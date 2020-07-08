import React from "react";
import { ProductConsumer } from "../product_context";
import { Link } from "react-router-dom";
import "./modal.css";

class Model extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modelOpen, closeModel, currentModalImage } = value;
          const { name, price } = value.modelProduct;

          // const firstImg = productDetails.map((element) => {
          // return (
          //  <img
          //  src={element.images[0]}
          //width="100"
          //height="200"
          //alt="Product Picture"
          ///>
          // );
          //});

          if (!modelOpen) {
            return null;
          } else {
            return (
              <div className="model-container">
                <div>
                  <div id="model-row">
                    <h3>Added Item</h3>
                    <h3>{name}</h3>
                    <img
                      className="modal-image"
                      src={currentModalImage}
                      alt="Product"
                    />

                    <h3>{price}</h3>

                    <Link to="/necklaces">
                      <button
                        className="modal-btn"
                        onClick={() => closeModel()}
                      >
                        Continue Shopping
                      </button>
                    </Link>

                    <Link to="/cart">
                      <button
                        className="modal-btn"
                        onClick={() => closeModel()}
                      >
                        Go to Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Model;
