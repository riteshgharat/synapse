import React, { useState, useEffect } from "react";

import DarkModeSvg from "../../../assets/dark_mode.svg?react";
import LightModeSvg from "../../../assets/light_mode.svg?react";

const DarkModeToggle = () => {
  // state to manage the dark mode
  const [darkMode, setDarkMode] = useState(false);

  // useEffect to add the dark theme class to the document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [darkMode]);

  // dark mode toggle button
  return (
    <button onClick={() => setDarkMode(!darkMode)} className="m-3">
      {darkMode ? (
        <LightModeSvg className="w-6 h-6 fill-PrimarySvg" />
      ) : (
        <DarkModeSvg className="w-6 h-6 fill-PrimarySvg" />
      )}
    </button>
  );
};

export default DarkModeToggle;
