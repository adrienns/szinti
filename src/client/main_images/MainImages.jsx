import React from "react";
import Slider from "./Slider.jsx";

class MainImages extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-pictures">
          <div className="column" id="leftHalf">
            <Slider />
          </div>
          <div className="column" id="rightHalf">
            <Slider />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainImages;
