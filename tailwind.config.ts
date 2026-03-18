import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
            },
            colors: {
                void: "#030014",
                surface: {
                    DEFAULT: "#0a0a1a",
                    light: "#111127",
                    lighter: "#1a1a3e",
                },
                solar: {
                    DEFAULT: "#D4AF37",
                    bright: "#F1C40F",
                    dim: "#8B6914",
                },
                nebula: {
                    blue: "#3b82f6",
                    purple: "#8b5cf6",
                },
                foreground: "#f1f5f9",
                muted: "#94a3b8",
                subtle: "#475569",
            },
            animation: {
                orbit: "orbit 60s linear infinite",
                "orbit-reverse": "orbit 45s linear infinite reverse",
                "orbit-slow": "orbit 90s linear infinite",
                float: "float 6s ease-in-out infinite",
                "float-delayed": "float 8s ease-in-out 2s infinite",
                "pulse-glow": "pulse-glow 3s ease-in-out infinite",
                twinkle: "twinkle 4s ease-in-out infinite",
            },
            keyframes: {
                orbit: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
                    "50%": { opacity: "1", transform: "scale(1.05)" },
                },
                twinkle: {
                    "0%, 100%": { opacity: "0.2" },
                    "50%": { opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
