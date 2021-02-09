import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { WrapperContext } from "../Wrapper";

library.add(faTimes);

export default function CartItem({ item, val }) {
  const {
    total,
    id,
    name,
    count,
    firstImage,
    name_hun,
    material,
    material_hun,
  } = item;
  const { increment, decrement, removeItem } = val;

  const { locale } = useContext(WrapperContext);

  return (
    <tr className="cart-items">
      <td id="cart-item-left" className="cart-item">
        <img src={firstImage} alt="product" className="cart-item-image" />
      </td>

      <td className="cart-item">{locale == "en" ? name : name_hun}</td>
      <td className="cart-item">{locale == "en" ? material : material_hun}</td>
      <td className="cart-item">
        <span className="item-counter" onClick={() => decrement(id)}>
          -
        </span>

        {count}

        <span className="item-counter" onClick={() => increment(id)}>
          +
        </span>
      </td>
      <td className="cart-item">{total.toLocaleString()} HUF</td>
      <td className="cart-item">
        <span onClick={() => removeItem(id)}>
          <FontAwesomeIcon className="remove-btn" icon="times" />
        </span>
      </td>
    </tr>
  );
}
