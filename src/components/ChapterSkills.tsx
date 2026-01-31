"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Server, Database, Brain, ChevronRight, Terminal } from "lucide-react";

const skillCategories = [
    {
        title: "AI & Machine Learning",
        icon: Brain,
        skills: [
            { name: "Large Language Models", detail: "Google T5, Qwen, TinyLLaMA, GenAI" },
            { name: "Agentic AI & Flows", detail: "LangGraph, LangChain, Multi-Agent Systems" },
            { name: "Computer Vision", detail: "OpenCV, COCO-SSD, Object Detection" },
            { name: "Deep Learning", detail: "TensorFlow, PyTorch, Scikit-learn" },
            { name: "Data Labeling", detail: "LabelImg, Data Annotation, Big Data" },
        ]
    },
    {
        title: "Languages & Backend",
        icon: Terminal,
        skills: [
            { name: "Python", detail: "Primary language for AI/ML development" },
            { name: "Java", detail: "Object-oriented programming" },
            { name: "FastAPI", detail: "High-performance Python APIs" },
            { name: "SQL & MySQL", detail: "Database design and queries" },
        ]
    },
    {
        title: "Data & Visualization",
        icon: Database,
        skills: [
            { name: "Pandas & NumPy", detail: "Data manipulation and analysis" },
            { name: "Power BI", detail: "Business intelligence dashboards" },
            { name: "Tableau", detail: "Interactive data visualization" },
            { name: "Excel", detail: "Advanced spreadsheet analysis" },
        ]
    },
    {
        title: "Product & Leadership",
        icon: Server,
        skills: [
            { name: "Project Management", detail: "Agile, Sprints, Roadmapping" },
            { name: "Team Leadership", detail: "25+ engineers, Cross-functional" },
            { name: "Technical Documentation", detail: "Google Docs, Sheets, Clear specs" },
            { name: "Problem Solving", detail: "Innovation, Coordination, Delivery" },
        ]
    }
];

const ChapterSkills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section id="skills" className="chapter min-h-screen py-32 bg-black/50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-accent-gold text-xs font-mono tracking-widest mb-6 uppercase">
                        <Cpu size={14} />
                        03 / Core Systems
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">
                        TECHNICAL <span className="text-gray-500">ARSENAL</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        The languages, frameworks, and methodologies I leverage to build
                        intelligent and scalable solutions.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar / Tabs */}
                    <div className="lg:col-span-4 flex flex-col gap-2">
                        {skillCategories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIdx(index)}
                                className={`flex items-center gap-4 p-4 text-left transition-all border-l-2 ${activeIdx === index
                                    ? "border-accent-gold bg-white/5 text-white"
                                    : "border-white/10 text-gray-500 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <cat.icon size={20} className={activeIdx === index ? "text-accent-gold" : "text-gray-600"} />
                                <span className="font-mono text-sm tracking-wider uppercase font-bold">{cat.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8">
                        <motion.div
                            key={activeIdx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-black/40 border border-white/10 p-8 min-h-[400px]"
                        >
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
                                <div className="p-3 bg-accent-gold/10 text-accent-gold">
                                    {(() => {
                                        const Icon = skillCategories[activeIdx].icon;
                                        return <Icon size={24} />;
                                    })()}
                                </div>
                                <h3 className="text-2xl font-bold text-white font-mono uppercase tracking-widest">
                                    {skillCategories[activeIdx].title}
                                </h3>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {skillCategories[activeIdx].skills.map((skill, i) => (
                                    <div key={i} className="p-4 bg-white/5 border border-white/5 hover:border-accent-gold/30 transition-colors group">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="font-bold text-white text-sm tracking-wide group-hover:text-accent-gold transition-colors">
                                                {skill.name}
                                            </div>
                                            <ChevronRight size={14} className="text-gray-600 group-hover:text-accent-gold group-hover:translate-x-1 transition-transform" />
                                        </div>
                                        <div className="text-xs text-gray-500 font-mono">
                                            {skill.detail}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChapterSkills;
