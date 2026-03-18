"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            type="button"
            onClick={toggleTheme}
            className={`relative p-2.5 rounded-xl border transition-all duration-300 overflow-hidden ${
                theme === "dark"
                    ? "border-white/[0.08] bg-white/[0.04] text-muted hover:text-solar hover:border-solar/20"
                    : "border-slate-200 bg-white/80 text-slate-500 hover:text-amber-600 hover:border-amber-300 shadow-sm"
            }`}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon size={17} strokeWidth={1.8} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun size={17} strokeWidth={1.8} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
