import React, { useState, useEffect } from "react";
import "./SingleProduct.css";
import SideImages from "./SideImages";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import ResponsiveSingleProductPage from "./ResponsiveSingleProductPage";
import ProductDescription from "./ProductDescription";

const SingleProductPage = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
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

  const changeCurrentImageTo = (index) => {
    setCurrentImage(index);
  };

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
          <ProductDescription props={props} />
        </div>
      )}
    </React.Fragment>
  );
};

export default SingleProductPage;
