"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const AIVisual = dynamic(() => import("./AIVisual"), { ssr: false });

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Visual */}
            <div className="absolute inset-0 z-0">
                <AIVisual />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-blue text-sm font-medium mb-6"
                >
                    <Sparkles size={14} />
                    <span>Architecting the Future of AI</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    I build AI systems that <br />
                    <span className="text-gradient">think, scale, and ship.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10"
                >
                    AI Engineer &bull; Product Manager &bull; LLM & Computer Vision Specialist
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#projects" className="btn-primary flex items-center gap-2">
                        View My Work <ArrowRight size={18} />
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Talk Product & AI
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-foreground/40">Scroll to explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-accent-blue/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
