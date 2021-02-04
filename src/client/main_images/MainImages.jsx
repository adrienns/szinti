import React from "react";
import { SliderImages } from "./SliderImages.jsx";

class MainImages extends React.Component {
  render() {
    return (
      <div className="main-pictures">
        <div className="column">
          <SliderImages />
        </div>
      </div>
    );
  }
}

export default MainImages;
