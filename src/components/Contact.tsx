"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, FileUser, ChevronRight } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-20 relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h3 className="text-4xl md:text-6xl font-bold mb-8">
                            Let’s build intelligent <br />
                            <span className="text-gradient">products that matter.</span>
                        </h3>
                        <p className="text-foreground/60 text-lg mb-12 max-w-xl mx-auto">
                            Whether you're looking for an AI expert to scale your systems or a product leader to bridge vision and execution, I'm ready for the challenge.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="mailto:contact@aadish.ai" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 py-4 px-8 text-lg">
                                <Mail size={20} />
                                Email Me
                            </a>
                            <div className="flex gap-4">
                                <a href="#" className="p-4 glass-card hover:bg-white/10 transition-colors">
                                    <Linkedin size={24} className="text-accent-blue" />
                                </a>
                                <a href="#" className="p-4 glass-card hover:bg-white/10 transition-colors flex items-center gap-3">
                                    <FileUser size={24} className="text-accent-violet" />
                                    <span className="font-bold text-sm">Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-foreground/30 text-xs font-medium uppercase tracking-[0.2em]">
                    <div>© 2026 Aadish Parashar. All rights reserved.</div>
                    <div className="flex gap-12">
                        <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                        <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                        <a href="#" className="hover:text-foreground transition-colors">Substack</a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
