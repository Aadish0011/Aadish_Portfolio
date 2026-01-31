"use client";

import { motion } from "framer-motion";
import { Award, FileText, Trophy, Star } from "lucide-react";

const achievements = [
    {
        title: "3 Patents Granted",
        category: "Intellectual Property",
        description: "Includes one government-funded patent for innovative AI application.",
        icon: FileText,
        color: "text-accent-blue",
        bg: "bg-accent-blue/10"
    },
    {
        title: "Chess Medalist",
        category: "Strategic Excellence",
        description: "Multi-level chess medals at IIT level competitions.",
        icon: Trophy,
        color: "text-accent-violet",
        bg: "bg-accent-violet/10"
    },
    {
        title: "AI Project Excellence",
        category: "Technical Recognition",
        description: "Recognition for developing high-accuracy assessment systems.",
        icon: Star,
        color: "text-accent-cyan",
        bg: "bg-accent-cyan/10"
    }
];

const Achievements = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform duration-500`}>
                                <item.icon className={item.color} size={32} />
                            </div>
                            <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] mb-3">{item.category}</span>
                            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                            <p className="text-foreground/50 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
