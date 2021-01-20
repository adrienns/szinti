import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

export default function CartItem({ item, val }) {
  const { total, id, name, count, firstImage, material } = item;
  const { increment, decrement, removeItem } = val;

  return (
    <tr className="cart-items">
      <td id="cart-item-left" className="cart-item">
        <img src={firstImage} alt="product" className="cart-item-image" />
      </td>

      <td className="cart-item">{name}</td>
      <td className="cart-item">{material}</td>
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
      <td className="cart-item">{total} HUF</td>
      <td className="cart-item">
        <span onClick={() => removeItem(id)}>
          <FontAwesomeIcon className="shopping_bag" icon="times" />
        </span>
      </td>
    </tr>
  );
}
