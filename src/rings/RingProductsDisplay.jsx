import React from "react";

import SinglePhoto from "../products_display/single_photo";
import "./RingProductsDisplay.css";

import { ProductConsumer } from "../product_context";

class RingProductsDisplay extends React.Component {
  render() {
    return (
      <div>
        <ul className="necklace_container">
          <ProductConsumer>
            {(value) => {
              return value.products
                .filter((element) => element.type === "rings")
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

export default RingProductsDisplay;
