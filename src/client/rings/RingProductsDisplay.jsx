import React from "react";

import SinglePhoto from "../products_display/SinglePhoto";
import "./RingProductsDisplay.css";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useLocation, Link } from "react-router-dom";

const RingProductsDisplay = () => {
  const { pathname } = useLocation();
  const { products, error, loading } = useContext(ProductContext);

  return (
    <div>
      {loading ? (
        <h2 className="loading-msg">Loading</h2>
      ) : error ? (
        <h3 className="error-msg">
          Something went wrong. Please contact us here :
          adrienn.sepa@outlook.com
        </h3>
      ) : (
        <React.Fragment>
          <div className="location-param">
            <Link to="/">Home </Link>
            {pathname}
          </div>
          <ul className="ring_container">
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
        </React.Fragment>
      )}
    </div>
  );
};

export default RingProductsDisplay;