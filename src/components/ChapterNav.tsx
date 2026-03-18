"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

const chapters = [
    { id: "intro", label: "Home" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
];

const ChapterNav = () => {
    const { theme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("intro");
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const isDark = theme === "dark";

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        chapters.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
                    isScrolled
                        ? isDark
                            ? "py-3 border-b border-white/[0.06]"
                            : "py-3 border-b border-slate-200/80"
                        : "py-5 border-b border-transparent"
                }`}
                style={{
                    backgroundColor: isScrolled
                        ? isDark
                            ? "rgba(3, 0, 20, 0.8)"
                            : "rgba(248, 250, 252, 0.9)"
                        : "transparent",
                    backdropFilter: isScrolled ? "blur(20px) saturate(1.2)" : "none",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-solar to-solar-bright" />
                            <div className="relative w-full h-full flex items-center justify-center font-display font-bold text-sm text-void">
                                AP
                            </div>
                        </div>
                        <span className="text-lg font-display font-bold tracking-tight text-slate-900 dark:text-white hidden sm:block group-hover:text-solar transition-colors duration-300">
                            AADISH
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-0.5">
                        {chapters.map((chapter) => (
                            <Link
                                key={chapter.id}
                                href={`#${chapter.id}`}
                                className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-md ${
                                    activeSection === chapter.id
                                        ? "text-solar"
                                        : "text-slate-600 dark:text-muted hover:text-slate-900 dark:hover:text-white"
                                }`}
                            >
                                {chapter.label}
                                {activeSection === chapter.id && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-solar rounded-full"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Link
                            href="#closing"
                            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-solar text-void font-display font-bold text-sm tracking-wide hover:bg-solar-bright transition-all duration-300 glow-solar"
                        >
                            Let&apos;s Talk
                            <ArrowUpRight size={14} />
                        </Link>

                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="lg:hidden p-2 text-slate-700 dark:text-white hover:text-solar transition-colors"
                            aria-label="Toggle navigation menu"
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                        style={{
                            backgroundColor: isDark ? "rgba(3, 0, 20, 0.95)" : "rgba(248, 250, 252, 0.98)",
                            backdropFilter: "blur(24px)",
                        }}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {chapters.map((chapter, i) => (
                                <motion.div
                                    key={chapter.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <Link
                                        href={`#${chapter.id}`}
                                        onClick={() => setIsMobileOpen(false)}
                                        className={`text-3xl font-display font-bold tracking-tight transition-colors duration-300 ${
                                            activeSection === chapter.id
                                                ? "text-solar"
                                                : "text-slate-900 dark:text-white hover:text-solar"
                                        }`}
                                    >
                                        {chapter.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    href="#closing"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="mt-6 inline-flex px-8 py-3 bg-solar text-void font-display font-bold text-lg rounded-lg"
                                >
                                    Let&apos;s Talk
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChapterNav;
