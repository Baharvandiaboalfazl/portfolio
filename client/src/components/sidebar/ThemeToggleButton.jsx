import React from "react";
import { useThemeContext } from "../../context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button id="theme-toggle" onClick={toggleTheme} title="تغییر تم">
      {theme === "light" ? (
        <i class="fa-regular fa-moon"></i>
      ) : (
        <i class="fa-regular fa-sun"></i>
      )}
    </button>
  );
};

export default ThemeToggleButton;
