import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "rgb(5, 5, 5)",
                foreground: "rgb(240, 240, 240)",
                card: "rgb(20, 20, 20)",
                accent: {
                    gold: "#D4AF37",
                    silver: "#C0C0C0",
                    dark: "#1A1A1A",
                },
            },
            animation: {
                "twinkle": "twinkle 3s ease-in-out infinite",
                "float-slow": "float 10s ease-in-out infinite",
            },
            keyframes: {
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
