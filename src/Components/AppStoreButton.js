import React from 'react';
import styled from 'styled-components';

// 🔹 Styled App Store Button
const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

// 🔹 Reusable Component
const AppStoreButton = ({ href }) => {
  return (
    <Button href={href} target="_blank" rel="noopener noreferrer">
      Download on App Store
    </Button>
  );
};

export default AppStoreButton;