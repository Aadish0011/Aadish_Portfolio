"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Terminal, MessageCircle, ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "assistant", content: "System Online.\n\nI am the automated assistant for this portfolio. Request data regarding Aadish's protocol, missions, or technical specs." }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const portfolioKeywords = [
        "project", "projects", "work", "portfolio", "experience", "job", "career",
        "skill", "skills", "tech", "technology", "python", "java", "ai", "ml", "machine learning",
        "llm", "computer vision", "tensorflow", "pytorch", "fastapi", "patent", "patents",
        "achievement", "achievements", "team", "leadership", "manager", "heybobo", "shinkan",
        "injury", "face recognition", "education", "about", "aadish", "who", "what", "background",
        "college", "university", "chitkara", "study", "studied", "degree", "good", "proficient",
        "know", "does", "can", "sql", "data", "power bi", "tableau", "chess", "medal"
    ];

    const responses: Record<string, string> = {
        "python": "CONFIRMED: Python is the primary language directive.\n\nUtilized for:\n- AI/ML (TensorFlow, PyTorch)\n- Backend (FastAPI)\n- Data (Pandas, NumPy)\n- LLM Deployment",
        "java": "CONFIRMED: Java protocol available.\n\nExperience verified in object-oriented programming alongside primary stack.",
        "sql": "CONFIRMED: SQL proficiency detected.\n\nDatabase design and complex query execution for AI applications and backend systems.",
        "projects": "MISSION LOGS RETRIEVED:\n\n1. Injury Assessment AI\n- 2000+ users impacted\n- 80% accuracy\n\n2. Face Recognition\n- 90% fraud prevention\n- Real-time defense layer",
        "experience": "OPERATIONAL HISTORY:\n\nCURRENT: Associate Project Manager @ Heybobo.ai\n- Leading 25-unit engineering team\n- LLM Integration focus\n\nPREVIOUS: Engineering Coordinator @ Shinkan\n- Managed 10+ engineers\n- Scaled systems by 50%",
        "skills": "ARSENAL SCAN COMPLETE:\n\nLANGUAGES: Python, Java, SQL\nCORE AI: TensorFlow, PyTorch, OpenCV, LLMs\nDATA: Pandas, Power BI\nBACKEND: FastAPI, MySQL",
        "patents": "INTELLECTUAL PROPERTY:\n\n3 Patents Published.\nIncludes Govt. Funded 'Shoe Sole Innovation'.",
        "education": "ACADEMIC LOGS:\n\nB.E. CSE (AI) - Chitkara University\nCGPA: 8.68/10\n\nPrior Education: Little Angels School (CBSE)",
        "about": "PROFILE SCAN: Aadish Parashar\n\n- AI Engineer / Leader\n- Based in India\n- Leading 25+ engineers\n- 3 Patents\n- Competitive Chess Player",
        "chess": "STRATEGY SUBROUTINE:\n\nCompetitive Chess Player.\n- Silver @ IIT Mandi\n- Gold @ JUIT\n- Bronze @ IIT Ropar",
        "achievements": "DISTINCTIONS:\n\n- 3 Patents\n- Mutliple Chess Medals\n- Engineering Leadership (25+ team)",
        "contact": "COMMUNICATION CHANNELS:\n\nEmail: aadishparashar001@gmail.com\nLinkedIn: linkedin.com/in/aadishparashar001\nPhone: 9588188463"
    };

    const isPortfolioRelated = (text: string): boolean => {
        const lowerText = text.toLowerCase();
        return portfolioKeywords.some(keyword => lowerText.includes(keyword));
    };

    const getResponse = (text: string): string => {
        const lowerText = text.toLowerCase();

        // Specific skill checks FIRST
        if (lowerText.includes("python")) return responses.python;
        if (lowerText.includes("java") && !lowerText.includes("javascript")) return responses.java;
        if (lowerText.includes("sql") || lowerText.includes("database")) return responses.sql;

        // Then general categories
        if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("injury") || lowerText.includes("face recognition")) {
            return responses.projects;
        }
        if (lowerText.includes("experience") || lowerText.includes("job") || lowerText.includes("career") || lowerText.includes("heybobo") || lowerText.includes("shinkan")) {
            return responses.experience;
        }
        if (lowerText.includes("skill") || lowerText.includes("tech") || lowerText.includes("know") || lowerText.includes("good") || lowerText.includes("proficient") || lowerText.includes("tensorflow") || lowerText.includes("pytorch")) {
            return responses.skills;
        }
        if (lowerText.includes("patent") || lowerText.includes("achievement") || lowerText.includes("award")) {
            return responses.achievements;
        }
        if (lowerText.includes("chess") || lowerText.includes("medal") || lowerText.includes("iit")) {
            return responses.chess;
        }
        if (lowerText.includes("education") || lowerText.includes("study") || lowerText.includes("college") || lowerText.includes("university") || lowerText.includes("chitkara") || lowerText.includes("degree") || lowerText.includes("school")) {
            return responses.education;
        }
        if (lowerText.includes("contact") || lowerText.includes("reach") || lowerText.includes("email") || lowerText.includes("phone") || lowerText.includes("linkedin")) {
            return responses.contact;
        }
        if (lowerText.includes("about") || lowerText.includes("who") || lowerText.includes("aadish") || lowerText.includes("himself") || lowerText.includes("introduce")) {
            return responses.about;
        }

        // Default to about if nothing specific matched
        return responses.about;
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        const userInput = input;
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            let reply: string;

            if (isPortfolioRelated(userInput)) {
                reply = getResponse(userInput);
            } else {
                reply = "QUERY UNRECOGNIZED. Rerouting to manual contact channels for deeper inquiry.";
            }

            setMessages(prev => [...prev, { role: "assistant", content: reply }]);

            if (!isPortfolioRelated(userInput)) {
                setTimeout(() => {
                    setMessages(prev => [...prev, { role: "whatsapp", content: "WHATSAPP_REDIRECT" }]);
                }, 400);
            }

            setIsTyping(false);
        }, 600);
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[360px] h-[480px] bg-black border border-accent-gold/30 rounded-lg shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-accent-gold/20 bg-accent-gold/5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                                    <Terminal size={18} />
                                </div>
                                <div>
                                    <div className="font-mono font-bold text-white text-sm">AI_AID_V1</div>
                                    <div className="text-[10px] text-accent-gold/80 font-mono flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                        ONLINE
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    {msg.role === "whatsapp" ? (
                                        <a
                                            href="https://wa.me/919588188463"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-3 bg-green-900/20 text-green-400 border border-green-500/30 hover:bg-green-900/40 transition-colors uppercase tracking-wider"
                                        >
                                            <MessageCircle size={16} />
                                            Open Secure Channel
                                            <ExternalLink size={12} />
                                        </a>
                                    ) : (
                                        <div className={`max-w-[85%] p-3 border ${msg.role === "user"
                                            ? "bg-accent-gold/10 border-accent-gold/30 text-accent-gold text-right"
                                            : "bg-zinc-900/50 border-white/10 text-gray-300"
                                            }`}>
                                            <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-zinc-900/50 p-3 border border-white/10 flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
                                        <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
                                        <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-accent-gold/20 bg-black">
                            <div className="relative flex items-center">
                                <span className="absolute left-3 text-accent-gold/50 font-mono">{">"}</span>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Execute query..."
                                    className="w-full bg-zinc-900/50 border border-white/10 py-3 pl-8 pr-12 text-xs font-mono text-white focus:outline-none focus:border-accent-gold/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 px-2 text-accent-gold hover:text-white transition-colors"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-black border border-accent-gold/50 text-accent-gold shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center hover:bg-accent-gold hover:text-black transition-all rounded-full"
            >
                {isOpen ? <X size={24} /> : <Bot size={24} />}
            </motion.button>
        </div>
    );
};

export default AIAssistant;
