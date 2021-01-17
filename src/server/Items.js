import data from "./data.js";

const getItemDetails = (cartData) => {
  const { filteredCart } = cartData;
  let idsObject = {};

  filteredCart.forEach((cartItem) => {
    idsObject[cartItem.id] = cartItem;
  });

  let items = [];

  for (const [jewleryTypeList, jewleryList] of Object.entries(data)) {
    jewleryList.forEach((jewlery) => {
      if (jewlery.id in idsObject) {
        const id = jewlery.id;
        const name = jewlery.name;
        const count = idsObject[id].count;

        if (count > 0) {
          let item = {};
          const numberofItems = count;
          const itemPrice = jewlery.price;
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
