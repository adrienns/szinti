import React from "react";
import MainImages from "../main_images/MainImages";
import Carousel from "../carousel/Carousel.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBag,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingBag, faChevronLeft, faChevronRight);

class HomePage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <MainImages />

        <div>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default HomePage;
