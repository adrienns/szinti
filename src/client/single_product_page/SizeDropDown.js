import React, { useContext } from "react";
import { ProductSizeContext } from "../contexts/ProductSizeContext";

const SizeDropDown = () => {
  const { size, handleSize } = useContext(ProductSizeContext);

  return (
    <div>
      <form>
        <label htmlFor="product-size">
          <div className="item-info">Select Size:</div>
          <select
            value={size}
            id="select-size"
            onClick={(event) => changeSize(event.target.value)}
            onChange={(event) => {
              handleSize(event);
            }}
          >
            <option value="select">Please select size</option>

            <option value="40cm">40 cm</option>
            <option value="100cm">100 cm</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default SizeDropDown;
