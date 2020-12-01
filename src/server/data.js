let host = "";
if (process.env.NODE_ENV == "dev") {
  // host = "http://localhost:8080";
  host = "http://localhost:8080";
}

const image1 = `${host}/static/cute4.jpg`;
const image2 = `${host}/static/cute4.jpg`;
const image3 = `${host}/static/cute4.jpg`;
const image4 = `${host}/static/cute4.jpg`;
const image5 = `${host}/static/pics_small2.jpg`;
const image6 = `${host}/static/cute4.jpg`;
const image7 = `${host}/static/cute4.jpg`;
const image8 = `${host}/static/cute3.jpg`;
const image9 = `${host}/static/cute4.jpg`;
const image10 = `${host}/static/earingwithpearl.jpg`;

const data = {
  necklaceProductList: [
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
  ],
  ringsProductList: [
    {
      id: 7,
      type: "rings",
      firstImage: image1,
      secondImage: image2,
      images: [image1, image2, image3, image4],
      selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
      link: "organicringitem2",
      price: 20,
      name: "Liliom",
      info: "sofrfjgklfgjflef",
      inCart: false,
      count: { gold: 0, silver: 0, bronze: 0 },
      total: { gold: 0, silver: 0, bronze: 0 },
    },
    {
      id: 8,
      type: "rings",
      firstImage: image4,
      secondImage: image3,
      images: [image1, image2, image3, image4],
      selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
      link: "organiringitem2",
      price: 30,
      name: "Liliom",
      info: "sofrfjgklfgjflef",
      inCart: false,
      count: { gold: 0, silver: 0, bronze: 0 },
      total: { gold: 0, silver: 0, bronze: 0 },
    },
    {
      id: 9,
      type: "rings",
      firstImage: image2,
      secondImage: image1,
      images: [image1, image2, image3, image4],
      selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
      link: "organiringitem2",
      price: 3454,
      name: "Liliom",
      info: "sofrfjgklfgjflef",
      inCart: false,
      count: { gold: 0, silver: 0, bronze: 0 },
      total: { gold: 0, silver: 0, bronze: 0 },
    },
    {
      id: 10,
      type: "rings",
      firstImage: image4,
      secondImage: image3,
      images: [image1, image2, image3, image4],
      selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
      link: "organicringitem2",
      price: 9576,
      name: "Liliom",
      info: "sofrfjgklfgjflef",
      inCart: false,
      count: { gold: 0, silver: 0, bronze: 0 },
      total: { gold: 0, silver: 0, bronze: 0 },
    },

    {
      id: 11,
      type: "rings",
      firstImage: image7,
      secondImage: image6,
      images: [image6, image7, image10, image8],
      selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
      link: "organicringitem3",
      price: 900,
      name: "Liliom",
      info: "sofrfjgklfgjflef",
      inCart: false,
      count: { gold: 0, silver: 0, bronze: 0 },
      total: { gold: 0, silver: 0, bronze: 0 },
    },
    {
      id: 12,
      type: "rings",
      firstImage: image10,
      secondImage: image9,
      images: [image8, image7, image10, image9],
      selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
      link: "organicringitem2",
      price: 500,
      name: "Liliom",
      info: "sofrfjgklfgjflef",
      inCart: false,
      count: { gold: 0, silver: 0, bronze: 0 },
      total: { gold: 0, silver: 0, bronze: 0 },
    },
  ],
};

export default data;