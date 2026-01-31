"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Command } from "lucide-react";

const chapters = [
    { id: "intro", label: "Start", num: "01" },
    { id: "education", label: "Origins", num: "02" },
    { id: "skills", label: "Systems", num: "03" },
    { id: "projects", label: "Missions", num: "04" },
    { id: "experience", label: "Command", num: "05" },
    { id: "achievements", label: "Medals", num: "06" },
];

const ChapterNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
                        ? "py-4 bg-black/80 backdrop-blur-xl border-white/10"
                        : "py-6 bg-transparent border-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold">
                            AP
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-accent-gold transition-colors">
                            AADISH
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded border border-white/5 backdrop-blur-md">
                        {chapters.map((chapter) => (
                            <Link
                                key={chapter.id}
                                href={`#${chapter.id}`}
                                className="px-4 py-2 rounded text-xs font-mono tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-all uppercase"
                            >
                                <span className="text-accent-gold mr-1">/</span> {chapter.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <Link href="#closing" className="px-5 py-2 bg-white text-black font-bold text-sm tracking-wide hover:bg-accent-gold hover:text-black transition-all flex items-center gap-2">
                            <Command size={14} /> INITIALIZE
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="lg:hidden p-2 text-white hover:text-accent-gold transition-colors"
                    >
                        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "tween", ease: "circOut" }}
                    className="fixed inset-0 z-40 bg-black pt-24 px-6 lg:hidden"
                >
                    <div className="flex flex-col gap-6">
                        {chapters.map((chapter) => (
                            <Link
                                key={chapter.id}
                                href={`#${chapter.id}`}
                                onClick={() => setIsMobileOpen(false)}
                                className="flex items-center gap-4 text-2xl font-bold text-white border-b border-white/10 pb-4 hover:border-accent-gold transition-colors group"
                            >
                                <span className="text-sm font-mono text-accent-gold opacity-60">0{chapter.num}</span>
                                <span className="group-hover:translate-x-2 transition-transform">{chapter.label}</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default ChapterNav;
