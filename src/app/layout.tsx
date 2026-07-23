import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Tejashwini Malge — notes on AI, teaching, and figuring things out",

  description:
    "Final-year engineering student working on RAG and agentic AI projects, mentoring students, and speaking about tech at college events.",

  keywords: [
    "Tejashwini Malge",
    "RAG",
    "Agentic AI",
    "GenAI",
    "Speaker",
    "Mentor",
    "Portfolio",
  ],

  openGraph: {
    title: "Tejashwini Malge — notes on AI, teaching, and figuring things out",

    description:
      "Working on RAG and agentic AI projects, mentoring students, and speaking about tech at college events.",

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