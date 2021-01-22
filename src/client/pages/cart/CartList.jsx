import React from "react";
import CartItem from "./CartItem";

const createCartItems = (cart) => {
  let cartItems = [];
  cart.forEach((item) => {
    if (item.count > 0) {
      cartItems.push({
        id: item.id,
        firstImage: item.firstImage,
        total: item.total,
        count: item.count,
        name_hun: item.name_hun,
        name: item.name,
        material: item.material,
        material_hun: item.material_hun,
      });
    }
  });
  return cartItems;
};

export default function CartList({ val }) {
  const { cart } = val;

  const items = createCartItems(cart);
  return (
    <tbody className="coloumns-container">
      {items.map((item) => (
        <CartItem key={item.id} item={item} val={val} />
      ))}
    </tbody>
  );
}
