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
        name: item.name,
      });
    }
  
  });
  return cartItems;
};

export default function CartList({ val }) {
  const { cart, increment } = val;

  const items = createCartItems(cart);
  console.log(items)
  return (
    <tbody className="coloumns-container">
      {items.map((item) => (          
        <CartItem key={`${item.id} `} item={item} val={val} />
      
      ))}
    </tbody>
  );
}
