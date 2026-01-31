"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Layout, ShieldCheck } from "lucide-react";

const skillGroups = [
    {
        title: "AI & Machine Learning",
        icon: Cpu,
        skills: [
            { name: "LLMs (TinyLLaMA, T5, Qwen)", level: 95 },
            { name: "Computer Vision (OpenCV, COCO-SSD)", level: 90 },
            { name: "TensorFlow & PyTorch", level: 85 },
            { name: "Model Fine-tuning", level: 88 },
        ],
    },
    {
        title: "Backend & Systems",
        icon: Server,
        skills: [
            { name: "FastAPI & Python", level: 92 },
            { name: "SQL & MySQL", level: 88 },
            { name: "Scalable APIs", level: 90 },
            { name: "Model Deployment", level: 85 },
        ],
    },
    {
        title: "Product & Leadership",
        icon: Layout,
        skills: [
            { name: "Project Management", level: 95 },
            { name: "Stakeholder Alignment", level: 92 },
            { name: "Team Leadership (25+ Eng)", level: 90 },
            { name: "Product Vision", level: 94 },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-[0.2em] text-accent-violet font-semibold mb-4">Expertise</h2>
                    <h3 className="text-4xl font-bold">Technical <span className="text-gradient">Arsenal</span></h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIndex * 0.2 }}
                            className="glass-card p-8 group hover:border-accent-violet/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <group.icon className="text-accent-violet" size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-8">{group.title}</h4>
                            <div className="space-y-6">
                                {group.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-foreground/80 font-medium">{skill.name}</span>
                                            <span className="text-accent-violet font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                                className="h-full bg-gradient-to-r from-accent-violet to-accent-blue"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
