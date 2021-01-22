import React, { useContext } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import CarouselImage from "./CarouselImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../contexts/ProductContext";

library.add(faChevronLeft, faChevronRight);

const Carousel = () => {
  const { products } = useContext(ProductContext);
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
    nextArrow: <FontAwesomeIcon icon={faChevronRight} className="slick-next" />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} className="slick-prev" />,

    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {products.map((element) => {
          return (
            <div>
              <CarouselImage
                firstImage={element.firstImage}
                secondImage={element.secondImage}
                key={element.id}
              />
              <div className="carousel-text-wrapper">
                <p className="carousel-text">{element.name}</p>
                <p className="carousel-price">
                  {element.price.toLocaleString()} HUF
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
