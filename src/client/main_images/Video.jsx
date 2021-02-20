import React, { useState, useEffect } from "react";
import video1 from "../images/VEWEcover_04.0compressed.mp4";
import ReactPlayer from "react-player";
import "./MainImages.css";
import video2 from "../images/VEWEcover_04.0_mobile_compressed.mp4";

import { useSpring, animated } from "react-spring";

const style = { height: "368px", width: "350px", padding: "20px" };

const Video = ({ carouselRef }) => {
  const [size, setSize] = useState(window.innerWidth);
  const [text, setText] = useState("");

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const FadeIn = () => {
    const text = "SHOP NOW";
    const popupText = setText(text);
    return popupText;
  };

  const handleCarousel = () => {
    carouselRef.current.scrollIntoView({ block: "start" });
  };

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <React.Fragment>
      {size > 1100 ? (
        <ReactPlayer
          muted={true}
          url={video1}
          onEnded={FadeIn}
          playing
          playIcon={<button>Play</button>}
          className="main-video"
          alt="VeWe Handcrafted Jewelry"
          height="100%"
          width="100%"
        />
      ) : (
        <ReactPlayer
          muted={true}
          url={video2}
          playing
          onEnded={FadeIn}
          playIcon={<button>Play</button>}
          className="main-video"
          alt="VeWe Handcrafted Jewelry"
          height="100%"
          width="100%"
        />
      )}
      <animated.span
        className={text ? "shopnow-text" : "shopnow-text-none"}
        style={props}
        onClick={handleCarousel}
      >
        {text}
      </animated.span>
    </React.Fragment>
  );
};

export default Video;
