import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [isDarkMode]);

  const handleDarkModeChange = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return { isDarkMode, handleDarkModeChange };
};
