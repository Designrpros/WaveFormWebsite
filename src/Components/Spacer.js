import React from "react";
import styled from "styled-components";

// 🔹 SwiftUI-like Infinite Spacer
const SpacerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SpacerElement = styled.div`
  flex-grow: 1; /* Expands to take available space */
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;

const Spacer = ({ children }) => {
  return (
    <SpacerContainer>
      <SpacerElement /> {/* Expands space */}
      {children} {/* Allows buttons or any element inside */}
      <SpacerElement /> {/* Expands space */}
    </SpacerContainer>
  );
};

export default Spacer;
/*

import React from "react";
import Spacer from "./Spacer"; // Import the Spacer component

const Example = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>Text 1</p>
      <Spacer /> //Expands infinitely to push items apart *
      <p>Text 2</p>
    </div>
  );
};

export default Example;


import React from "react";
import Spacer from "./Spacer"; // Import the Spacer component

const ExampleVertical = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <h1>Top Content</h1>
      <Spacer />  Expands //infinitely, pushing Bottom Content down
      <h1>Bottom Content</h1>
    </div>
  );
};

export default ExampleVertical;
  
*/