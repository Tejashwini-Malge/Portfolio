import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejashwini Malge AI Builder • Speaker • Mentor",

  description:
    "Final-year engineering student building AI systems, exploring RAG/Agentic AI, mentoring students, and creating impactful technology experiences.",

  keywords: [
    "Tejashwini Malge",
    "AI Engineer",
    "RAG",
    "Agentic AI",
    "GenAI",
    "Speaker",
    "Mentor",
    "Portfolio",
  ],

  openGraph: {
    title: "Tejashwini Malge — AI Builder • Speaker • Mentor",

    description:
      "Building intelligent AI systems, mentoring students, and empowering the next generation of tech leaders.",

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
        {children}
      </body>
    </html>
  );
}