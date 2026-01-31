"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Activity, Scan } from "lucide-react";

const projects = [
    {
        title: "Injury Assessment AI System",
        description: "AI-powered healthcare platform for automated injury classification and recovery recommendation.",
        image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800",
        tags: ["LLM", "TinyLLaMA", "FastAPI", "Healthcare"],
        metrics: [
            { label: "Accuracy", value: "80%" },
            { label: "Users", value: "2000+" },
            { label: "Rec. Accuracy", value: "90%" }
        ],
        icon: Activity,
        github: "https://github.com/Aadish0011/Injury_Assessment-with-LLM-Generated-suggestions.git"
    },
    {
        title: "Face Recognition & Anti-Spoofing",
        description: "High-security biometric authentication system with advanced liveness detection.",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
        tags: ["Computer Vision", "TensorFlow", "OpenCV", "Security"],
        metrics: [
            { label: "Impersonation Reduction", value: "90%" },
            { label: "Processing Speed", value: "Real-time" },
            { label: "Model Type", value: "Custom CNN" }
        ],
        icon: Scan,
        github: "https://github.com/Aadish0011/Face_Recognition_Anti-spoof.git"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-sm uppercase tracking-[0.2em] text-accent-cyan font-semibold mb-4">Case Studies</h2>
                        <h3 className="text-4xl font-bold">Featured <span className="text-gradient">Innovations</span></h3>
                    </div>
                    <p className="max-w-md text-foreground/50 text-right md:text-left">
                        A selection of high-impact AI systems designed for scale, security, and real-world intelligence.
                    </p>
                </div>

                <div className="grid lg:grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card overflow-hidden flex flex-col lg:flex-row h-full group"
                        >
                            <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                />

                                {/* Architecture Diagram Animation Overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-accent-cyan/30 rounded-lg animate-pulse" />
                                    <div className="absolute top-1/2 left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
                                    <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-accent-cyan/50 to-transparent" />
                                    <div className="absolute top-10 left-10 text-[8px] font-mono text-accent-cyan/50">SYS_ARCH::NODE_O1</div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r" />
                            </div>
                            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-accent-cyan/10 rounded-xl">
                                        <project.icon className="text-accent-cyan" size={24} />
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] py-1 px-3 border border-white/10 rounded-full text-foreground/40 uppercase tracking-widest bg-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h4 className="text-3xl font-bold mb-4">{project.title}</h4>
                                <p className="text-foreground/60 mb-8 text-lg">{project.description}</p>

                                <div className="grid grid-cols-3 gap-6 mb-10">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i}>
                                            <div className="text-2xl font-bold text-accent-cyan">{metric.value}</div>
                                            <div className="text-[10px] uppercase tracking-wider text-foreground/40 mt-1">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary py-2 px-6 flex items-center gap-2 text-sm"
                                    >
                                        View on GitHub <Github size={16} />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
