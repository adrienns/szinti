import React from "react";
import Image1 from "../images/cute2.jpg";
import Image2 from "../images/cute3.jpg";
import Image3 from "../images/cute4.jpg";
import Image4 from "../images/cute3.jpg";
import OrganicProduct from "../single_product_page/organic_product";

export const ringProductDetails = [
  {
    id: 7,
    type: "rings",
    price: 200,
    images: [Image1, Image2, Image3, Image4],
    name: "Flower Wave",
    info: "sofrfjgklfgjflef",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 8,

    price: 400,
    type: "rings",
    images: [Image2, Image3, Image3, Image4],
    name: "Liliom",
    inCart: false,
    count: 0,
    total: 0,
  },

  {
    id: 9,
    price: 300,
    type: "rings",
    images: [Image3, Image2, Image1, Image4],
    name: "Cristal Wave",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 10,
    price: 500,
    type: "rings",
    images: [Image1, Image2, Image3, Image4],
    name: "Spring",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 11,
    price: 600,
    type: "rings",
    images: [Image1, Image2, Image3, Image4],
    name: "Poppy seed",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 12,
    price: 650,
    type: "rings",
    images: [Image1, Image2, Image3, Image4],
    name: "Peach",
    inCart: false,
    count: 0,
    total: 0,
  },
];

const PRODUCTIMAGES = [Image1, Image2, Image3, Image4];

class RingsInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <OrganicProduct
          productImages={PRODUCTIMAGES}
          RingProductDetails={RingProductDetails}
        />
      </div>
    );
  }
}

export default RingsInfo;
