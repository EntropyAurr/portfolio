import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

function ThemeToggle({ isScrolled }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  function ToggleTheme() {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  return (
    <button onClick={ToggleTheme} className={cn("fixed right-5 z-50 rounded-full transition-all duration-300 focus:outline-hidden", isScrolled ? "top-5 md:top-3" : "top-7 md:top-5")}>
      {isDarkMode ? <Sun className="h-6.5 w-6.5 text-yellow-300" /> : <Moon className="h-6.5 w-6.5 text-blue-700" />}
    </button>
  );
}

export default ThemeToggle;
