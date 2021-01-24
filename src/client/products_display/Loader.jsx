import React, { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";

export const Loader = () => {
  const [isLoading, setIsLoding] = useState(true);
  return (
    <div className="sweet-loading" id="spin-loader-container">
      <MoonLoader size={78} color={"#2E2D2D"} loading={isLoading} />
    </div>
  );
};

export default Loader;
