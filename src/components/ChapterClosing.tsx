"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, FileUser, MessageCircle, ArrowRight, Radio } from "lucide-react";

const ChapterClosing = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="closing" className="chapter min-h-screen py-32 relative overflow-hidden flex flex-col justify-between bg-transparent">
            <div className="max-w-4xl mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-accent-gold text-xs font-mono tracking-widest mb-8 uppercase">
                        <Radio size={14} className="animate-pulse" />
                        07 / End Transmission
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white tracking-tighter">
                        READY TO <br />
                        <span className="text-gray-500">COLLABORATE?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
                        Engineering output requires input. Send a signal.
                        Let's build something scalable together.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                        <a
                            href="mailto:aadishparashar001@gmail.com"
                            className="px-8 py-4 bg-white text-black font-bold text-sm tracking-widest hover:bg-accent-gold transition-colors w-full sm:w-auto flex items-center justify-center gap-3 uppercase"
                        >
                            <Mail size={18} />
                            <span>Send Email</span>
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="https://wa.me/919588188463"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-3 uppercase"
                        >
                            <MessageCircle size={18} />
                            WhatsApp
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-8 mb-20">
                        {[
                            { icon: Linkedin, href: "https://linkedin.com/in/aadishparashar001", label: "LINKEDIN" },
                            { icon: FileUser, href: "https://github.com/Aadish0011", label: "GITHUB" },
                            { icon: Mail, href: "mailto:aadishparashar001@gmail.com", label: "EMAIL" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-2"
                            >
                                <div className="w-14 h-14 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-accent-gold transition-all">
                                    <social.icon size={24} />
                                </div>
                                <span className="text-[10px] font-mono text-gray-600 group-hover:text-accent-gold transition-colors tracking-widest">{social.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* Closing Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-8 py-6 border border-white/5 bg-white/5"
                    >
                        <p className="text-lg italic text-gray-400 font-light">
                            "The best systems are built by those who understand both the code and the human at the end of the terminal."
                        </p>
                        <p className="mt-4 font-bold text-accent-gold font-mono uppercase tracking-widest text-sm">— Aadish Parashar</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="w-full border-t border-white/5 py-8 mt-12 bg-black">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-mono uppercase tracking-widest">
                    <div>© 2026 Aadish Parashar. All Systems Nominal.</div>
                    <div className="flex gap-8">
                        <a href="#intro" className="hover:text-white transition-colors">Return to Top</a>
                        <a href="https://github.com/Aadish0011" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub Repository</a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ChapterClosing;
