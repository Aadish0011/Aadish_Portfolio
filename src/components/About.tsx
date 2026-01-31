"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Users } from "lucide-react";

const timeline = [
    { year: "2021", role: "Engineer", description: "Turning raw data into code.", active: true },
    { year: "2023", role: "AI Specialist", description: "Architecting intelligent systems.", active: true },
    { year: "2025", role: "Product Leader", description: "Bridging AI, Engineering & Business.", active: true },
];

const About = () => {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm uppercase tracking-[0.2em] text-accent-blue font-semibold mb-4">Core Identity</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            A visionary builder at the intersection of <span className="text-gradient">intelligence and impact.</span>
                        </h3>
                        <div className="space-y-6 text-lg text-foreground/60 leading-relaxed">
                            <p>
                                I don't just build models; I build products. My journey began with a deep fascination for turning raw data
                                into intelligent actions, which eventually led me to architecting large-scale AI systems that real people use.
                            </p>
                            <p>
                                As an Associate Project Manager and AI Engineer, I specialize in bridging the gap between cutting-edge LLM
                                research and viable business products. I've led teams of 25+ engineers, ensuring that technical excellence
                                always meets product-market fit.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-12">
                            {[
                                { icon: Brain, label: "AI Systems" },
                                { icon: Rocket, label: "Scale" },
                                { icon: Users, label: "Leadership" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 p-4 glass-card">
                                    <item.icon className="text-accent-blue" size={24} />
                                    <span className="text-xs font-medium text-foreground/80">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute left-[15px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
                        <div className="space-y-12 relative">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex gap-8 items-start"
                                >
                                    <div className="relative z-10">
                                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center bg-background ${item.active ? "border-accent-blue" : "border-white/10"
                                            }`}>
                                            <div className={`w-2 h-2 rounded-full ${item.active ? "bg-accent-blue" : "bg-white/10"}`} />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-accent-blue mb-1 block uppercase tracking-wider">{item.year}</span>
                                        <h4 className="text-xl font-bold mb-2">{item.role}</h4>
                                        <p className="text-foreground/50 text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
