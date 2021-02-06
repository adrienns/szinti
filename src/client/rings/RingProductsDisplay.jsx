import React from "react";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useLocation, Link } from "react-router-dom";
import Loader from "../products_display/Loader";
import { FormattedMessage } from "react-intl";
import ComingSoonText from "../products_display/ComingSoonText";

const RingProductsDisplay = () => {
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
            <Link to="/">
              <FormattedMessage id="app.home" defaultMessage="Home" />
            </Link>
            {pathname}
          </h5>
          <ComingSoonText />
        </React.Fragment>
      )}
    </div>
  );
};

export default RingProductsDisplay;
