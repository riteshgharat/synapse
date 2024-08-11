import React, { useState, useEffect } from "react";

import DarkModeSvg from "../../../assets/dark_mode.svg?react";
import LightModeSvg from "../../../assets/light_mode.svg?react";

import localStore from "../../../utils/localStorage";

const DarkModeToggle = () => {
  // state to manage the dark mode
  const [isDark, setIsDark] = useState(localStore.getTheme());

  // useEffect to add the dark theme class to the document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [isDark]);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStore.setTheme(newTheme);
  };

  // dark mode toggle button
  return (
    <button onClick={toggleTheme} className="m-3">
      {isDark ? (
        <DarkModeSvg className="w-6 h-6 fill-PrimarySvg" />
      ) : (
        <LightModeSvg className="w-6 h-6 fill-PrimarySvg" />
      )}
    </button>
  );
};

export default DarkModeToggle;