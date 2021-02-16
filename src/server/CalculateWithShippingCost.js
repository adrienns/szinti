import calculateTotals from "./CalculateTotalSum.js";

const FREE_SHIPPING_LIMIT = 19000;
const calculateShippingCost = (cartData) => {
  const { selectedOption } = cartData;
  let shippingCost = 0;
  if (selectedOption === "Hungary") {
    shippingCost = 1500;
  }
  if (selectedOption === "EU") {
    shippingCost = 2500;
  }
  return shippingCost;
};

const updateWithShippingCost = (cartData) => {
  const cartTotal = parseInt(calculateTotals(cartData));
  let shippingCost = calculateShippingCost(cartData);
  if (cartTotal > FREE_SHIPPING_LIMIT) {
    return cartTotal;
  } else {
    return cartTotal + shippingCost;
  }
};

export default updateWithShippingCost;
