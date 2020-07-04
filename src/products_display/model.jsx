import React from "react";
import { ProductConsumer } from "../product_context";
import { Link } from "react-router-dom";
import "./model.css";

class Model extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modelOpen, closeModel, currentModalImage } = value;
          const { name, price, info } = value.modelProduct;

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
                    <h1>Added Item</h1>
                    <h1>{name}</h1>
                    <img
                      src={currentModalImage}
                      width="300"
                      height="400"
                      alt="Product"
                    />

                    <h3>{price}</h3>
                    <h5>{info}</h5>

                    <Link to="/necklaces">
                      <button onClick={() => closeModel()}>
                        Continue Shopping
                      </button>
                    </Link>

                    <Link to="/cart">
                      <button onClick={() => closeModel()}>Go to Cart</button>
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
