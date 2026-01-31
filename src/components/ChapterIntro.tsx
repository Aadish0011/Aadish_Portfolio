"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, ArrowDown, Cpu, Shield, Globe } from "lucide-react";

const ChapterIntro = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="intro" className="chapter min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-accent-gold text-xs font-mono tracking-widest mb-6"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        SYSTEM_ONLINE
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]"
                    >
                        AADISH<br />
                        <span className="text-gray-500">PARASHAR</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
                    >
                        Architecting intelligence from raw data.
                        I build <span className="text-white font-medium">AI systems</span> that perceive,
                        infrastructure that scales, and products that lead.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#projects" className="px-8 py-3 bg-white text-black font-bold text-sm tracking-wide hover:bg-accent-gold hover:text-black transition-all">
                            VIEW PROJECTS
                        </a>
                        <a href="#experience" className="px-8 py-3 border border-white/20 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-all">
                            SYSTEM LOGS
                        </a>
                    </motion.div>
                </div>

                {/* Right Side Visual/Stats */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="order-1 lg:order-2 relative"
                >
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { icon: Cpu, label: "AI ARCHITECTURE", val: "SCALABLE" },
                            { icon: Shield, label: "PATENTS GRANTED", val: "03" },
                            { icon: Terminal, label: "ENGINEERS LED", val: "25+" },
                            { icon: Globe, label: "USERS IMPACTED", val: "2000+" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-black/40 backdrop-blur-md border border-white/10 p-6 group hover:border-accent-gold/40 transition-colors">
                                <stat.icon className="text-gray-500 mb-4 group-hover:text-accent-gold transition-colors" size={24} />
                                <div className="text-3xl font-bold text-white mb-1 font-mono">{stat.val}</div>
                                <div className="text-xs text-gray-400 tracking-widest uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Decorative Background Element behind stats */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 blur-3xl -z-10" />
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-6 flex items-center gap-4"
                >
                    <div className="h-px w-20 bg-white/20" />
                    <span className="text-xs text-gray-500 font-mono">SCROLL TO INITIALIZE</span>
                </motion.div>
            </div>
        </section>
    );
};

export default ChapterIntro;
