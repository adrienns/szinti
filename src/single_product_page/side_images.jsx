import React, { Component } from "react";
import "./side_images.css";

class SideImages extends Component {
  render() {
    const { currentImage } = this.props;

    return (
      <ul className="side_image_container">
        {this.props.productImages.map((element, index) => {
          return (
            <li className="side_image_list">
              <img
                className={
                  currentImage == index
                    ? "side_image currently_selected"
                    : "side_image"
                }
                key={index}
                src={element}
                onClick={() => this.props.onChange(index)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SideImages;
