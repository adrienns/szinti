import React from "react";

import SinglePhoto from "./Single_Photo";
import "./NecklaceProductsDisplay.css";

import { ProductConsumer } from "../product_context";

class ProductsDisplay extends React.Component {
  render() {
    return (
      <div>
        <ul className="necklace_container">
          <ProductConsumer>
            {(value) => {
              return value.products
                .filter((element) => element.type === "necklaces")
                .map((element) => {
                  return (
                    <SinglePhoto
                      type={element.type}
                      inCart={element.inCart}
                      element={element}
                      key={element.id}
                      id={element.id}
                      mainImg={element.firstImage}
                      secondImg={element.secondImage}
                      imgLink={element.link}
                      imgName={element.name}
                      imgPrice={element.price}
                    />
                  );
                });
            }}
          </ProductConsumer>
        </ul>
      </div>
    );
  }
}

export default ProductsDisplay;
