import React from "react";
import CartItem from "./CartItem";
import { createCartItems } from "./CreateCartItems";

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
