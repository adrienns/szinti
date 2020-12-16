import React, { useState, useContext } from "react";
import "./SingleProduct.css";
import SideImages from "./SideImages";
import { ProductContext } from "../contexts/ProductContext";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import SizeDropDown from "./SizeDropDown";
import ColorDropDown from "./ColorDropDown";
import MaterialDropDown from "./MaterialDropDown";
import { MaterialContext } from "../contexts/MaterialContext";

const SingleProductPage = (props) => {
  const { material } = useContext(MaterialContext);

  const [currentImage, setCurrentImage] = useState(0);

  const {
    incrementCartProduct,
    newPricewithMaterial,
    openSideModal,
  } = useContext(ProductContext);

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

  const { name, info, id, price } = props;

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
          <h1>
            {" "}
            {name} {material}
          </h1>
          <h5> {info}</h5>

          <h1>{price + newPricewithMaterial}</h1>
        </div>

        <MaterialDropDown />
        <SizeDropDown />
        <ColorDropDown />

        <div className="single_product_page_button_container">
          <div>
            <button
              disabled={material === "select" ? true : false}
              onClick={() => {
                incrementCartProduct(id, material);
                openSideModal();
              }}
            >
              Add to Shopping Bag
            </button>
          </div>
          <div>
            <Link to="/necklaces">
              <button>Continue Shopping</button>{" "}
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <button>Pay Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
