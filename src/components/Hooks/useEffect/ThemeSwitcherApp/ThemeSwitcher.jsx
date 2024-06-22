import React, { useEffect, useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
    >
      Toggle Theme
    </button>
  );
}

export default ThemeSwitcher;
