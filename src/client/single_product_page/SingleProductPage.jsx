import React, { useState, useContext } from "react";
import "./SingleProduct.css";
import SideImages from "./SideImages";
import { ProductContext } from "../contexts/ProductContext";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const SingleProductPage = (props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const { incrementCartProduct, openSideModal } = useContext(ProductContext);

  console.log(props);
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

  const { name, info, id, price, material } = props;

  const imgSrc = props.productImages[currentImage];

  return (
    <div className="product_wrapper">
      <div>
        <SideImages
          currentImage={currentImage}
          onChange={changeCurrentImageTo}
          productImages={props.productImages}
        />
      </div>

      <div className="img_container">
        <span className="prev_btn" onClick={handlePrevImage}></span>
        <SwitchTransition>
          <CSSTransition
            key={currentImage}
            timeout={{ enter: 500, exit: 100 }}
            classNames="fade"
          >
            <img src={imgSrc} className="sideImageClass" alt="product" />
          </CSSTransition>
        </SwitchTransition>
        <span className="next_btn" onClick={handleNextImage}></span>
      </div>

      <div className="product_textbox">
        <div>
          <h1>{name}</h1>
          <h2>{material}</h2>
          <h5> {info}</h5>

          <h1>{price}</h1>
        </div>
        <div className="single_product_page_button_container">
          <div>
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
          </div>
          <div>
            <Link to="/necklaces">
              <button>
                <FormattedMessage
                  id="app.continueshopping"
                  defaultMessage="continue shopping"
                />
              </button>
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <button>
                <FormattedMessage
                  id="app.gotopayment"
                  defaultMessage="Go to Payment"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
