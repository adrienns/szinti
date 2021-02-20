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
import { Link } from "react-router-dom";
import { WrapperContext } from "../Wrapper";

library.add(faChevronLeft, faChevronRight);

const Carousel = () => {
  const { products } = useContext(ProductContext);
  const { locale } = useContext(WrapperContext);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <FontAwesomeIcon {...props} icon={faChevronLeft} className="slick-prev" />
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <FontAwesomeIcon {...props} icon={faChevronRight} className="slick-next" />
  );

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
    initialSlide: 4,

    margin: "0 -15px",
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,

    responsive: [
      {
        breakpoint: 1045,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 4,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {products.map((element) => {
          const {
            id,
            firstImage,
            secondImage,
            name,
            name_hun,
            price,
          } = element;
          return (
            <div key={id} className="carousel-wrapper">
              <CarouselImage
                firstImage={firstImage}
                secondImage={secondImage}
                id={id}
              />
              <Link to={`/organicproduct/${id}`}>
                <div className="carousel-text-wrapper">
                  <p className="carousel-text">
                    {locale == "en" ? name : name_hun}
                  </p>
                  <p className="carousel-price">{price.toLocaleString()} HUF</p>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
