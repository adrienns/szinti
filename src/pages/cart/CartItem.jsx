import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

export default function CartItem({ item, value }) {
  const { price, id, name, count } = item;
  const { increment, decrement, removeItem, currentModalImage } = value;

  return (
    <tr className="cart-items">
      <td className="cart-item">
        <img src={currentModalImage} width="50" height="50" alt="product" />
      </td>

      <td className="cart-item">{name}</td>

      <td className="cart-item">
        <span className="item-counter" onClick={() => decrement(id)}>
          {" "}
          -{" "}
        </span>

        {count}

        <span className="item-counter" onClick={() => increment(id)}>
          {" "}
          +{" "}
        </span>
      </td>
      <td className="cart-item">{price}$</td>
      <td className="cart-item">
        <span onClick={() => removeItem(id)}>
          {" "}
          <FontAwesomeIcon className="shopping_bag" icon="times" />
        </span>
      </td>
    </tr>
  );
}
