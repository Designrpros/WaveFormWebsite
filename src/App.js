import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

// Component imports
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Process from "./Pages/Process";
import UserJourney from "./Pages/WaveForum.js";
import Security from "./Pages/Security.js"; // ✅ Security Component
import TermsOfService from "./Pages/TermsOfService.js"; // ✅ Terms Component
import Kontakt from "./Pages/Kontakt.js";

// Styled Components
const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  backdrop-filter: blur(10px);
  z-index: 1000;

  nav {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TabButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  border-bottom: ${({ active }) => (active ? "2px solid #fff" : "2px solid transparent")};
  font-weight: bold;
  text-transform: uppercase;
  padding-right: 2rem;

  &:hover {
    color: #ccc;
    border-bottom: 2px solid #ccc;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  z-index: 2;

  &:hover {
    text-decoration: none;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  margin-right: auto;

  &:hover {
    color: #ccc;
  }
`;

// App Component
const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <Helmet>
        <style>{`body { background-color: ${isDarkMode ? "#333" : "#f4f4f4"}; color: ${isDarkMode ? "#fff" : "#000"}; }`}</style>
      </Helmet>
      <Toolbar>
        <ToggleButton onClick={toggleTheme}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </ToggleButton>
        <nav>
          <TabButton onClick={() => handleTabClick("home")} active={activeTab === "home"}>
            <StyledLink to="/">WaveForm</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick("userjourney")} active={activeTab === "userjourney"}>
            <StyledLink to="/brukerreise">WaveForum</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick("services")} active={activeTab === "services"}>
            <StyledLink to="/tjenester">About</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick("process")} active={activeTab === "process"}>
            <StyledLink to="/prosess">Privacy Policy</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick("security")} active={activeTab === "security"}>
            <StyledLink to="/security">Security</StyledLink> {/* ✅ Correct path */}
          </TabButton>
          <TabButton onClick={() => handleTabClick("terms")} active={activeTab === "terms"}>
            <StyledLink to="/terms">Terms of Service</StyledLink> {/* ✅ Correct path */}
          </TabButton>
          <TabButton onClick={() => handleTabClick("kontakt")} active={activeTab === "kontakt"}>
            <StyledLink to="/kontakt">Alcatelz</StyledLink>
          </TabButton>
        </nav>
      </Toolbar>
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/tjenester" element={<Services />} />
        <Route path="/prosess" element={<Process />} />
        <Route path="/brukerreise" element={<UserJourney />} />
        <Route path="/security" element={<Security />} /> {/* ✅ FIXED Security Route */}
        <Route path="/terms" element={<TermsOfService />} /> {/* ✅ FIXED Terms Route */}
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
};

export default App;