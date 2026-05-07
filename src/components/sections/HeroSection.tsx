"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight, ChevronDown } from "lucide-react";

const typingPhrases = [
  "Building AI Systems",
  "Exploring RAG & Agents",
  "Empowering Students",
  "Creating Impactful Tech",

];

function TypingAnimation() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = typingPhrases[phraseIndex];
    const speed = isDeleting ? 50 : 80;

    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % typingPhrases.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayed((d) =>
          isDeleting ? d.slice(0, -1) : current.slice(0, d.length + 1)
        );
      }, speed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <span className="gradient-text-cyan font-display font-semibold">
      {displayed}
      <span className="inline-block w-0.5 h-8 bg-accent-cyan ml-1 animate-pulse" />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pink/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            Open to Internships & Collaborations
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl font-800 tracking-tight text-text-primary mb-4 leading-none"
        >
          Tejashwini
          <br />
          <span className="gradient-text-cyan">Malge</span>
        </motion.h1>

        {/* Role Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          {["AI Builder", "Speaker", "Engineering Student"].map((role) => (
            <span
              key={role}
              className="px-3 py-1 rounded-full text-sm font-mono text-text-secondary border border-text-muted/30 bg-bg-card"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center"
        >
          <TypingAnimation />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-body text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Final-year engineering student exploring the frontiers of{" "}
          <span className="text-accent-cyan">RAG</span>,{" "}
          <span className="text-accent-violet">Agentic AI</span>, and{" "}
          <span className="text-accent-pink">GenAI</span>. Mentoring 750+ students,
          speaking on AI, and writing stories that matter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="shimmer-btn group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-medium font-body transition-all duration-300 hover:shadow-2xl hover:shadow-accent-cyan/30 hover:scale-105"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-text-muted/30 text-text-primary font-medium font-body hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-300 hover:bg-accent-cyan/5"
          >
            Contact Me
          </a>

          <a
            href="/TEJASHWINI.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-accent-violet/30 text-accent-violet font-medium font-body hover:bg-accent-violet/10 transition-all duration-300"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/tejashwini-malge"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-text-muted/30 flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300 hover:scale-110"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/tejashwini-malge"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-text-muted/30 flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={18} />
          </a>

          <div className="w-px h-6 bg-text-muted/30" />

          <span className="font-mono text-xs text-text-muted">
            AI • Communication • Confidence
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-text-muted">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
