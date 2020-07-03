import React from "react";

import SinglePhoto from "./single_photo";
import "./products_display.css";

import { ProductConsumer } from "../product_context";

class ProductsDisplay extends React.Component {
  render() {
    return (
      <div>
        <ul className="necklace_container">
          <ProductConsumer>
            {(value) => {
              return value.necklaces.map((element) => {
                return (
                  <SinglePhoto
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
