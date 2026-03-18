"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const StoryProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
            style={{
                scaleX,
                background:
                    "linear-gradient(90deg, transparent, #D4AF37 30%, #F1C40F 50%, #D4AF37 70%, transparent)",
            }}
        />
    );
};

export default StoryProgress;
