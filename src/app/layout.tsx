import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
    title: "Aadish Parashar | AI Engineer & Product Leader",
    description:
        "I build AI systems that think, scale, and ship. Portfolio of Aadish Parashar — AI Engineer, Product Leader, and Patent Holder.",
    keywords: [
        "AI Engineer",
        "Product Manager",
        "Machine Learning",
        "LLM",
        "Portfolio",
    ],
    authors: [{ name: "Aadish Parashar" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script
                    id="theme-init"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(){var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.add('theme-light');document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');document.documentElement.classList.remove('theme-light');}})();`,
                    }}
                />
            </head>
            <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
