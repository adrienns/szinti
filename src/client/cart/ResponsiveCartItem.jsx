import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { WrapperContext } from "../Wrapper";

library.add(faTimes);

const ResponsiveCartItem = ({ item, val }) => {
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
    <div className="responsive-cart-items">
      <img
        src={firstImage}
        alt="product"
        className="responsive-cart-item-image"
      />

      <div className="responsive-cart-item">
        {locale == "en" ? name : name_hun}
        <div className="responsive-cart-item">
          {locale == "en" ? material : material_hun}
        </div>
        <div className="responsive-cart-item">
          <span className="item-counter" onClick={() => decrement(id)}>
            -
          </span>

          {count}

          <span className="item-counter" onClick={() => increment(id)}>
            +
          </span>
        </div>
        <div className="responsive-cart-item">{total.toLocaleString()} HUF</div>
      </div>

      <div className="responsive-cart-item" id="responsive-remove-btn">
        <span onClick={() => removeItem(id)}>
          <FontAwesomeIcon className="remove-btn" icon="times" />
        </span>
      </div>
    </div>
  );
};

export default ResponsiveCartItem;
