import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button id="theme-toggle" onClick={toggleTheme} title="تغییر تم">
      {theme === "light" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggleButton;
