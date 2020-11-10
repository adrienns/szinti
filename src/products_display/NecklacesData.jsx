import image1 from "../images/necklace2.jpg";
import image2 from "../images/necklace1.jpg";
import image3 from "../images/pics_small1.jpg";
import image4 from "../images/pics_small1bottom.jpg";
import image5 from "../images/pics_small2.jpg";
import image6 from "../images/pics_small2bottom.jpg";

export const necklaceProductList = [
  {
    id: 1,
    type: "necklaces",
    firstImage: image1,
    secondImage: image2,
    images: [image1, image2, image3, image4],
    selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
    link: "organicnecklaceproduct",
    price: 200,
    name: "Item1",
    info: "sofrfjgklfgjflef",
    inCart: false,
    count: { gold: 0, silver: 0, bronze: 0 },
    total: { gold: 0, silver: 0, bronze: 0 },
  },

  {
    id: 2,
    type: "necklaces",
    firstImage: image4,
    secondImage: image3,
    selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
    link: "organicnecklaceitem2",
    images: [image2, image3, image3, image4],
    price: 220,
    name: "Item2",
    info: "sofrfjgklfgjflef",
    inCart: false,
    count: { gold: 0, silver: 0, bronze: 0 },
    total: { gold: 0, silver: 0, bronze: 0 },
  },

  {
    id: 3,
    type: "necklaces",
    firstImage: image6,
    secondImage: image5,
    link: "organicnecklaceitem3",
    selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
    images: [image3, image2, image1, image4],
    price: 400,
    name: "Item3",
    info: "sofrfjgklfgjflef",
    inCart: false,
    count: { gold: 0, silver: 0, bronze: 0 },
    total: { gold: 0, silver: 0, bronze: 0 },
  },
  {
    id: 4,
    type: "necklaces",
    firstImage: image2,
    secondImage: image1,
    selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },

    images: [image1, image2, image3, image4],
    link: "organicnecklaceitem4",
    price: 330,
    name: "Item4",
    info: "sofrfjgklfgjflef",
    inCart: false,

    total: { gold: 0, silver: 0, bronze: 0 },
  },
  {
    id: 5,
    type: "necklaces",
    firstImage: image6,
    secondImage: image5,
    selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
    images: [image1, image2, image3, image4],
    link: "organicnecklaceitem5",
    price: 440,
    name: "Item5",
    info: "sofrfjgklfgjflef",
    inCart: false,
    count: { gold: 0, silver: 0, bronze: 0 },
    total: { gold: 0, silver: 0, bronze: 0 },
  },
  {
    id: 6,
    type: "necklaces",
    firstImage: image4,
    secondImage: image3,
    selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
    images: [image1, image2, image3, image4],
    link: "organicnecklaceitem6",
    price: 520,
    name: "Item6",

    info: "sofrfjgklfgjflef",
    inCart: false,
    count: { gold: 0, silver: 0, bronze: 0 },
    total: { gold: 0, silver: 0, bronze: 0 },
  },
];
