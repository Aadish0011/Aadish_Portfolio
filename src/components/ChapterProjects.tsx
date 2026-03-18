"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Zap, Github, ExternalLink, Layers } from "lucide-react";

const projects = [
    {
        title: "Injury Assessment AI",
        tagline: "Diagnostic Intelligence",
        story:
            "Developed an autonomous system interpreting raw health data. It doesn't just process inputs — it reasons, evaluates risk, and guides users with medical precision.",
        impact: [
            { icon: Target, label: "2000+ Users Analyzed", value: "2K+" },
            { icon: Zap, label: "80% Diagnostic Accuracy", value: "80%" },
            { icon: Shield, label: "Real-Time Triage", value: "Live" },
        ],
        tech: ["TinyLLaMA", "FastAPI", "Python", "Health-AI"],
        github:
            "https://github.com/Aadish0011/Injury_Assessment-with-LLM-Generated-suggestions.git",
    },
    {
        title: "Face Recognition & Anti-Spoofing",
        tagline: "Biometric Security Layer",
        story:
            "Constructed a defense layer against digital impersonation. Using custom CNNs, it distinguishes living subjects from static deepfakes in milliseconds.",
        impact: [
            { icon: Shield, label: "90% Fraud Prevention", value: "90%" },
            { icon: Zap, label: "Sub-Second Latency", value: "<1s" },
            { icon: Target, label: "Liveness Detection", value: "Live" },
        ],
        tech: ["TensorFlow", "OpenCV", "Conv-Nets", "Security"],
        github:
            "https://github.com/Aadish0011/Face_Recognition_Anti-spoof.git",
    },
];

const ChapterProjects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="relative py-32">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="section-label mb-6">
                        <Layers size={14} />
                        Projects
                    </div>
                    <h2 className="section-heading mb-6">
                        Featured{" "}
                        <span className="text-gradient-solar">Work</span>
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Deploying intelligent agents to solve complex, real-world
                        problems with measurable impact.
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                            className="glass rounded-2xl overflow-hidden group hover:border-solar/15 transition-all duration-500"
                        >
                            <div className="grid lg:grid-cols-5 gap-0">
                                {/* Content */}
                                <div className="lg:col-span-3 p-8 lg:p-10 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-solar tracking-wider uppercase bg-solar/[0.06] border border-solar/10">
                                        <Shield size={11} />
                                        {project.tagline}
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted leading-relaxed border-l-2 border-white/10 pl-5">
                                        {project.story}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-[11px] font-mono font-medium rounded-md bg-white/[0.04] text-muted border border-white/[0.06] uppercase tracking-wider"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 pt-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-solar text-void font-display font-bold text-xs tracking-wider hover:bg-solar-bright transition-all duration-300"
                                        >
                                            <Github size={14} />
                                            Source Code
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-white font-display font-bold text-xs tracking-wider hover:bg-white/5 transition-all duration-300"
                                        >
                                            <ExternalLink size={14} />
                                            Details
                                        </a>
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="lg:col-span-2 bg-white/[0.015] border-t lg:border-t-0 lg:border-l border-white/[0.06] p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
                                    <div className="absolute -top-8 -right-8 opacity-[0.03] pointer-events-none">
                                        <Target size={160} className="text-white" />
                                    </div>
                                    <div className="text-xs font-display font-bold text-subtle uppercase tracking-[0.15em] mb-8">
                                        Impact Metrics
                                    </div>
                                    <div className="space-y-5">
                                        {project.impact.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-4 group/metric"
                                            >
                                                <div className="p-2 rounded-lg bg-solar/[0.06] text-solar group-hover/metric:bg-solar/10 transition-colors duration-300">
                                                    <item.icon size={16} />
                                                </div>
                                                <div>
                                                    <div className="text-xl font-display font-bold text-white">
                                                        {item.value}
                                                    </div>
                                                    <div className="text-xs text-subtle">
                                                        {item.label}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChapterProjects;
