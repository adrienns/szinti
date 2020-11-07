import React, { useState } from "react";
import "./Single_Photo.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../contexts/ProductContext";
import { useSpring, useTransition, animated } from "react-spring";

const SinglePhoto = (props) => {
  const [isHovered, setHover] = useState(false);

  const transitions = useTransition(isHovered, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 120, duration: 300 },
  });

  // const propsexample2 = useSpring({
  //   opacity: isHovered ? 0.6 : 1,
  //   config: { duration: 100, mass: 5, tension: 2000, friction: 200 },
  // });

  // const [animated, setAnimation] = useSpring({opacity:0})

  const handleMouseOn = () => {
    setHover(() => ({ isHovered: true }));
  };

  const handleMouseOff = () => {
    setHover(() => {
      !isHovered;
    });
  };

  const { id, imgUrl, name, imgPrice, secondImg, mainImg } = props;

  return (
    <li className="jewelery-item">
      <ProductConsumer>
        {(value) => (
          <div>
            <div
              className="image-container"
              onClick={() => value.handleDetail(id)}
            >
              <Link to={`/organicproduct/${name}`}>
                <div className="img-wrapper-single">
                  {transitions.map(({ item, key, props }) => (
                    <animated.img
                      key={key}
                      style={props}
                      className="necklaces-img"
                      onMouseLeave={() => item && handleMouseOff()}
                      onMouseEnter={() => !item && handleMouseOn()}
                      src={item ? secondImg : mainImg}
                      url={imgUrl}
                      alt="product"
                    ></animated.img>
                  ))}
                </div>
              </Link>
            </div>

            <div onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
              <div>
                {isHovered ? (
                  <button
                    className="cart_btn"
                    onClick={() => {
                      value.openModal(id);
                    }}
                  >
                    <p className="button_text">ADD TO BAG</p>
                  </button>
                ) : (
                  ""
                )}
              </div>
              <p className="product-description">
                <Link to={`/organicproduct/${name}`}>{name}</Link>
              </p>
              <p className="product-description">{imgPrice}$</p>
            </div>
          </div>
        )}
      </ProductConsumer>
    </li>
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

export default SinglePhoto;
