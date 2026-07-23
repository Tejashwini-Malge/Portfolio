"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  text: string;
}

export default function SectionDivider({ text }: SectionDividerProps) {
  return (
    <div className="relative flex items-center justify-center py-2 px-6">
      <div className="w-full max-w-xs border-t border-dashed border-text-muted/30" />
      <motion.span
        initial={{ opacity: 0, y: 6, rotate: -3 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={{ once: true }}
        className="absolute px-4 bg-bg-primary font-display text-xl text-accent-cyan"
      >
        {text}
      </motion.span>
    </div>
  );
}
