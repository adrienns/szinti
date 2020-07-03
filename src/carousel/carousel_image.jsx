import React, { Component } from "react";

const style = { height: "350px", width: "272px", padding: "20px" };

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
          style={style}
        />
      </div>
    );
  }
}

export default CarouselImage;
