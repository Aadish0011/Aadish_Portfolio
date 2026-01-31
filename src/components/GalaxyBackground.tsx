"use client";

import { useEffect, useRef } from "react";

const GalaxyBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Initialize mouse in center
        mouseRef.current = { x: width / 2, y: height / 2 };

        const stars: { x: number; y: number; z: number; size: number; baseOpacity: number }[] = [];
        const starCount = 300; // Increased count for "all over"

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * 2 + 0.5, // Depth factor for parallax
                size: Math.random() * 1.5,
                baseOpacity: Math.random() * 0.8 + 0.2,
            });
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Calculate parallax offset based on mouse deviation from center
            // "z" factor makes closer stars move faster/more than distant ones (or vice versa depending on desired effect)
            const cx = width / 2;
            const cy = height / 2;
            const mouseX = mouseRef.current.x;
            const mouseY = mouseRef.current.y;

            stars.forEach((star) => {
                // Parallax shift calculation
                // The factor (0.05) controls the sensitivity of the movement
                const dx = (mouseX - cx) * 0.05 * star.z;
                const dy = (mouseY - cy) * 0.05 * star.z;

                let x = star.x - dx;
                let y = star.y - dy;

                // Wrap around edges if movement pushes them out
                // We add/subtract width/height with a buffer to keep wrapping smooth
                if (x < 0) x += width;
                if (x > width) x -= width;
                if (y < 0) y += height;
                if (y > height) y -= height;

                // Draw Star
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${star.baseOpacity})`;
                ctx.arc(x, y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Interactive Glow: If mouse is close to star, increase size/opacity or draw line
                const distToMouseX = x - mouseX;
                const distToMouseY = y - mouseY;
                const distance = Math.sqrt(distToMouseX * distToMouseX + distToMouseY * distToMouseY);

                if (distance < 150) {
                    // Draw connection line to cursor
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(212, 175, 55, ${1 - distance / 150})`; // Gold color
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(x, y);
                    ctx.lineTo(mouseX, mouseY);
                    ctx.stroke();

                    // Slightly enlarge star
                    ctx.beginPath();
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
                    ctx.arc(x, y, star.size * 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        window.addEventListener("resize", () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        });
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", () => { });
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <canvas ref={canvasRef} className="absolute inset-0 block" />

            {/* Background Gradients for depth - Reduced opacity */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none" />

            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 mix-blend-overlay pointer-events-none" />
        </div>
    );
};

export default GalaxyBackground;
