"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Cpu, Shield, Users, Globe, ArrowDown } from "lucide-react";

const roles = ["AI Engineer", "Product Leader", "Patent Holder", "Team Builder"];

const ChapterIntro = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2200);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setDisplayText(
                        isDeleting
                            ? currentRole.slice(0, displayText.length - 1)
                            : currentRole.slice(0, displayText.length + 1)
                    );
                },
                isDeleting ? 35 : 75
            );
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    const stats = [
        { icon: Cpu, value: "3", label: "Patents Filed" },
        { icon: Users, value: "40+", label: "Engineers Led" },
        { icon: Globe, value: "2000+", label: "Users Impacted" },
        { icon: Shield, value: "80%", label: "AI Accuracy" },
    ];

    return (
        <section
            id="intro"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Orbital rings decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full border border-black/[0.03] dark:border-white/[0.03] animate-orbit" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[480px] md:h-[480px] lg:w-[550px] lg:h-[550px] rounded-full border border-solar/[0.08] dark:border-solar/[0.05] animate-orbit-reverse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border border-black/[0.03] dark:border-white/[0.04] animate-orbit-slow" />

                {/* Orbital planet dots */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-solar/50 shadow-[0_0_12px_rgba(212,175,55,0.4)]" />
                <div className="absolute bottom-[20%] right-0 w-1.5 h-1.5 rounded-full bg-nebula-blue/50 shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
                <div className="absolute top-[30%] left-0 w-1 h-1 rounded-full bg-nebula-purple/50 shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="section-label mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Available for opportunities
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tight text-white mb-4 leading-[0.95]"
                        >
                            Aadish
                            <br />
                            <span className="text-gradient-solar">Parashar</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-10 mb-8"
                        >
                            <span className="text-xl md:text-2xl text-muted font-light">
                                {displayText}
                                <span className="inline-block w-[2px] h-6 bg-solar ml-1 animate-pulse align-middle" />
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.45 }}
                            className="text-lg text-muted max-w-lg mb-10 leading-relaxed"
                        >
                            I architect{" "}
                            <span className="text-white font-medium">AI systems</span> that
                            perceive, build infrastructure that scales, and lead teams that
                            ship real products.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-7 py-3.5 rounded-lg bg-solar text-void font-display font-bold text-sm tracking-wide hover:bg-solar-bright transition-all duration-300 glow-solar"
                            >
                                View Projects
                            </a>
                            <a
                                href="#experience"
                                className="px-7 py-3.5 rounded-lg border border-white/10 text-white font-display font-bold text-sm tracking-wide hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                            >
                                My Journey
                            </a>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                                    className="glass glass-hover rounded-xl p-6 group"
                                >
                                    <stat.icon
                                        className="text-subtle mb-4 group-hover:text-solar transition-colors duration-300"
                                        size={22}
                                    />
                                    <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted tracking-wider uppercase font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-[11px] text-subtle font-mono tracking-[0.2em] uppercase">
                        Scroll to explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown size={16} className="text-solar/60" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ChapterIntro;
