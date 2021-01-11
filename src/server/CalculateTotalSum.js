import data from "./data.js";

const calculateTotals = (cartData) => {
  const { filteredCart } = cartData;
  let idsObject = {};

  filteredCart.forEach((cartItem) => {
    idsObject[cartItem.id] = cartItem;
  });

  let totalSum = 0;

  for (const [jewleryTypeList, jewleryList] of Object.entries(data)) {
    jewleryList.forEach((jewlery) => {
      // Is it in the cart?
      if (jewlery.id in idsObject) {
        const id = jewlery.id;
        idsObject[id].count;
        totalSum += jewlery.price * idsObject[id].count;
      }
    });
  }

  return totalSum.toFixed(2);
};

export default calculateTotals;
