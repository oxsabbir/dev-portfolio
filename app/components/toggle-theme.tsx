"use client";
import { MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved && saved === "system") {
      if (window && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("theme", "dark");
        setTheme("dark");
      } else {
        localStorage.setItem("theme", "light");
        setTheme("light");
      }
    } else {
      setTheme(saved as string);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="px-3 flex items-center">
      <button onClick={toggleTheme} className=" p-1.5 rounded-full">
        {theme === "light" && <MoonIcon size={20} />}
        {theme === "dark" && <Sun size={20} />}
      </button>
    </div>
  );
}
