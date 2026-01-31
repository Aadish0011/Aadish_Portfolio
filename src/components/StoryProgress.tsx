"use client";

import { motion } from "framer-motion";

const StoryProgress = () => {
    // Simply return null or minimal div to keep structure if needed
    // But since context is dark mode galaxy, let's make it a subtle thin line at top
    return (
        <div className="fixed top-0 left-0 right-0 h-px bg-white/10 z-40 pointer-events-none" />
    );
};

export default StoryProgress;
