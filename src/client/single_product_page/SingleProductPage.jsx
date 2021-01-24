import React, { useState, useContext, useEffect } from "react";
import "./SingleProduct.css";
import SideImages from "./SideImages";
import { ProductContext } from "../contexts/ProductContext";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { WrapperContext } from "../Wrapper";
import ResponsiveSingleProductPage from "./ResponsiveSingleProductPage";

const SingleProductPage = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { locale } = useContext(WrapperContext);
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  const { incrementCartProduct, openSideModal } = useContext(ProductContext);

  const numberOfImages = props.productImages.length;

  const handlePrevImage = () => {
    const prevState = (currentImage + numberOfImages - 1) % numberOfImages;
    changeCurrentImageTo(prevState);
  };

  const handleNextImage = () => {
    const nextState = (currentImage + 1) % numberOfImages;
    changeCurrentImageTo(nextState);
  };

  const changeCurrentImageTo = (index) => {
    setCurrentImage(index);
  };

  const {
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
  } = props;

  const imgSrc = props.productImages[currentImage];

  return (
    <React.Fragment>
      {size < 1100 ? (
        <div>
          <ResponsiveSingleProductPage
            currentImage={currentImage}
            props={props}
            changeCurrentImageTo={changeCurrentImageTo}
          />
        </div>
      ) : (
        <div className="product_wrapper">
          <div>
            <SideImages
              currentImage={currentImage}
              onChange={changeCurrentImageTo}
              productImages={props.productImages}
            />
          </div>

          <div className="img_container">
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
                  {" "}
                  <FormattedMessage
                    id="app.material"
                    defaultMessage="Material"
                  />
                </strong>
                {locale === "en"
                  ? material_description
                  : material_description_hun}
              </p>
              <p>
                <strong>
                  {" "}
                  <FormattedMessage
                    id="app.description"
                    defaultMessage="Description"
                  />
                </strong>
                {locale === "en" ? description : description_hun}
              </p>
              <p>
                <strong>Tisztítása: </strong>
                {locale === "en" ? material_cleaning : material_cleaning_hun}
              </p>
              <strong className="more-info-about-shipping">
                Szállítással kapcsolatos tudnivalók{" "}
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
                    id="app.gotopayment"
                    defaultMessage="Pay Now"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SingleProductPage;
