import React, { useContext } from "react";
import SinglePhoto from "../products_display/SinglePhoto";
import "./EarringProductsDisplay.css";
import { useLocation, Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Loader from "../products_display/Loader";
import { FormattedMessage } from "react-intl";

const EarringProductsDisplay = () => {
  const { pathname } = useLocation();
  const { products, error, loading } = useContext(ProductContext);

  console.log(pathname);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3 className="error-msg">
          <FormattedMessage
            id="app.somethingwentwrong"
            defaultMessage="Something went wrong. Please contact us here :
          adrienn.sepa@outlook.com"
          />
        </h3>
      ) : (
        <React.Fragment>
          <h5 className="location-param">
            <Link to="/">
              <FormattedMessage id="app.home" defaultMessage="Home" />
            </Link>
            {pathname}
          </h5>
          <ul className="earring_container">
            {products
              .filter((element) => element.type === "earrings")
              .map((element) => {
                return (
                  <SinglePhoto
                    type={element.type}
                    element={element}
                    key={element.id}
                    id={element.id}
                    mainImg={element.firstImage}
                    secondImg={element.secondImage}
                    name={element.name}
                    name_hun={element.name_hun}
                    imgPrice={element.price}
                  />
                );
              })}
            <li className="extra_listitem"></li>
            <li className="extra_listitem"></li>
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default EarringProductsDisplay;
