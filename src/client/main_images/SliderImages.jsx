import React from "react";
import video1 from "../images/VEWEcover_04.0.mp4";
import ReactPlayer from "react-player";

const style = { height: "368px", width: "350px", padding: "20px" };

export class SliderImages extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer
          muted={true}
          url={video1}
          playing
          loop={true}
          playIcon={<button>Play</button>}
          className="framed_picture"
          // alt="VeWe Handcrafted Jewelry"

          height="100%"
          width="100%"
        />
      </div>
    );
  }
}
