import data from "./data.js";

const calculateTotals = (cartData) => {
  const { filteredCart } = cartData;
  let idsObject = {};

  filteredCart.forEach((cartItem) => {
    idsObject[cartItem.id] = cartItem.count;
  });

  let totalSum = 0;

  for (const [jewleryTypeList, jewleryList] of Object.entries(data)) {
    jewleryList.forEach((jewlery) => {
      // Is it in the cart?
      if (jewlery.id in idsObject) {
        //   idsObject = {1: {bronze: 0, silver: 1, gold: 0}}
        const id = jewlery.id;
        // const temp = Object.entries(idsObject[id]);
        for (const [material, count] of Object.entries(idsObject[id])) {
          totalSum +=
            (jewlery.selectedMaterial[material] + jewlery.price) * count;
        }
      }
    });
  }

  return totalSum;
};

export default calculateTotals;
