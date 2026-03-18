"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{
    theme: Theme;
    setTheme: (t: Theme) => void;
    toggleTheme: () => void;
} | null>(null);

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
        if (stored === "light" || stored === "dark") {
            setThemeState(stored);
            if (stored === "light") {
                document.documentElement.classList.add("theme-light");
                document.documentElement.classList.remove("dark");
            } else {
                document.documentElement.classList.add("dark");
                document.documentElement.classList.remove("theme-light");
            }
        } else {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("theme-light");
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        if (theme === "light") {
            document.documentElement.classList.add("theme-light");
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("theme-light");
        }
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme, mounted]);

    const setTheme = (t: Theme) => setThemeState(t);
    const toggleTheme = () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
