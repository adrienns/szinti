import React from "react";

import image2 from "../images/pics2.jpg";
import image3 from "../images/pics3.jpg";
import image4 from "../images/pics4.jpg";
import image1 from "../images/pics1.jpg";

import ProductsDisplay from "./products_display";

const IMAGES = [
  {
    firstImage: image1,
    secondImage: image2,
    price: "6355300HUF",
    name: "Poppy seed",
  },
  {
    firstImage: image4,
    secondImage: image3,
    price: "60235250HUF",
    name: "Poppy seed",
  },
  {
    firstImage: image2,
    secondImage: image1,
    price: "600255HUF",
    name: "Poppy seed",
  },
  {
    firstImage: image4,
    secondImage: image3,
    price: "6025250HUF",
    name: "Poppy seed",
  },
];

class RingProductList extends React.Component {
  render() {
    return <ProductsDisplay images={IMAGES} />;
  }
}

export default RingProductList;
