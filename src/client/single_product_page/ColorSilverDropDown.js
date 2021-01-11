import React, { useContext } from "react";
import { ColorContext } from "../contexts/ProductColorContext";

const ColorSilverDropDown = () => {
  const { color, handleColor } = useContext(ColorContext);

  return (
    <div>
      <form>
        <label htmlFor="product-color">
          <div className="item-info">Select Size:</div>
          <select
            value={color}
            id="select-color"
            // onClick={(event) => changeColor(event.target.value)}
            onChange={(event) => {
              handleColor(event);
            }}
          >
            <option value="select">Please select color</option>

            <option value="rodium">Rodium</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default ColorSilverDropDown;
