"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Zap, Github, ExternalLink, Terminal } from "lucide-react";

const projects = [
    {
        title: "Injury Assessment AI",
        tagline: "DIAGNOSTIC INTELLIGENCE",
        story: "Developed an autonomous system interpreting raw health data. It doesn't just process inputs—it reasons, evaluates risk, and guides users with medical precision.",
        impact: [
            { icon: Target, label: "2000+ USERS ANALYZED" },
            { icon: Zap, label: "80% DIAGNOSTIC ACCURACY" },
            { icon: Shield, label: "REAL-TIME TRIAGE" }
        ],
        tech: ["TINYLLAMA", "FASTAPI", "PYTHON", "HEALTH-AI"],
        github: "https://github.com/Aadish0011/Injury_Assessment-with-LLM-Generated-suggestions.git"
    },
    {
        title: "Face Recognition & Anti-Spoofing",
        tagline: "BIOMETRIC SECURITY LAYER",
        story: "Constructed a defense layer against digital impersonation. Using custom CNNs, it distinguishes living subjects from static deepfakes in milliseconds.",
        impact: [
            { icon: Shield, label: "90% FRAUD PREVENTION" },
            { icon: Zap, label: "SUB-SECOND LATENCY" },
            { icon: Target, label: "LIVENESS DETECTION" }
        ],
        tech: ["TENSORFLOW", "OPENCV", "CONV-NETS", "SECURITY"],
        github: "https://github.com/Aadish0011/Face_Recognition_Anti-spoof.git"
    }
];

const ChapterProjects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="chapter min-h-screen py-32 bg-transparent">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-accent-gold text-xs font-mono tracking-widest mb-6 uppercase">
                        <Terminal size={14} />
                        04 / Mission Logs
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">
                        EXECUTED <span className="text-gray-500">PROTOCOLS</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Deploying intelligent agents to solve complex, real-world parameters.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-zinc-900/30 border border-white/5 p-8 lg:p-12 hover:border-accent-gold/40 transition-colors group"
                        >
                            <div className="grid lg:grid-cols-2 gap-12">
                                {/* Story Side */}
                                <div className="space-y-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent-gold/20 text-accent-gold text-xs font-mono tracking-widest uppercase bg-accent-gold/5">
                                        <Shield size={12} />
                                        {project.tagline}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h3>

                                    <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6 font-light">
                                        {project.story}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 text-[10px] font-mono font-bold bg-white/5 text-gray-300 border border-white/5 uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-white text-black font-bold text-xs tracking-widest hover:bg-accent-gold transition-colors flex items-center gap-2"
                                        >
                                            <Github size={16} />
                                            SOURCE CODE
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 border border-white/20 text-white font-bold text-xs tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2"
                                        >
                                            <ExternalLink size={16} />
                                            ANALYZE
                                        </a>
                                    </div>
                                </div>

                                {/* Impact Side */}
                                <div className="flex flex-col justify-center bg-black/40 p-8 border border-white/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Target size={100} className="text-white" />
                                    </div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8 z-10">
                                        Performance Metrics
                                    </div>
                                    <div className="space-y-4 z-10">
                                        {project.impact.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-5 p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                                            >
                                                <item.icon size={20} className="text-accent-gold" />
                                                <span className="text-sm font-mono font-bold text-gray-300 tracking-wider">{item.label}</span>
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

export default ChapterProjects;
