"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass-nav" : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    AADISH<span className="text-accent-blue">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
                    <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-foreground transition-colors">Skills</Link>
                    <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
                    <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
                    <Link href="#contact" className="btn-secondary py-2 px-5">Get in Touch</Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
