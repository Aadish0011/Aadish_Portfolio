"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
    {
        role: "Associate Project Manager",
        company: "Heybobo.ai",
        period: "2024 - Present",
        description: "Orchestrating the development of AI-driven conversational products.",
        highlights: [
            "Led 25-member cross-functional team of engineers and designers",
            "Managed LLM integrations for multi-modal chatbots & automation",
            "Optimized sprint velocity by 30% through technical process overhaul",
            "Directed product roadmap from MVP to phase-1 launch"
        ]
    },
    {
        role: "Engineering Coordinator",
        company: "Shinkan Pvt Ltd",
        period: "2023 - 2024",
        description: "Ownership of AI core systems and engineering excellence.",
        highlights: [
            "Architected real-time proctoring systems using Computer Vision",
            "Scaled AI infrastructure to support concurrent exam sessions",
            "Oversaw model deployment pipeline for edge devices",
            "Mentored junior engineers on ML best practices"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm uppercase tracking-[0.2em] text-accent-blue font-semibold mb-4">Leadership</h2>
                    <h3 className="text-4xl font-bold">Professional <span className="text-gradient">Timeline</span></h3>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-1 pb-2"
                        >
                            <div className="bg-background rounded-[15px] p-8 md:p-12">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 text-accent-blue font-bold text-sm mb-2 uppercase tracking-widest">
                                            <Briefcase size={16} />
                                            {exp.company}
                                        </div>
                                        <h4 className="text-3xl font-bold">{exp.role}</h4>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 text-foreground/40 text-sm font-medium">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-3 gap-12">
                                    <div className="lg:col-span-1">
                                        <p className="text-lg text-foreground/60 italic leading-relaxed">
                                            "{exp.description}"
                                        </p>
                                    </div>
                                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                                        {exp.highlights.map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <CheckCircle2 className="text-accent-blue shrink-0 mt-1" size={18} />
                                                <p className="text-sm text-foreground/70 leading-relaxed font-light">{item}</p>
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

export default Experience;
