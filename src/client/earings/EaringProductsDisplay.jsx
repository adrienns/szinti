import React, { useContext } from "react";
import SinglePhoto from "../products_display/SinglePhoto";
import "./EaringProductsDisplay.css";
import { useLocation, Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Loader from "../products_display/Loader";

const EaringProductsDisplay = () => {
  const { pathname } = useLocation();
  const { products, error, loading } = useContext(ProductContext);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3 className="error-msg">
          Something went wrong. Please contact us here :
          adrienn.sepa@outlook.com
        </h3>
      ) : (
        <React.Fragment>
          <h5 className="location-param">
            <Link to="/">Home </Link>
            {pathname}
          </h5>
          <ul className="earing_container">
            {products
              .filter((element) => element.type === "earings")
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

export default EaringProductsDisplay;
