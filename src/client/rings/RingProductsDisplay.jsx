import React from "react";

import SinglePhoto from "../products_display/SinglePhoto";
import "./RingProductsDisplay.css";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const RingProductsDisplay = () => {
  const { products } = useContext(ProductContext);

  return (
    <ul className="necklace_container">
      {products
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
              name={element.name}
              imgPrice={element.price}
            />
          );
        })}
    </ul>
  );
};

export default RingProductsDisplay;
