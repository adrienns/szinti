import React from "react";
import Image1 from "../images/pics1.jpg";
import Image2 from "../images/pics2.jpg";
import Image3 from "../images/pics3.jpg";
import Image4 from "../images/pics4.jpg";
import OrganicProduct from "./organic_product";

export const necklaceProductDetails = [
  {
    id: 1,

    price: 200,
    firstImage: Image1,
    type: "necklaces",
    images: [Image1, Image2, Image3, Image4],
    name: "Flower Wave",
    info: "sofrfjgklfgjflef",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 2,
    type: "necklaces",
    firstImage: Image4,
    price: 300,
    images: [Image2, Image3, Image3, Image4],
    name: "Liliom",
    inCart: false,
    count: 0,
    total: 0,
  },

  {
    id: 3,
    price: 300,
    firstImage: Image3,
    type: "necklaces",
    images: [Image3, Image2, Image1, Image4],
    name: "Cristal Wave",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    price: 500,
    firstImage: Image4,
    type: "necklaces",
    images: [Image1, Image2, Image3, Image4],
    name: "Spring",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 5,
    price: 600,
    type: "necklaces",
    firstImage: Image3,
    images: [Image1, Image2, Image3, Image4],
    name: "Poppy seed",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 6,
    price: 650,
    firstImage: Image2,
    type: "necklaces",
    images: [Image1, Image2, Image3, Image4],
    name: "Peach",
    inCart: false,
    count: 0,
    total: 0,
  },
];

const PRODUCTIMAGES = [Image1, Image2, Image3, Image4];

class NecklacesInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <OrganicProduct
          productImages={PRODUCTIMAGES}
          productDetails={necklaceProductDetails}
        />
      </div>
    );
  }
}

export default NecklacesInfo;
