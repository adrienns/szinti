import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { WrapperContext } from "../Wrapper";

const ProductDescription = ({
  inCart,
  name,
  id,
  price,
  name_hun,
  description_hun,
  description,
  material_cleaning_hun,
  material_cleaning,
  material_description_hun,
  material_description,
}) => {
  const { locale } = useContext(WrapperContext);
  const { incrementCartProduct, openSideModal } = useContext(ProductContext);

  return (
    <div className="product_textbox">
      <div>
        <h2 className="product_textbox_product_name">
          {locale === "en" ? name : name_hun}
        </h2>

        <h4>{price.toLocaleString()} HUF</h4>
      </div>

      <section className="product_textbox_descriptions">
        <p>
          <strong>
            <FormattedMessage id="app.material" defaultMessage="Material" />
          </strong>
          {locale === "en" ? material_description : material_description_hun}
        </p>
        <p>
          <strong>
            <FormattedMessage
              id="app.description"
              defaultMessage="Description"
            />
          </strong>
          {locale === "en" ? description : description_hun}
        </p>
        <p>
          <strong>
            <FormattedMessage id="app.cleaning" defaultMessage="Cleaning: " />
          </strong>
          {locale === "en" ? material_cleaning : material_cleaning_hun}
        </p>
        <strong className="more-info-about-shipping">
          <FormattedMessage
            id="app.moreinfoaboutshipping"
            defaultMessage="More info about shipping "
          />
        </strong>
      </section>
      <div className="single_product_page_button_container">
        <button
          onClick={() => {
            incrementCartProduct(id);
            openSideModal();
          }}
        >
          <FormattedMessage
            id="app.addtoshoppingbag"
            defaultMessage="Add to Shopping Bag"
          />
        </button>

        <Link to="/cart">
          <button>
            <FormattedMessage
              id="app.continueshopping"
              defaultMessage="Continue shopping"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDescription;
