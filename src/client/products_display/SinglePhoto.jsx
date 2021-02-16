import React, { useState, useContext } from "react";
import "./SinglePhoto.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../contexts/ProductContext";
import { useTransition, animated } from "react-spring";
import Placeholder from "./Placeholder";
import { WrapperContext } from "../Wrapper";

const SinglePhoto = (props) => {
  const [isHovered, setHover] = useState(false);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const transitions = useTransition(isHovered, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 120, duration: 300 },
  });
  const { locale } = useContext(WrapperContext);

  const handleImageLoaded = () => {
    setImageIsLoaded(true);
  };

  const handleMouseOn = () => {
    setHover(true);
  };

  const handleMouseOff = () => {
    setHover(false);
  };

  const { id, name, name_hun, imgPrice, secondImg, mainImg } = props;
  return (
    <div
      className="jewelery-item"
      onMouseLeave={() => handleMouseOff()}
      onMouseEnter={() => handleMouseOn()}
    >
      <li key={id}>
        <ProductConsumer>
          {(value) => (
            <Link to={`/organicproduct/${id}`}>
              <div onClick={() => value.setSelected(id)}>
                <div className="image-wrapper">
                  <div className="image-placeholder">
                    {!imageIsLoaded && <Placeholder />}
                    {transitions.map(({ item, key, props }) => (
                      <animated.img
                        key={key}
                        style={props}
                        className={"necklaces-img"}
                        onLoad={handleImageLoaded}
                        src={item ? secondImg : mainImg}
                        alt="product"
                      />
                    ))}
                  </div>

                  {isHovered && (
                    <button
                      className="cart_btn"
                      onClick={() => {
                        value.openModal(id);
                      }}
                    >
                      <p className="button_text">ADD TO BAG</p>
                    </button>
                  )}
                </div>
              </div>
            </Link>
          )}
        </ProductConsumer>
      </li>

      <div className="product-text-container">
        <p className="product-description">
          <Link to={`/organicproduct/${name}`}>
            {locale == "en" ? name : name_hun}
          </Link>
        </p>
        <p id="product-price" className="product-description">
          {imgPrice.toLocaleString()} HUF
        </p>
      </div>
    </div>
  );
};

SinglePhoto.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number,
    imgUrl: PropTypes.string,
    imgName: PropTypes.string,
    imgPrice: PropTypes.string,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default React.memo(SinglePhoto);
