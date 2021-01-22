import React, { useState } from "react";
import "./SinglePhoto.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../contexts/ProductContext";
import { useTransition, animated } from "react-spring";
import Placeholder from "./Placeholder";

const SinglePhoto = (props) => {
  const [isHovered, setHover] = useState(false);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const transitions = useTransition(isHovered, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 120, duration: 300 },
  });

  const handleImageLoaded = () => {
    setImageIsLoaded(true);
  };
  // const propsexample2 = useSpring({
  //   opacity: isHovered ? 0.6 : 1,
  //   config: { duration: 100, mass: 5, tension: 2000, friction: 200 },
  // });

  // const [animated, setAnimation] = useSpring({opacity:0})

  const handleMouseOn = () => {
    setHover(true);
  };

  const handleMouseOff = () => {
    setHover(false);
  };

  const { id, imgUrl, name, imgPrice, secondImg, mainImg } = props;
  return (
    <div
      className="jewelery-item"
      onMouseLeave={() => handleMouseOff()}
      onMouseEnter={() => handleMouseOn()}
    >
      <li key={id}>
        <ProductConsumer>
          {(value) => (
            <Link to={`/organicproduct/${name}`}>
              <div onClick={() => value.handleSingleProduct(id)}>
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
      <div className="necklace-text-container">
        <p className="product-description">
          <Link to={`/organicproduct/${name}`}>{name}</Link>
        </p>
        <p className="product-description">{imgPrice} HUF</p>
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
