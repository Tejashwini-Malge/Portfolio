"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight, ChevronDown, Heart } from "lucide-react";

const typingPhrases = [
  "building agentic AI systems",
  "researching vision-language models",
  "mentoring 750+ students",
  "talking about AI on stage",
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
    <section className="relative z-10 min-h-screen overflow-hidden flex items-center justify-center px-6 pt-24 pb-16">
      {/* Warm paper wash — tuned for the tan background */}
      <div className="absolute top-10 -left-20 w-[30rem] h-[30rem] bg-accent-pink/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-10 w-[28rem] h-[28rem] bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

        {/* Left column — the words */}
        <div className="text-center lg:text-left">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/25 bg-bg-card/70 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            Open to AI Roles & Research Collaborations
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative font-display text-6xl md:text-7xl xl:text-8xl font-800 tracking-tight text-text-primary mb-4 leading-none"
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
          className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
        >
          {["AI Engineer", "Agentic AI", "Research Intern", "Speaker"].map((role, i) => (
            <span
              key={role}
              className={`px-3 py-1 rounded-full text-sm font-mono text-text-secondary border border-text-muted/30 bg-bg-card shadow-sm ${
                i % 2 === 0 ? "scrap-tilt-l" : "scrap-tilt-r"
              }`}
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
          className="text-2xl md:text-3xl mb-6 h-12 flex items-center justify-center lg:justify-start"
        >
          <TypingAnimation />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-body text-text-primary/80 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
        >
          Tejashwini Malge here, if you have come till here, scroll a little, promise it would be interesting.
          So, I love talking, building and teaching, currently I am working on{" "}
          <span className="text-accent-cyan">agentic systems</span>,{" "}
          <span className="text-accent-violet">LLMs</span>, and{" "}
          <span className="text-accent-emerald">multimodal systems</span>, also validating my product Aira, check it out below,
          Talking and teaching are the masala to my Tech.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
        >
          <a
            href="#projects"
            className="shimmer-btn group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-brick text-white font-medium font-body transition-all duration-300 hover:shadow-2xl hover:shadow-accent-cyan/30 hover:scale-105"
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
            href="/Tejashwini-Malge.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-accent-cyan/40 text-accent-cyan font-medium font-body hover:bg-accent-cyan/10 transition-all duration-300"
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
          className="flex items-center justify-center lg:justify-start gap-4"
        >
          <a
            href="https://github.com/Tejashwini-Malge"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-text-muted/30 flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300 hover:scale-110"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/tejashwinimalge"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-text-muted/30 flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={18} />
          </a>

          <div className="w-px h-6 bg-text-muted/30" />

          <span className="font-mono text-xs text-text-muted">
            code • chai • conversations
          </span>
        </motion.div>
        </div>

        {/* Right column — the polaroid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", bounce: 0.25 }}
          className="flex justify-center"
        >
          <div className="relative scrap-tilt-r w-[260px] sm:w-[320px] lg:w-full lg:max-w-[400px]">
            <div className="relative glass-card torn-edge-bottom rounded-sm p-3 pb-16">
              <div className="washi-tape" />

              <Image
                src="/profile.webp"
                alt="Tejashwini Malge"
                width={800}
                height={1423}
                className="rounded-sm object-cover object-top w-full aspect-[800/1423]"
                priority
              />

              {/* Handwritten polaroid caption */}
              <p className="absolute bottom-4 left-0 right-0 text-center font-display text-2xl text-text-secondary">
                building things that think
              </p>
            </div>

            {/* Heart sticker, stuck on the corner */}
            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: -10 }}
              transition={{ duration: 0.5, delay: 1, type: "spring" }}
              className="absolute -top-4 -right-4 w-12 h-12 rounded-md bg-bg-card border border-text-muted/15 shadow-lg flex items-center justify-center"
            >
              <Heart size={20} className="text-accent-pink fill-accent-pink" />
            </motion.span>
          </div>
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
