import React, { useRef } from "react";
import Video from "./main_images/Video";
import Carousel from "./carousel/Carousel";
import { FormattedMessage } from "react-intl";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBag,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingBag, faChevronLeft, faChevronRight);

const HomePage = () => {
  const carouselRef = useRef();
  console.log(carouselRef);

  return (
    <div className="main-container">
      <Video carouselRef={carouselRef} />
      <div className="sub-container">
        <div className="jeweleries_for_you" ref={carouselRef}>
          <FormattedMessage
            id="app.jewleriesforyou"
            defaultMessage="Jewelry for You"
          />
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default HomePage;
