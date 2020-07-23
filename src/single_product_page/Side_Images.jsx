import React, { Component } from "react";
import "./Side_Images.css";

class SideImages extends Component {
  render() {
    const { currentImage } = this.props;

    return (
      <ul className="side_image_container">
        {this.props.productImages.map((element, index) => {
          return (
            <li className="side_image_list" key={index}>
              <img
                className={
                  currentImage == index
                    ? "side_image currently_selected"
                    : "side_image"
                }
                onClick={() => this.props.onChange(index)}
                src={element}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SideImages;
