import React, { createContext, useState } from "react";

export const MaterialContext = createContext();

const MaterialProvider = (props) => {
  const [material, SetMaterial] = useState("");

  const handleMaterial = (event) => {
    SetMaterial(event.target.value);
  };

  return (
    <MaterialContext.Provider value={{ material, handleMaterial }}>
      {" "}
      {props.children}
    </MaterialContext.Provider>
  );
};

const MaterialConsumer = MaterialContext.Consumer;

export { MaterialProvider, MaterialConsumer };
