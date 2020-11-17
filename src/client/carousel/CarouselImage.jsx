import React, { Component } from "react";
import "./CarouselImage.css";

class CarouselImage extends Component {
  constructor(props) {
    super(props);
    this.state = { isHover: false };
  }

  handleOnMouseEnter = () => {
    this.setState({ isHover: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ isHover: false });
  };

  render() {
    const srcImg = this.state.isHover
      ? this.props.firstImage
      : this.props.secondImage;
    return (
      <div>
        <img
          className="carousel_image"
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
          src={srcImg}
        />
        <p>Price:100</p>
      </div>
    );
  }
}

export default CarouselImage;
