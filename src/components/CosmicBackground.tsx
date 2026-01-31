"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CosmicBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
            {/* Base Aurora Layer */}
            <div className="absolute inset-0 aurora-bg opacity-40" />

            {/* Interactive Mouse Glow */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-accent-primary/20 rounded-full blur-[100px] pointer-events-none"
                animate={{
                    x: mousePosition.x - 250,
                    y: mousePosition.y - 250,
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />

            {/* Floating Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-tertiary/10 rounded-full blur-[150px] animate-float" />

            {/* Grid Overlay for "Tech" Feel */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/80" />
        </div>
    );
};

export default CosmicBackground;
