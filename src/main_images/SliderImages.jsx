import React from "react";

const style = { height: "368px", width: "350px", padding: "20px" };

export class SliderImages extends React.Component {
  render() {
    const imgSrc = this.props.imgSrc;
    return (
      <div>
        <img
          src={imgSrc.pic_url}
          className="framed_picture"
          alt="VeWe Handcrafted Jewelry"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    );
  }
}
