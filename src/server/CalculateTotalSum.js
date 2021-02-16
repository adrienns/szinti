import data from "./data.js";

const calculateTotals = (cartData) => {
  const { filteredCart } = cartData;
  let idsObject = {};

  filteredCart.forEach((cartItem) => {
    idsObject[cartItem.id] = cartItem;
  });

  let totalSum = 0;

  for (const [jewelryTypeList, jewelryList] of Object.entries(data)) {
    jewelryList.forEach((jewelry) => {
      // Is it in the cart?
      if (jewelry.id in idsObject) {
        const id = jewelry.id;
        idsObject[id].count;
        totalSum += jewelry.price * idsObject[id].count;
      }
    });
  }

  return totalSum.toFixed(2);
};

export default calculateTotals;
