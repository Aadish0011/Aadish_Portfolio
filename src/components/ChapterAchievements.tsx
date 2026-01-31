"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, FileText, Medal, Sparkles, Star, Crown } from "lucide-react";

const achievements = [
    {
        icon: FileText,
        title: "3 Patents Published",
        subtitle: "Including Govt. Funded 'Shoe Sole Innovation'",
        description: "Innovations in AI-powered assessment systems that are now protected intellectual property.",
        type: "Intellectual Property",
        color: "text-accent-gold"
    },
    {
        icon: Medal,
        title: "Chess Excellence",
        subtitle: "IIT-Level Competition Medals",
        description: "Silver Medalist at IIT Mandi, Gold at JUIT, Bronze at IIT Ropar. Strategic thinking on 64 squares.",
        type: "Side Quest",
        color: "text-white"
    },
    {
        icon: Star,
        title: "Technical Leadership",
        subtitle: "Project & Team Coordination",
        description: "Leading engineering teams, building communities, and turning student projects into real-world applications.",
        type: "Community",
        color: "text-gray-400"
    }
];

const funFacts = [
    { emoji: "♟️", fact: "Chess strategist" },
    { emoji: "🚀", fact: "Ships fast" },
    { emoji: "📊", fact: "Data driven" },
    { emoji: "🤝", fact: "Team player" }
];

const ChapterAchievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="achievements" className="chapter min-h-screen py-32 bg-transparent">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-accent-gold text-xs font-mono tracking-widest mb-6 uppercase">
                        <Trophy size={14} />
                        06 / Honors & Stats
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">
                        ACQUIRED <span className="text-gray-500">DISTINCTIONS</span>
                    </h2>
                </motion.div>

                {/* Achievement Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900/30 border border-white/5 p-8 group hover:border-accent-gold/40 transition-all cursor-crosshair"
                        >
                            <div className="w-12 h-12 mb-6 flex items-center justify-center bg-white/5 border border-white/5 group-hover:bg-accent-gold/10 group-hover:text-accent-gold transition-colors text-gray-400">
                                <achievement.icon size={24} />
                            </div>

                            <span className="text-[10px] font-mono font-bold text-accent-gold uppercase tracking-widest mb-3 block">
                                {achievement.type}
                            </span>

                            <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                            <p className="text-xs text-gray-400 font-mono mb-6 uppercase tracking-wider">{achievement.subtitle}</p>
                            <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Chess Medals Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border border-white/10 bg-black/50 p-8 md:p-12 mb-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Crown size={150} className="text-white" />
                    </div>

                    <div className="flex items-center gap-4 mb-8 justify-center z-10 relative">
                        <Crown className="text-accent-gold" size={24} />
                        <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Tournament Results</h3>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 relative z-10">
                        {[
                            { place: "SILVER", event: "IIT Mandi" },
                            { place: "GOLD", event: "JUIT" },
                            { place: "BRONZE", event: "IIT Ropar" }
                        ].map((medal, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-6 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className={`text-4xl font-bold mb-2 ${medal.place === "GOLD" ? "text-yellow-400" :
                                    medal.place === "SILVER" ? "text-gray-300" : "text-amber-600"
                                    }`}>
                                    {i === 1 ? "1st" : i === 0 ? "2nd" : "3rd"}
                                </div>
                                <p className="font-mono font-bold text-white text-sm tracking-widest">{medal.place}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">AT {medal.event}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Fan Facts / Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {funFacts.map((item, i) => (
                        <div key={i} className="bg-black border border-white/10 p-4 flex flex-col items-center justify-center gap-2 hover:border-accent-gold/50 transition-colors group">
                            <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{item.emoji}</span>
                            <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{item.fact}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ChapterAchievements;
