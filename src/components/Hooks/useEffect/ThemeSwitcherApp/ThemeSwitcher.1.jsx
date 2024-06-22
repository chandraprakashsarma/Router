import React, { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <div>ThemeSwitcher</div>;
}
