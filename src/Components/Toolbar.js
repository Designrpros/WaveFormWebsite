import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../themeContext"; // Import ThemeContext

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.textColor};
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  z-index: 2;
  margin: 0 10px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.5rem;
  margin-right: auto;

  &:hover {
    color: ${({ theme }) => theme.waveformColor};
  }
`;

const Toolbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ToolbarContainer>
      <ToggleButton onClick={toggleTheme}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </ToggleButton>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/tjenester">Services</StyledLink>
      </nav>
    </ToolbarContainer>
  );
};

export default Toolbar;