import React from "react";
import CartItem from "./CartItem";

const createCartItems = (cart) => {
  let cartItems = [];
  cart.forEach((item) => {
    if (item.count.gold > 0) {
      cartItems.push({
        id: item.id,
        material: "gold",
        firstImage: item.firstImage,
        total: item.total.gold,
        count: item.count.gold,
        name: item.name,
      });
    }
    if (item.count.silver > 0) {
      cartItems.push({
        id: item.id,
        material: "silver",
        firstImage: item.firstImage,
        total: item.total.silver,
        count: item.count.silver,
        name: item.name,
      });
    }
    if (item.count.bronze > 0) {
      cartItems.push({
        id: item.id,
        material: "bronze",
        firstImage: item.firstImage,
        total: item.total.bronze,
        count: item.count.bronze,
        name: item.name,
      });
    }
  });
  return cartItems;
};

export default function CartList({ val }) {
  const { cart, increment } = val;

  const items = createCartItems(cart);

  return (
    <tbody className="coloumns-container">
      {items.map((item) => (
        <CartItem key={`${item.id} ${item.material}`} item={item} val={val} />
      ))}
    </tbody>
  );
}
