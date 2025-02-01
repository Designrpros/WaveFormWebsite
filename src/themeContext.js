import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(getSystemTheme());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const changeTheme = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", changeTheme);
    return () => mediaQuery.removeEventListener("change", changeTheme);
  }, []);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};