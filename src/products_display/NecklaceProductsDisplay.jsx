import React from "react";
import SinglePhoto from "./SinglePhoto";
import "./NecklaceProductsDisplay.css";
import { useLocation, Link } from "react-router-dom";
import { ProductConsumer } from "../contexts/ProductContext";

const ProductsDisplay = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h5 className="location-param">
        {" "}
        <Link to="/">Home </Link>
        {pathname}
      </h5>
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
                    name={element.name}
                    imgPrice={element.price}
                  />
                );
              });
          }}
        </ProductConsumer>
      </ul>
    </div>
  );
};

export default ProductsDisplay;
