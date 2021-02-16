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
      price: 15000,
      name_hun: " Ezüst és édesvízi gyöngy nyaklánc hullámos karikával",
      name: "Silver Nacklace with Sweetwater Pearl and Wavy Hoop",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling with rhodium coating and with sweetwater pearl. ",
      material_description_hun:
        "Az ékszer 925 Sterling ezüstből készült bevonva ródium réteggel, halványrózsaszín édesvízi gyöngy kíséretében.",
      material_cleaning:
        "Please do not clean the jewelery with chemicals and do you spay parfum on it as it can cause damage to the sweetwater pearl. With a cloth gently rub it. Store it in a dry and dark place.",
      material_cleaning_hun:
        " Vegyszermentes finom törlőkendővel alaposan áttörölni. Édesvízi gyöngysora miatt vegyszer, parfüm nem érheti! Száraz sötét helyen tartandó.",
      description_hun:
        "Kézzel készült ezüst szemes nyaklánc, hullámos karika medállal és halványrózsaszín édesvízi gyöngy díszítéssel. Hétköznapokra és alkalmakra is tökéletes viselet. A modellen 42 cm-es hosszúságú lánc látható, de választható 45 cm-es hosszúságban is.",

      description:
        "Kézzel készült édesvízi gyöngy fülbevaló. Hétköznapi viseletkor is megállja a helyét. A gyöngy finomsága és fénye teszi egyedivé, különlegessé viselőjét.",
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
      price: 15000,
      name_hun: "Ezüst lencse nyaklánc ",
      name: "Silver Necklace- Lentil",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling silver with rhodium coating. ",
      material_description_hun:
        " Az ékszer 925 Sterling ezüstből készült bevonva ródium réteggel.",
      material_cleaning:
        "With water with soap rub gently the jewelery and dry it with a cloth. Keep it in a dry place in its box.",
      material_cleaning_hun:
        "Vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Száraz helyen, dobozában tárolandó.",
      description:
        "This hand-made nacklace has a special lentil shape medal that give the necklace a special shine. It perfectly fits to every outfit.",

      description_hun:
        "Kézzel készült ezüst szemes nyaklánc, tömör lencse medállal különleges fényű matt csiszolással. Hétköznapokra és alkalmakra is tökéletes viselet. A képen látható modellen 42 cm-es hosszúságú lánc van, de választható 45 cm-es hosszúságban is.",
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
      price: 15000,
      name_hun: " Ezüst karika nyaklánc",
      name: "Silver Earrings -  Sweetwater Pearl",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling silver with rhodium coating. ",
      material_description_hun:
        " Az ékszer 925 Sterling ezüstből készült bevonva ródium réteggel.",
      material_cleaning:
        "With water with soap rub gently the jewelery and dry it with a cloth. Keep it in a dry place in its box.",
      material_cleaning_hun:
        "Szappanos vízzel és fogkefével átdörzsölni majd szárazra törölni. Száraz sötét helyen, dobozában tartandó.",
      description:
        "The necklace is hand-made with a uniquely formed hoop medal. On the picture the lenght of the necklace is 42 cm, however you can choose the lenght to be 45 cm. ",

      description_hun:
        "Kézzel készült ezüst szemes nyaklánc, különleges fényű,matt csiszolású karika medállal. Hétköznapokra és alkalmakra is tökéletes viselet. A modellen 42 cm-es hosszúságú lánc látható, de választható 45 cm-es hosszúságban is.",
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
      price: 35000,
      name_hun: " Ezüst és édesvízi gyöngy nyaklánc karikával",
      name: "Silver Necklace with Sweetwater Pearl",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling silver with sweetwater pearl beads.",
      material_description_hun:
        "Az ékszer 925 Sterling ezüstből készült, édesvízi gyöngysor kíséretében.",
      material_cleaning:
        "With water with soap rub gently the jewelery and dry it with a cloth. Keep it in a dry place in its box.",
      material_cleaning_hun:
        "Vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Száraz helyen, dobozában tárolandó.",
      description:
        "The earrings are hand-made with a sweetwater pearl. They are perfect for all occations.  The delicacy and shine of the pearl makes your looking special and unique. ",

      description_hun:
        "Kézzel készült édesvízi gyöngy fülbevaló. Hétköznapi viseletkor is megállja a helyét. A gyöngy finomsága és fénye teszi egyedivé, különlegessé viselőjét.",
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
      name_hun: "",
      material: "925 Sterling Silver",
      material_description: "",
      material_cleaning: "",
      description:
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
      material_description: "",
      material_cleaning: "",
      description:
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
      name: "dfdf",
      material: "925 Sterling Silver",
      material_description: "",
      material_cleaning: "",
      description:
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
      material_description: "",
      material_cleaning: "",
      description:
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
      material_description: "",
      material_cleaning: "",
      description: "<div>mamii</div><li>hello/li> ",
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
      material_description: "",
      material_cleaning: "",
      description:
        "lldfg gkjdfgfgi;gofgjzdfgkj fdglkfjglfdgjf;dgjfd;g jfdg;djfg;r gjdf;lgjd;gjdf s;gjfd;gjfg;fsjg;sdgjsd;fjds;fjsd;fljad;frjsd;fjdlfjldkf",
      inCart: false,
      count: 0,
      total: 0,
    },
  ],
  earringProductList: [
    {
      id: 13,
      type: "earrings",
      firstImage: image2,
      secondImage: image1,
      images: [image2, image1],
      link: "organicnecklaceproduct",
      price: 15000,
      name_hun: "Ezüst fülbevaló – Organikus háromszög",
      name: "Silver Earrings - Organic Triangle",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling silver with rhodium coating. ",
      material_description_hun:
        " Az ékszer 925 Sterling ezüstből készült Ródium bevonattal védve.",
      material_cleaning:
        "With a used toothbrush, water with soap rub the jewelery, then wash the soap off and dry it with a cloth",
      material_cleaning_hun:
        "Elhasznált fogkefével, szappanos vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Nedves, párás helyen nem tárolandó!",
      description:
        "The earrings are hand-made organic and triagled shaped. As their color is posished to matte they can easily play with the lights, it is noticable. Due to its shape it can be rotated in differents ways. The earrings organic shape and minimlist sporty looking makes your looking very special and unique.",
      description_hun:
        "Kézzel készült organikus formájú, háromszög fülbevaló. Mattra csiszolt felülete miatt nagyszerűen játszik a fényekkel, így könnyen észrevehető. Formájából adódóan felvéve többféleképpen forgatható, állítható. Organikusan tompa formája és minimalista sportossága teszi egyedivé, különlegessé viselőjét.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 14,
      type: "earrings",
      firstImage: image5,
      secondImage: image4,
      link: "organicnecklaceitem2",
      images: [image5, image4],
      price: 15000,
      name_hun: "Ezüst fülbevaló – Organikus négyszög",
      name: "Silver Earrings - Organic Square",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling silver with rhodium coating. ",
      material_description_hun:
        " Az ékszer 925 Sterling ezüstből készült Ródium bevonattal védve.",
      material_cleaning:
        "With a used toothbrush, water with soap rub the jewelery, then wash the soap off and dry it with a cloth",
      material_cleaning_hun:
        "Elhasznált fogkefével, szappanos vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Nedves, párás helyen nem tárolandó!",
      description:
        "The earrings are hand-made organic and square shaped. As their color is posished to matte they can easily play with the lights, it is noticable. Due to its shape it can be rotated in differents ways. The earrings organic shape and minimlist sporty looking makes your looking very special and unique.",
      description_hun:
        "Kézzel készült organikus formájú, háromszög fülbevaló. Mattra csiszolt felülete miatt nagyszerűen játszik a fényekkel, így könnyen észrevehető. Formájából adódóan felvéve többféleképpen forgatható, állítható. Organikusan tompa formája és minimalista sportossága teszi egyedivé, különlegessé viselőjét.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 15,
      type: "earrings",
      firstImage: image7,
      secondImage: image6,
      link: "organicnecklaceitem3",
      images: [image7, image6],
      price: 7000,
      name_hun: "Ezüst fülbevaló – Organikus mini háromszög",
      name: "Silver Earrings - Organic Mini Triangle",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling silver with rhodium coating. ",
      material_description_hun:
        " Az ékszer 925 Sterling ezüstből készült Ródium bevonattal védve.",
      material_cleaning:
        "With a used toothbrush, water with soap rub the jewelery, then wash the soap off and dry it with a cloth",
      material_cleaning_hun:
        "Elhasznált fogkefével, szappanos vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Nedves, párás helyen nem tárolandó!",
      description:
        "The earrings are hand-made organic and mini triagled shaped. As their color is posished to matte they can easily play with the lights, it is noticable. Due to its shape it can be rotated in differents ways. The earrings organic shape and minimlist sporty looking makes your looking very special and unique.",
      description_hun:
        "Kézzel készült organikus formájú, háromszög fülbevaló. Mattra csiszolt felülete miatt nagyszerűen játszik a fényekkel, így könnyen észrevehető. Formájából adódóan felvéve többféleképpen forgatható, állítható. Organikusan tompa formája és minimalista sportossága teszi egyedivé, különlegessé viselőjét.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 16,
      type: "earrings",
      firstImage: image9,
      secondImage: image8,

      images: [image9, image8],
      link: "organicnecklaceitem4",
      price: 15000,
      name_hun: "Ezüst fülbevaló – Hullámos karika",
      name: "Silver Earrings - Wavy Hoop",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        "The earrings are made of 925 Sterling silver with rhodium coating. ",
      material_description_hun:
        "Az ékszer 925 Sterling ezüstből készült Ródium bevonattal védve.",
      material_cleaning:
        "With a used toothbrush, water with soap rub the jewelery, then wash the soap off and dry it with a cloth",
      material_cleaning_hun:
        "Elhasznált fogkefével, szappanos vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Nedves, párás helyen nem tárolandó!",
      description:
        "The earrings are hand-made organic  shaped. they are beutifly formed as waves from two directions. As their color is posished to matte they can easily play with the lights, it is noticable. Due to its shape it can be rotated in differents ways. The earrings organic shape and minimlist sporty looking makes your looking very special and unique.",
      description_hun:
        "Kézzel készült organikus formájú, két irányból hullámosra kalapált karika fülbevaló. Egyik vége a fülcimpa mögé bújik. Mattra csiszolt felülete miatt nagyszerűen játszik a fényekkel, így könnyen észrevehető. Formájából adódóan felvéve többféleképpen forgatható, állítható. Organikusan tompa formája és minimalista sportossága teszi egyedivé, különlegessé viselőjét.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 17,
      type: "earrings",
      firstImage: image11,
      secondImage: image10,
      images: [image11, image10],
      link: "organicnecklaceitem5",
      price: 12000,
      name_hun: "Ezüst fülbevaló – Organikus huzal",
      name: "Silver Earrings - Organic Wire",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        "The earrings are made of 925 Sterling silver with rhodium coating. ",
      material_description_hun:
        "Az ékszer 925 Sterling ezüstből készült Ródium bevonattal védve.",
      material_cleaning:
        "With a used toothbrush, water with soap rub the jewelery, then wash the soap off and dry it with a cloth",
      material_cleaning_hun:
        "Elhasznált fogkefével, szappanos vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Nedves, párás helyen nem tárolandó!",
      description:
        "The earrings are hand-made organic  shaped. they are beutifly formed as waves from two directions. As their color is posished to matte they can easily play with the lights, it is noticable. Due to its shape it can be rotated in differents ways. The earrings organic shape and minimlist sporty looking makes your looking very special and unique.",
      description_hun:
        "Kézzel készült organikus formájú tompa hatszög. Mattra csiszolt felülete miatt nagyszerűen játszik a fényekkel, így könnyen észrevehető. Formájából adódóan felvéve többféleképpen forgatható, állítható. Organikusan tompa formája és minimalista sportossága teszi egyedivé, különlegessé viselőjét.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 18,
      type: "earrings",
      firstImage: image13,
      secondImage: image12,
      images: [image13, image12],
      link: "organicnecklaceitem6",
      price: 15000,
      name_hun:
        "Ezüst fülbevaló arany bevonattal – Organikus huzal édesvízi gyönggyel",
      name: "Gold Plated Silver Earrings - Organic Wire with Sweetwater Pearl",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        "The earrings are made of 925 Sterling silver with gold plate. ",
      material_description_hun:
        "Az ékszer 925 Sterling ezüstből készült arany bevonattal. ",
      material_cleaning:
        "With water and soap rub gently the jewelery and dry it with a cloth. Keep it in a dry place in its box.",
      material_cleaning_hun:
        "Szappanos vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Száraz helyen, dobozában tárolandó.",
      description:
        "The organic shape earrings are hand-made with a light pink sweetwater pearl. the earrings organic shape and the delicacy of the pearl makes your looking special and unique. ",
      description_hun:
        "Kézzel készült organikus formájú fülbevaló, közepén halványrózsaszín édesvízi gyönggyel.Organikusan formája és a gyöngy finomsága teszi egyedivé, különlegessé viselőjét.",
      count: 0,
      total: 0,
    },
    {
      id: 19,
      type: "earrings",
      firstImage: image15,
      secondImage: image14,
      images: [image15, image14],
      link: "organicnecklaceitem6",
      price: 6000,
      name_hun: "Ezüst fülbevaló– Édesvízi gyöngy",
      name: "Silver Earrings -  Sweetwater Pearl",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling silver with sweetwater pearl. ",
      material_description_hun:
        "Az ékszer 925 Sterling ezüstből készült édesvízi gyönggyel.",
      material_cleaning:
        "With water with soap rub gently the jewelery and dry it with a cloth. Keep it in a dry place in its box.",
      material_cleaning_hun:
        "Vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Száraz helyen, dobozában tárolandó.",
      description:
        "The earrings are hand-made with a sweetwater pearl. They are perfect for all occations.  The delicacy and shine of the pearl makes your looking special and unique. ",

      description_hun:
        "Kézzel készült édesvízi gyöngy fülbevaló. Hétköznapi viseletkor is megállja a helyét. A gyöngy finomsága és fénye teszi egyedivé, különlegessé viselőjét.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 20,
      type: "earrings",
      firstImage: image17,
      secondImage: image16,
      images: [image17, image16],
      link: "organicnecklaceitem6",
      price: 12000,
      name_hun: "Ezüst fülbevaló, arany bevonattal – Organikus huzal",
      name: "Silver Earrings / Gold Plated -  Organic Wire",

      material: "925 Sterling Silver, Gold Plated",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling silver with sweetwater pearl. ",
      material_description_hun:
        "Az ékszer 925 Sterling ezüstből készült édesvízi gyönggyel.",
      material_cleaning:
        "With water with soap rub gently the jewelery and dry it with a cloth. Keep it in a dry place in its box.",
      material_cleaning_hun:
        "Vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Száraz helyen, dobozában tárolandó.",
      description:
        "The earrings are hand-made organic  shaped. they are beutifly formed as waves from two directions. As their color is posished to matte they can easily play with the lights, it is noticable. Due to its shape it can be rotated in differents ways. The earrings organic shape and minimlist sporty looking makes your looking very special and unique.",
      description_hun:
        "Kézzel készült organikus formájú tompa hatszög. Mattra csiszolt felülete miatt nagyszerűen játszik a fényekkel, így könnyen észrevehető. Formájából adódóan felvéve többféleképpen forgatható, állítható. Organikusan tompa formája és minimalista sportossága teszi egyedivé, különlegessé viselőjét.",
      inCart: false,
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 21,
      type: "earrings",
      firstImage: image18,
      secondImage: image18,
      images: [image18],
      link: "organicnecklaceitem6",
      price: 7000,
      name_hun: "Ezüst fülbevaló párban – Áthúzós lánc",
      name: "Double Silver Earrings  - Fine Chain",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling silver with sweetwater pearl. ",
      material_description_hun:
        "Az ékszer 925 Sterling ezüstből készült édesvízi gyönggyel.",
      material_cleaning:
        "With water with soap rub gently the jewelery and dry it with a cloth. Keep it in a dry place in its box.",
      material_cleaning_hun:
        "Vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Száraz helyen, dobozában tárolandó.",
      description:
        "The earrings are hand-made with a sweetwater pearl. They are perfect for all occations.  The delicacy and shine of the pearl makes your looking special and unique. ",
      description_hun:
        "Kézzel készült, füllyukon áthúzható, apró négyzetes láncszemekből álló lógós fülbevaló, végén 1 cm merev egyenes résszel. Könnyű, kényelmes, mutatós darab, hosszúsága állítható. Minimalista sportossága vagy éppen finomsága teszi különlegessé viselőjét.",
      count: 0,
      total: 0,
    },
    {
      id: 22,
      type: "earrings",
      firstImage: image19,
      secondImage: image19,
      images: [image19],
      link: "organicnecklaceitem6",
      price: 18000,
      name_hun: " Ezüst fülbevaló – Lencse, gyöngyház kagylóval",
      name: "Silver Earrings -  Lentil shaped Nacre Pearl ",
      material: "925 Sterling Silver",
      material_hun: "925 Sterling ezüst",
      material_description:
        " The earrings are made of 925 Sterling silver with rhodium coating amd nackre pearl",
      material_description_hun:
        "Az ékszer 925 Sterling ezüstből készült ródium bevonattal és gyöngyház kagylóval.",
      material_cleaning:
        "With water with soap rub gently the jewelery and dry it with a cloth. Keep it in a dry place in its box.",
      material_cleaning_hun:
        "Vízzel enyhén megdörzsölni, átmosni majd törölközővel szárazra törölni. Száraz helyen, dobozában tárolandó.",
      description:
        "The earrings are hand-made half lentil shaped with a unique pattern real pearl. The jewelery can be woren in different ways. The delicacy and shine of the pearl makes your looking speacial and unique. ",

      description_hun:
        " Kézzel készült tömör ezüst félgömb fülbevaló, hátulról rácsatlakoztatható különleges mintájú és fényű igazi kagylóval. A fülbevaló variálható, több féle képen viselhető. A kagyló fényének ereje és finomsága teszi egyedivé, különlegessé viselőjét.  ",
      inCart: false,
      count: 0,
      total: 0,
    },
  ],
};

export default data;
