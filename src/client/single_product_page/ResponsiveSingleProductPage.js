import React, { useContext } from "react";
import "./SingleProduct.css";
import SideImages from "./SideImages";
import { ProductContext } from "../contexts/ProductContext";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { WrapperContext } from "../Wrapper";

const ResponsiveSingleProductpage = ({
  productImages,
  currentImage,
  changeCurrentImageTo,
  name,
  price,
  name_hun,
  description_hun,
  description,
  material_cleaning_hun,
  material_cleaning,
  material_description_hun,
  material_description,
  id,
}) => {
  const { incrementCartProduct, openSideModal } = useContext(ProductContext);
  const { locale } = useContext(WrapperContext);

  const numberOfImages = productImages.length;

  const handlePrevImage = () => {
    const prevState = (currentImage + numberOfImages - 1) % numberOfImages;
    changeCurrentImageTo(prevState);
  };

  const handleNextImage = () => {
    const nextState = (currentImage + 1) % numberOfImages;
    changeCurrentImageTo(nextState);
  };

  const imgSrc = productImages[currentImage];

  return (
    <div className="responsive_product_wrapper">
      {/* <div className="side-images-and-image-container"> */}

      <div className="responsive_img_container">
        <SwitchTransition>
          <CSSTransition
            key={currentImage}
            timeout={{ enter: 500, exit: 100 }}
            classNames="fade"
          >
            <img src={imgSrc} className="sideImageClass" alt="product" />
          </CSSTransition>
        </SwitchTransition>
      </div>

      <SideImages
        className="responsive-side-images"
        currentImage={currentImage}
        onChange={changeCurrentImageTo}
        productImages={productImages}
      />
      {/* </div> */}

      <div className="responsive_textbox_wrapper">
        <section className="responsive_product_textbook_descriptions">
          <h2 className="product_textbox_product_name">
            {locale === "en" ? name : name_hun}
          </h2>
          <h4 className="responsive_textbox-price">
            {price.toLocaleString()} HUF
          </h4>

          <p>
            <strong>Anyaga: </strong>
            {locale === "en" ? material_description : material_description_hun}
          </p>
          <p>
            <strong>Termékleírás: </strong>
            {locale === "en" ? description : description_hun}
          </p>
          <p>
            <strong>Tisztítása: </strong>
            {locale === "en" ? material_cleaning : material_cleaning_hun}
          </p>
          <strong className="more-info-about-shipping">
            Szállítással kapcsolatos tudnivalók{" "}
          </strong>

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
                  id="app.gotopayment"
                  defaultMessage="Pay Now"
                />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResponsiveSingleProductpage;
