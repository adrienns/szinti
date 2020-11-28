import React, { createContext, useState } from "react";

export const ProductSizeContext = createContext();

const ProductSizeProvider = (props) => {
  const [size, setSize] = useState("");

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <ProductSizeContext.Provider value={{ size, handleSize }}>
      {" "}
      {props.children}
    </ProductSizeContext.Provider>
  );
};

const ProductSizeConsumer = ProductSizeContext.Consumer;

export { ProductSizeProvider, ProductSizeConsumer };
