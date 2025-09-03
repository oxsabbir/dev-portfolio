import { MoonIcon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setTheme("dark");
    document.documentElement.classList.toggle("dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="px-3 mr-2 flex items-center">
      <button onClick={toggleTheme}>
        {theme !== "light" ? <MoonIcon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  );
}
