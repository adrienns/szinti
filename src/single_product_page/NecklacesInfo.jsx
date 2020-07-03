import React from "react";
import Image1 from "../images/pics1.jpg";
import Image2 from "../images/pics2.jpg";
import Image3 from "../images/pics3.jpg";
import Image4 from "../images/pics4.jpg";
import OrganicProduct from "./organic_product";
const id = 2;

export const productDetails = [
  {
    id: 1,

    price: "200HUF",
    images: [Image1, Image2, Image3, Image4],
    name: "Flower Wave",
    info: "sofrfjgklfgjflef",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 2,

    price: "300HUF",
    images: [Image2, Image3, Image3, Image4],
    name: "Liliom",
    inCart: false,
    count: 0,
    total: 0,
  },

  {
    id: 3,
    price: "400HUF",
    images: [Image3, Image2, Image1, Image4],
    name: "Cristal Wave",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    price: "500HUF",
    images: [Image1, Image2, Image3, Image4],
    name: "Spring",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 5,
    price: "600HUF",
    images: [Image1, Image2, Image3, Image4],
    name: "Poppy seed",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 6,
    price: "700HUF",
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
          productDetails={productDetails}
        />
      </div>
    );
  }
}

export default NecklacesInfo;
