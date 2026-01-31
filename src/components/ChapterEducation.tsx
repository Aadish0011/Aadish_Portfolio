"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Award, TrendingUp } from "lucide-react";

const education = [
    {
        period: "2021 - 2025",
        degree: "B.E. in Computer Science (AI)",
        school: "Chitkara University",
        location: "Punjab, India",
        highlight: "Where data science met deep learning, and curiosity became expertise.",
        score: "CGPA: 8.68/10",
        achievements: ["Core CSE", "Machine Learning", "Deep Learning", "Computer Vision"]
    },
    {
        period: "2019 - 2021",
        degree: "Higher Secondary (12th - CBSE)",
        school: "Little Angels School",
        location: "India",
        highlight: "Building the foundation with science and mathematics.",
        score: "80.2%",
        achievements: ["Science Stream", "CBSE Board"]
    },
    {
        period: "2017 - 2019",
        degree: "Secondary School (10th - CBSE)",
        school: "Little Angels School",
        location: "India",
        highlight: "Where the love for problem-solving began.",
        score: "88.2%",
        achievements: ["CBSE Board", "Strong Foundation"]
    }
];

const ChapterEducation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="chapter min-h-screen py-32 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-accent-gold text-xs font-mono tracking-widest mb-6 uppercase">
                        <GraduationCap size={14} />
                        02 / The Journey Begins
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">
                        ACADEMIC <span className="text-gray-500">LOGS</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        My fascination with technology started in school,
                        where numbers became logic, and logic became magic.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`relative flex items-center mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 p-1 bg-black border border-accent-gold">
                                <div className="w-2 h-2 bg-accent-gold" />
                            </div>

                            {/* Content card */}
                            <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                                <div className="glass-dark p-8 group hover:border-accent-gold/50 transition-colors">
                                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-2 text-xs font-mono text-accent-gold">
                                            <Calendar size={12} />
                                            {item.period}
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1 bg-white/5 text-xs text-white border border-white/5">
                                            <TrendingUp size={12} />
                                            {item.score}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-white">{item.degree}</h3>
                                    <p className="text-gray-400 mb-1">{item.school}</p>

                                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-6 uppercase tracking-wider">
                                        <MapPin size={12} />
                                        {item.location}
                                    </div>

                                    <p className="text-gray-300 mb-6 italic text-sm border-l-2 border-accent-gold/20 pl-4 py-1">
                                        "{item.highlight}"
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.achievements.map((ach, i) => (
                                            <span key={i} className="flex items-center gap-1 text-[10px] uppercase tracking-wider bg-white/5 border border-white/5 text-gray-400 px-2 py-1 hover:text-white hover:border-white/20 transition-colors">
                                                <Award size={10} />
                                                {ach}
                                            </span>
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

export default ChapterEducation;
