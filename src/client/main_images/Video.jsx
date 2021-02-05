import React from "react";
import video1 from "../images/VEWEcover_04.0.mp4";
import ReactPlayer from "react-player";
import "./MainImages.css";

const style = { height: "368px", width: "350px", padding: "20px" };

class Video extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ReactPlayer
          muted={true}
          url={video1}
          playing
          // loop={true}
          playIcon={<button>Play</button>}
          className="main-video"
          // alt="VeWe Handcrafted Jewelry"

          height="100%"
          width="100%"
        />
        <span className="shopnow-text"> SHOP NOW</span>
      </React.Fragment>
    );
  }
}

export default Video;
