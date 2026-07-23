"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  tone?: "a" | "b";
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  tone = "a",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`
        relative
        py-14
        px-6
        md:px-12
        lg:px-20
        ${tone === "b" ? "bg-bg-secondary" : "bg-bg-primary"}
        text-text-primary
        ${className}
      `}
    >
      {/* Ring binder spine */}
      <div className="ring-spine hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
