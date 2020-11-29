import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { MaterialContext } from "../contexts/MaterialContext";

const MaterialDropDown = () => {
  const { changePriceandMaterial } = useContext(ProductContext);

  const { material, handleMaterial } = useContext(MaterialContext);

  return (
    <div>
      <form>
        <label htmlFor="materials">
          <div className="item-info">Select Material:</div>
          <select
            value={material}
            id="select-material"
            onClick={(event) => changePriceandMaterial(event.target.value)}
            onChange={(event) => {
              handleMaterial(event);
            }}
          >
            <option value="select">Please select material</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="bronze">Bronze</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default MaterialDropDown;
