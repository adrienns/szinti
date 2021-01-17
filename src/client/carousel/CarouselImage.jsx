import React, { useState } from "react";
import "./CarouselImage.css";
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

  const { id, imgUrl, name, imgPrice, firstImage, secondImage } = props;

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
      onMouseLeave={() => handleMouseOff()}
      onMouseEnter={() => handleMouseOn()}
    >
      <div>
        {!imageIsLoaded && <Placeholder />}
        {transitions.map(({ item, key, props }) => (
          <animated.img
            key={key}
            style={props}
            className="carousel_image"
            onLoad={handleImageLoaded}
            src={item ? firstImage : secondImage}
            url={imgUrl}
            alt="product"
          />
        ))}
      </div>

      <p>Price:100</p>
    </div>
  );
};

export default CarouselImage;
