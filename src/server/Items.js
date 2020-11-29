import data from "./data.js";

const getItemDetails = (cartData) => {
  const { filteredCart } = cartData;
  let idsObject = {};

  filteredCart.forEach((cartItem) => {
    idsObject[cartItem.id] = cartItem.count;
  });

  let items = [];

  for (const [jewleryTypeList, jewleryList] of Object.entries(data)) {
    jewleryList.forEach((jewlery) => {
      if (jewlery.id in idsObject) {
        const id = jewlery.id;
        const name = jewlery.name;
        // const material = Object.keys(idsObject[id]);
        // const itemPrice = jewlery.selectedMaterial[material] + jewlery.price;
        for (const [material, count] of Object.entries(idsObject[id])) {
          if (count > 0) {
            let item = {};
            const numberofItems = count;
            const itemPrice =
              jewlery.selectedMaterial[material] + jewlery.price;
            item = {
              name: `${name} - ${material}`,
              sku: `${id}${material}`,
              price: JSON.stringify(itemPrice),
              quantity: JSON.stringify(numberofItems),
              currency: "HUF",
            };
            items = [...items, item];
          }
        }
      }
    });
  }
  return items;
};

export default getItemDetails;
