import React, { createContext, useEffect, useState } from 'react';


const useThemeContext = () => {
  const [dark, setDark] = useState<boolean>(() => {
    
    const savedDark = localStorage.getItem('dark');
    return savedDark ? JSON.parse(savedDark) : false;
  });


  const toggleDark = () => {
    setDark((prev) => !prev);
  };


  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark));
  }, [dark]);

  return {
    dark,
    toggleDark,
  };
};

type useThemeContextType = ReturnType<typeof useThemeContext>;


const initThemeContext: useThemeContextType = {
  dark: false,
  toggleDark: () => {},
};

export const ThemeContext =
  createContext<useThemeContextType>(initThemeContext);


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeContext();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
