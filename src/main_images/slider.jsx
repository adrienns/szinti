import React from "react";
import image1 from "../images/pics1.jpg";
import image2 from "../images/pics2.jpg";
import image3 from "../images/pics4.jpg";
import { SliderImages } from "./slider_images.jsx";
import "./main_images.css";

const INTERVAL = 3000;
const IMAGES = [
  { pic_url: image1, id: "image1" },
  { pic_url: image2, id: "image2" },
  { pic_url: image3, id: "image3" },
];

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.interval = null;
    this.incrementImg.bind(this);
  }

  incrementImg() {
    const numberOfImages = IMAGES.length;
    const nextState = (this.state.currentImage + 1) % numberOfImages;
    this.setState({ currentImage: nextState });
  }

  componentDidMount() {
    this.assingInterval();
  }

  componentWillUnmount() {
    clearInterval(this.inteval);
  }

  assingInterval() {
    this.inteval = setInterval(() => {
      this.incrementImg();
    }, INTERVAL);
  }

  render() {
    const imgSrc = IMAGES[this.state.currentImage];
    return <SliderImages imgSrc={imgSrc} />;
  }
}

export default Slider;
