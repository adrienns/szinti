import React from "react";
import Slider from "./slider.jsx";

class MainImages extends React.Component {
  render() {
    return (
      <div>
        <div className="main-pictures">
          <div className="column" id="leftHalf">
            <Slider />
          </div>
          <div className="column" id="rightHalf">
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default MainImages;
