import React from "react";

import Slider from "react-slick";
import "./carousel.css";
import CarouselImage from "./carousel_image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import image1 from "../images/pics1.jpg";
import image2 from "../images/pics2.jpg";
import image3 from "../images/pics4.jpg";
import image4 from "../images/pics_small1.jpg";
import image5 from "../images/pics_small1bottom.jpg";
import image6 from "../images/pics_small2.jpg";
import image7 from "../images/pics_small2bottom.jpg";
const IMAGES = [
  { firstImage: image1, secondImage: image2, id: 1 },
  { firstImage: image3, secondImage: image4, id: 2 },
  { firstImage: image5, secondImage: image6, id: 3 },
  { firstImage: image7, secondImage: image1, id: 4 },
  { firstImage: image4, secondImage: image3, id: 5 },
];

library.add(faChevronLeft, faChevronRight);

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      accessibility: true,
      className: "product-item-box",
      swipe: true,
      touchMove: true,

      nextArrow: (
        <FontAwesomeIcon icon={faChevronRight} className="slick-next" />
      ),
      prevArrow: (
        <FontAwesomeIcon icon={faChevronLeft} className="slick-prev" />
      ),
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          {IMAGES.map((element) => {
            return (
              <CarouselImage
                firstImage={element.firstImage}
                secondImage={element.secondImage}
                key={element.id}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
