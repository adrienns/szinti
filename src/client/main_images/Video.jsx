import React, { useState, useEffect } from "react";
import video1 from "../images/VEWEcover_04.0.mp4";
import ReactPlayer from "react-player";
import "./MainImages.css";
import video2 from "../images/VEWEcover_04.0_mobile.mp4";

const style = { height: "368px", width: "350px", padding: "20px" };

const Video = () => {
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

  return (
    <React.Fragment>
      {size > 1100 ? (
        <ReactPlayer
          muted={true}
          url={video1}
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
          playIcon={<button>Play</button>}
          className="main-video"
          alt="VeWe Handcrafted Jewelry"
          height="100%"
          width="100%"
        />
      )}
      <span className="shopnow-text"> SHOP NOW</span>
    </React.Fragment>
  );
};

export default Video;
