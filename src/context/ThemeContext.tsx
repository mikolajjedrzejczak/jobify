import React, { createContext, useEffect, useState } from 'react';

// Custom hook for theme context
const useThemeContext = () => {
  const [dark, setDark] = useState<boolean>(() => {
    // Retrieve the value from localStorage, or default to false
    const savedDark = localStorage.getItem('dark');
    return savedDark ? JSON.parse(savedDark) : false;
  });

  // Function to toggle the dark mode
  const toggleDark = () => {
    setDark((prev) => !prev);
  };

  // Save the dark value in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark));
  }, [dark]);

  return {
    dark,
    toggleDark,
  };
};

type useThemeContextType = ReturnType<typeof useThemeContext>;

// Initial context value
const initThemeContext: useThemeContextType = {
  dark: false,
  toggleDark: () => {},
};

// Create the context
export const ThemeContext =
  createContext<useThemeContextType>(initThemeContext);

// Create a provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Use the custom hook
  const theme = useThemeContext();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
