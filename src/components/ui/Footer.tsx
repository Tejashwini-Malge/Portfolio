"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Heart, PenLine } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-text-muted/10 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center">
            <PenLine size={14} className="text-white" />
          </div>
          <span className="font-display font-bold text-text-primary text-xl">Tejashwini</span>
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs text-text-muted flex items-center gap-1.5"
        >
          © 2026 Tejashwini Malge · made with{" "}
          <Heart size={11} className="text-accent-pink fill-accent-pink" />{" "}
          and a little too much coffee
        </motion.p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/tejashwini-malge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-cyan transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/tejashwini-malge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-cyan transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
