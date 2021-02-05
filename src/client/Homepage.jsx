import React from "react";
import Video from "./main_images/Video";
import Carousel from "./carousel/Carousel";
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
        <Video />
        <div className="sub-container">
          <div className="jeweleries_for_you"> Ékszerek neked</div>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default HomePage;
