"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const skillCategories = [
  {
    label: "AI & ML",
    color: "from-accent-cyan to-blue-500",
    textColor: "text-accent-cyan",
    borderColor: "border-accent-cyan/30",
    bgColor: "bg-accent-cyan/5",
    skills: ["Agentic AI", "RAG", "GenAI", "Prompt Engineering", "LLM Fine-tuning", "AI/ML"],
  },
  {
    label: "Development",
    color: "from-accent-violet to-accent-pink",
    textColor: "text-accent-violet",
    borderColor: "border-accent-violet/30",
    bgColor: "bg-accent-violet/5",
    skills: ["Python", "React", "Next.js", "Node.js", "TypeScript", "REST APIs"],
  },
  {
    label: "Infrastructure",
    color: "from-accent-emerald to-teal-500",
    textColor: "text-accent-emerald",
    borderColor: "border-accent-emerald/30",
    bgColor: "bg-accent-emerald/5",
    skills: ["MongoDB", "Docker", "Git/GitHub", "Vercel", "CI/CD"],
  },
  {
    label: "Soft Skills",
    color: "from-accent-pink to-orange-400",
    textColor: "text-accent-pink",
    borderColor: "border-accent-pink/30",
    bgColor: "bg-accent-pink/5",
    skills: ["Public Speaking", "Leadership", "Mentorship", "Technical Writing", "Community Building"],
  },
];

const featuredSkills = [
  { name: "Agentic AI", level: 85 },
  { name: "RAG Systems", level: 90 },
  { name: "Python", level: 88 },
  { name: "Next.js", level: 82 },
  { name: "Prompt Engineering", level: 92 },
  { name: "Public Speaking", level: 88 },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        tag="// tech stack"
        title="Skills & Expertise"
        subtitle="A blend of cutting-edge AI knowledge and full-stack development capability."
      />

      {/* Category Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.12 }}
            className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all duration-300"
          >
            {/* Top gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.color}`} />

            <h3 className={`font-display font-semibold text-sm mb-4 ${cat.textColor} font-mono uppercase tracking-wider`}>
              {cat.label}
            </h3>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium font-mono ${cat.textColor} ${cat.borderColor} ${cat.bgColor} border transition-all duration-200`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Proficiency Bars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl p-8"
      >
        <h3 className="font-display font-semibold text-text-primary text-xl mb-8">
          Core Proficiencies
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredSkills.map((skill, i) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-text-secondary">{skill.name}</span>
                <span className="font-mono text-xs text-accent-cyan">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
