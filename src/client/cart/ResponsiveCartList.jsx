import { createCartItems } from "./CreateCartItems";
import React from "react";
import ResponsiveCartItem from "./ResponsiveCartItem";

const ResponsiveCartList = ({ val }) => {
  const { cart } = val;

  const items = createCartItems(cart);
  return (
    <div className="responsive-coloumns-container">
      {items.map((item) => (
        <ResponsiveCartItem key={item.id} item={item} val={val} />
      ))}
    </div>
  );
};

export default ResponsiveCartList;
