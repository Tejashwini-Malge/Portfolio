"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
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
        py-24
        px-6
        md:px-12
        lg:px-20
        bg-transparent
        text-[#2b2b2b]
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </motion.section>
  );
}