import React, { useState } from "react";
import "./Carousel.css";
import { useTransition, animated } from "react-spring";
import Placeholder from "../products_display/Placeholder";

const CarouselImage = (props) => {
  const [isHovered, setHover] = useState(false);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const transitions = useTransition(isHovered, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 120, duration: 300 },
  });

  const { firstImage, secondImage } = props;

  const handleImageLoaded = () => {
    setImageIsLoaded(true);
  };

  const handleMouseOn = () => {
    setHover(true);
  };

  const handleMouseOff = () => {
    setHover(false);
  };

  return (
    <div
      className="carousel_image-wrapper"
      onMouseLeave={() => handleMouseOff()}
      onMouseEnter={() => handleMouseOn()}
    >
      {!imageIsLoaded && <Placeholder />}
      {transitions.map(({ item, key, props }) => (
        <animated.img
          key={key}
          style={props}
          className="carousel_image"
          onLoad={handleImageLoaded}
          src={item ? firstImage : secondImage}
          alt="product image"
        />
      ))}
    </div>
  );
};

export default CarouselImage;
