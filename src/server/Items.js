import data from "./data.js";

const getItemDetails = (cartData) => {
  const { filteredCart } = cartData;
  let idsObject = {};

  filteredCart.forEach((cartItem) => {
    idsObject[cartItem.id] = cartItem;
  });

  let items = [];

  for (const [jewelryTypeList, jewelryList] of Object.entries(data)) {
    jewelryList.forEach((jewelry) => {
      if (jewelry.id in idsObject) {
        const id = jewelry.id;
        const name = jewelry.name;
        const count = idsObject[id].count;

        if (count > 0) {
          let item = {};
          const numberofItems = count;
          const itemPrice = jewelry.price;
          item = {
            name: `${name} `,
            sku: `${id}`,
            description: `${name} `,
            unit_amount: {
              currency_code: "HUF",
              value: itemPrice.toFixed(2),
            },
            quantity: numberofItems,
            currency: "HUF",
          };
          items = [...items, item];
        }
      }
    });
  }
  return items;
};

export default getItemDetails;
