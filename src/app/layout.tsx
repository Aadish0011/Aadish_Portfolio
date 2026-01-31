import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aadish Parashar | AI Engineer & Product Leader",
    description: "I build AI systems that think, scale, and ship. Portfolio of Aadish Parashar, AI Engineer and Associate Project Manager.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
