import React, { useContext } from "react";
import SinglePhoto from "./SinglePhoto";
import "./NecklaceProductsDisplay.css";
import { useLocation, Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const ProductsDisplay = () => {
  const { pathname } = useLocation();
  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <div>
      <div className="location-param">
        <Link to="/">Home </Link>
        {pathname}
      </div>
      <ul className="necklace_container">
        {products
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
          })}
        ;
      </ul>
    </div>
  );
};

export default ProductsDisplay;
