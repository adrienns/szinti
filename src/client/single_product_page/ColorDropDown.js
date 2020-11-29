import React, { useState } from "react";

const ColorDropDown = () => {
  const [color, setColor] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="product-color">
          <div className="item-info">Select Size:</div>
          <select
            value={color}
            id="select-color"
            onClick={(event) => changeColor(event.target.value)}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          >
            <option value="select">Please select color</option>

            <option value="pink">Pink</option>
            <option value="white">White</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default ColorDropDown;
