let host = "";
if (process.env.NODE_ENV == "dev") {
  // host = "http://localhost:8080";
  host = "http://localhost:8080";
}

//earrings
const image1 = `${host}/static/100.jpg`;
const image2 = `${host}/static/1.jpg`;
const image3 = `${host}/static/2a.jpg`;
const image4 = `${host}/static/2a.jpg`;
const image5 = `${host}/static/2.jpg`;
const image6 = `${host}/static/3a.jpg`;
const image7 = `${host}/static/3.jpg`;
const image8 = `${host}/static/4a.jpg`;
const image9 = `${host}/static/4.jpg`;
const image10 = `${host}/static/5a.jpg`;
const image11 = `${host}/static/5.jpg`;
const image12 = `${host}/static/6a.jpg`;
const image13 = `${host}/static/6.jpg`;
const image14 = `${host}/static/7a.jpg`;
const image15 = `${host}/static/7.jpg`;
const image16 = `${host}/static/8a.jpg`;
const image17 = `${host}/static/8.jpg`;
const image18 = `${host}/static/9.jpg`;
const image19 = `${host}/static/10.jpg`;

//necklaces
const image20 = `${host}/static/13a.jpg`;
const image21 = `${host}/static/13.jpg`;
const image22 = `${host}/static/14a.jpg`;
const image23 = `${host}/static/14.jpg`;
const image24 = `${host}/static/15a.jpg`;
const image25 = `${host}/static/15.jpg`;
const image26 = `${host}/static/16.jpg`;

const data = {
  necklaceProductList: [
    {
      id: 1,
      type: "necklaces",
      firstImage: image20,
      secondImage: image21,
      images: [image21, image20, image3, image4],
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
      firstImage: image22,
      secondImage: image23,
      selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
      link: "organicnecklaceitem2",
      images: [image22, image22, image3, image4],
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
      firstImage: image24,
      secondImage: image25,
      link: "organicnecklaceitem3",
      selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },
      images: [image25, image24, image1, image4],
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
      firstImage: image26,
      secondImage: image26,
      selectedMaterial: { gold: 0, silver: 22, bronze: 340444 },

      images: [image26, image2, image3, image4],
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
