let host = "";
if (process.env.NODE_ENV == "dev") {
  // host = "http://localhost:8080";
  host = "http://localhost:8080";
}

//earrings
const image1 = `${host}/static/1a.jpg`;
const image2 = `${host}/static/1.jpg`;
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
      firstImage: image21,
      secondImage: image20,
      images: [image21, image20],
      link: "organicnecklaceproduct",
      price: 2,
      name: "Item1",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;flj ad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },

    {
      id: 2,
      type: "necklaces",
      firstImage: image23,
      secondImage: image22,
      link: "organicnecklaceitem2",
      images: [image22, image23],
      price: 220,
      material: "925 Sterling Silver",
      name: "Item2",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;f jdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },

    {
      id: 3,
      type: "necklaces",
      firstImage: image25,
      secondImage: image24,
      link: "organicnecklaceitem3",
      images: [image25, image24],
      price: 400,
      name: "Item3",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 4,
      type: "necklaces",
      firstImage: image26,
      secondImage: image26,
      images: [image26],
      link: "organicnecklaceitem4",
      price: 330,
      name: "Item4",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
  ],
  ringProductList: [
    {
      id: 7,
      type: "rings",
      firstImage: image1,
      secondImage: image2,
      images: [image1, image2],
      link: "organicringitem2",
      price: 20,
      name: "Liliom",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 8,
      type: "rings",
      firstImage: image4,
      secondImage: image4,
      images: [image1, image2, image4, image4],
      link: "organiringitem2",
      price: 30,
      name: "Liliom",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 9,
      type: "rings",
      firstImage: image2,
      secondImage: image1,
      images: [image1, image2, image4, image4],
      link: "organiringitem2",
      price: 3454,
      name: "Liliom",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 10,
      type: "rings",
      firstImage: image4,
      secondImage: image5,
      images: [image1, image2, image4, image4],
      link: "organicringitem2",
      price: 9576,
      name: "Liliom",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 11,
      type: "rings",
      firstImage: image7,
      secondImage: image6,
      images: [image6, image7, image10, image8],
      link: "organicringitem3",
      price: 900,
      name: "Liliom",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 12,
      type: "rings",
      firstImage: image10,
      secondImage: image9,
      images: [image8, image7, image10, image9],
      link: "organicringitem2",
      price: 500,
      name: "Liliom",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
  ],
  earingProductList: [
    {
      id: 13,
      type: "earings",
      firstImage: image2,
      secondImage: image1,
      images: [image2, image1],
      link: "organicnecklaceproduct",
      price: 200,
      name: "Item1",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 14,
      type: "earings",
      firstImage: image5,
      secondImage: image4,
      link: "organicnecklaceitem2",
      images: [image5, image4],
      price: 220,
      name: "Item2",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 15,
      type: "earings",
      firstImage: image7,
      secondImage: image6,
      link: "organicnecklaceitem3",
      images: [image7, image6],
      price: 400,
      name: "Item3",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 16,
      type: "earings",
      firstImage: image9,
      secondImage: image8,

      images: [image9, image8],
      link: "organicnecklaceitem4",
      price: 330,
      name: "Item4",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 17,
      type: "earings",
      firstImage: image11,
      secondImage: image10,
      images: [image11, image10],
      link: "organicnecklaceitem5",
      price: 440,
      name: "Item5",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 18,
      type: "earings",
      firstImage: image13,
      secondImage: image12,
      images: [image13, image12],
      link: "organicnecklaceitem6",
      price: 520,
      name: "Item6",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 19,
      type: "earings",
      firstImage: image15,
      secondImage: image14,
      images: [image15, image14],
      link: "organicnecklaceitem6",
      price: 520,
      name: "Item6",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 20,
      type: "earings",
      firstImage: image17,
      secondImage: image16,
      images: [image17, image16],
      link: "organicnecklaceitem6",
      price: 520,
      name: "Item6",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 21,
      type: "earings",
      firstImage: image18,
      secondImage: image18,
      images: [image18],
      link: "organicnecklaceitem6",
      price: 520,
      name: "Item6",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 22,
      type: "earings",
      firstImage: image19,
      secondImage: image19,
      images: [image19],
      link: "organicnecklaceitem6",
      price: 520,
      name: "Item6",
      material: "925 Sterling Silver",
      info:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjfd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
  ],
};

export default data;
