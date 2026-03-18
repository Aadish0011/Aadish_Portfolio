"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Terminal, Database, Server, ChevronRight, Cpu } from "lucide-react";

const skillCategories = [
    {
        title: "AI & Machine Learning",
        icon: Brain,
        accent: "#D4AF37",
        skills: [
            { name: "Large Language Models", detail: "Google T5, Qwen, TinyLLaMA, GenAI" },
            { name: "Agentic AI & Automation", detail: "LangGraph, LangChain, Multi-Agent Systems, Tool-Calling" },
            { name: "Computer Vision", detail: "OpenCV, COCO-SSD, Object Detection" },
            { name: "Deep Learning", detail: "TensorFlow, PyTorch, Scikit-learn" },
            { name: "Prompt Engineering", detail: "Structured prompts, Context windows, LLM pipelines" },
            { name: "Data Labeling", detail: "LabelImg, Data Annotation, Big Data" },
        ],
    },
    {
        title: "Languages & Backend",
        icon: Terminal,
        accent: "#3b82f6",
        skills: [
            { name: "Python", detail: "Primary language for AI/ML development" },
            { name: "Java", detail: "Object-oriented programming" },
            { name: "FastAPI", detail: "High-performance Python APIs" },
            { name: "SQL & MySQL", detail: "Database design and queries" },
        ],
    },
    {
        title: "Data & Visualization",
        icon: Database,
        accent: "#8b5cf6",
        skills: [
            { name: "Pandas & NumPy", detail: "Data manipulation and analysis" },
            { name: "Power BI", detail: "Business intelligence dashboards" },
            { name: "Tableau", detail: "Interactive data visualization" },
            { name: "Excel", detail: "Advanced spreadsheet analysis" },
        ],
    },
    {
        title: "Product & Leadership",
        icon: Server,
        accent: "#06b6d4",
        skills: [
            { name: "Project Management", detail: "Agile, Sprints, Roadmapping" },
            { name: "Team Leadership", detail: "40+ engineers, Cross-functional teams" },
            { name: "Technical Documentation", detail: "Specs, PRDs, Architecture docs" },
            { name: "Problem Solving", detail: "Innovation, Coordination, Delivery" },
        ],
    },
];

const ChapterSkills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeIdx, setActiveIdx] = useState(0);

    const activeCategory = skillCategories[activeIdx];

    return (
        <section id="skills" className="relative py-32">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="section-label mb-6">
                        <Cpu size={14} />
                        Skills
                    </div>
                    <h2 className="section-heading mb-6">
                        Technical{" "}
                        <span className="text-gradient-solar">Arsenal</span>
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        The languages, frameworks, and methodologies I leverage to build
                        intelligent and scalable solutions.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar Tabs */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        {skillCategories.map((cat, index) => {
                            const Icon = cat.icon;
                            const isActive = activeIdx === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveIdx(index)}
                                    className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 shrink-0 border ${
                                        isActive
                                            ? "bg-white/[0.04] border-solar/20 text-white shadow-[0_0_20px_rgba(212,175,55,0.04)]"
                                            : "border-transparent text-muted hover:text-white hover:bg-white/[0.02]"
                                    }`}
                                >
                                    <div
                                        className={`p-2 rounded-lg transition-all duration-300 ${
                                            isActive
                                                ? "bg-solar/10 text-solar"
                                                : "bg-white/[0.03] text-subtle"
                                        }`}
                                    >
                                        <Icon size={18} />
                                    </div>
                                    <span className="text-sm font-display font-bold tracking-wide whitespace-nowrap">
                                        {cat.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.3 }}
                                className="glass rounded-2xl p-8 min-h-[420px]"
                            >
                                <div className="flex items-center gap-4 mb-8 pb-5 border-b border-white/[0.06]">
                                    <div
                                        className="p-3 rounded-xl"
                                        style={{
                                            backgroundColor: `${activeCategory.accent}15`,
                                            color: activeCategory.accent,
                                        }}
                                    >
                                        {(() => {
                                            const Icon = activeCategory.icon;
                                            return <Icon size={22} />;
                                        })()}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                                        {activeCategory.title}
                                    </h3>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {activeCategory.skills.map((skill, i) => (
                                        <motion.div
                                            key={`${activeIdx}-${i}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: i * 0.05,
                                            }}
                                            className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group cursor-default"
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-display font-bold text-sm text-white group-hover:text-solar transition-colors duration-300">
                                                    {skill.name}
                                                </span>
                                                <ChevronRight
                                                    size={14}
                                                    className="text-subtle group-hover:text-solar group-hover:translate-x-0.5 transition-all duration-300"
                                                />
                                            </div>
                                            <span className="text-xs text-subtle leading-relaxed">
                                                {skill.detail}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChapterSkills;
