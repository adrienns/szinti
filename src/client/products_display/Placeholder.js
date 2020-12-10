import styled, { keyframes } from "styled-components";
import React from "react";

{
  /* {!imageIsLoaded && <Placeholder />} */
}

const loadingAnimation = keyframes`
0% {
  background-color: #fff;
}
50% {
  background-color: #ccc;
}
100% {
  background-color: #fff;
}
`;

const StyledPlaceholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const Placeholder = () => {
  return (
    <React.Fragment>
      <StyledPlaceholder />
    </React.Fragment>
  );
};

export default Placeholder;
