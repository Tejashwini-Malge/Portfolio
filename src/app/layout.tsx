import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Tejashwini Malge — AI Engineer | Agentic AI",

  description:
    "Final-year Computer Science student specializing in Agentic AI, LLMs, and multimodal AI. Building AI products, conducting applied research, and developing scalable AI applications with Python, PyTorch, FastAPI, and PostgreSQL.",

  keywords: [
    "Tejashwini Malge",
    "AI Engineer",
    "Agentic AI",
    "LLMs",
    "RAG",
    "Vision-Language Models",
    "Multimodal AI",
    "Speaker",
    "Portfolio",
  ],

  openGraph: {
    title: "Tejashwini Malge — AI Engineer | Agentic AI",

    description:
      "Final-year Computer Science student specializing in Agentic AI, LLMs, and multimodal AI — building AI products and conducting applied research.",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="noise-overlay" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}