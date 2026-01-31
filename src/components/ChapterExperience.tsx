"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Terminal, Network, Code2 } from "lucide-react";

const experiences = [
    {
        role: "Associate Project Manager",
        company: "Heybobo.ai",
        period: "AUG 2025 — PRESENT",
        type: "ACTIVE DEPLOYMENT",
        story: "Leading a 25-member engineering team (AI/ML + full-stack + Design) to deliver scalable AI-driven features. Orchestrating complex technical symphonies.",
        highlights: [
            "Spearheading LLM integration projects using Google T5, Qwen, and open-source transformer models",
            "Building NLP and chatbot automation systems",
            "Delivering scalable AI-driven features within product timelines",
            "Cross-functional coordination between AI, full-stack, and design teams"
        ],
        metrics: { team: "25+", scope: "AI/ML", focus: "LLMs" }
    },
    {
        role: "Engineering Coordinator / PM",
        company: "Shinkan Pvt. Ltd.",
        period: "AUG 2024 — JULY 2025",
        type: "PREVIOUS DEPLOYMENT",
        story: "Learned that great AI isn't just about algorithms — it's about building systems that work reliably for real users, at scale.",
        highlights: [
            "Fine-tuned COCO-SSD model for proctored exam environment, improving accuracy",
            "Managed a team of 10+ engineers; improved scalability by 50% through resource optimization",
            "Collaborated with stakeholders to align technical goals with product delivery timelines",
            "Built infrastructure for real-time exam monitoring systems"
        ],
        metrics: { team: "10+", scalability: "+50%", focus: "Vision AI" }
    }
];

const ChapterExperience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="chapter min-h-screen py-32 bg-transparent">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-accent-gold text-xs font-mono tracking-widest mb-6 uppercase">
                        <Briefcase size={14} />
                        05 / Command Logs
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">
                        OPERATIONAL <span className="text-gray-500">HISTORY</span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative md:pl-12"
                        >
                            {/* Connector Line/Dot */}
                            <div className="absolute -left-[5px] md:-left-[5px] top-0 w-2.5 h-2.5 bg-black border border-accent-gold rounded-full z-10" />

                            <div className="grid md:grid-cols-12 gap-8">
                                {/* Meta Data */}
                                <div className="md:col-span-4 flex flex-col gap-2">
                                    <div className="text-xs font-mono text-accent-gold tracking-widest mb-1 flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${index === 0 ? "bg-green-500 animate-pulse" : "bg-gray-600"}`} />
                                        {exp.type}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                                    <div className="text-lg font-mono text-gray-400">{exp.company}</div>
                                    <div className="text-xs text-gray-600 font-mono flex items-center gap-2 mt-2">
                                        <Calendar size={12} />
                                        {exp.period}
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 mt-6">
                                        {Object.entries(exp.metrics).map(([key, value], i) => (
                                            <div key={i} className="bg-white/5 border border-white/5 p-2 text-center">
                                                <div className="text-lg font-bold text-white">{value}</div>
                                                <div className="text-[10px] uppercase text-gray-500">{key}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-8 bg-black/40 border border-white/5 p-8 relative hover:border-accent-gold/20 transition-colors">
                                    {/* Corner Accents */}
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />

                                    <p className="text-gray-400 mb-8 font-light italic border-l-2 border-accent-gold/20 pl-4">
                                        "{exp.story}"
                                    </p>

                                    <div className="space-y-3">
                                        {exp.highlights.map((highlight, i) => (
                                            <div key={i} className="flex gap-4 items-start group">
                                                <Terminal size={16} className="text-accent-gold shrink-0 mt-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                                                <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChapterExperience;
