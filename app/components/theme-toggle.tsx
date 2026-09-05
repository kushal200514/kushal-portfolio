"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Important: server and first client render must be identical
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="h-10 w-10 rounded-full bg-grey-1"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-grey-1 text-lg text-black-1 transition-all duration-200 hover:bg-grey-2 dark:bg-[#181818] dark:text-white"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}