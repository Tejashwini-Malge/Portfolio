"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Mic, BookOpen, Code2, Star } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const experiences = [
  {
    icon: Users,
    title: "Student Mentor & Community Leader",
    org: "AI & Tech Community",
    period: "2023 — Present",
    desc: "Mentored 750+ students across engineering and tech domains, helping them navigate AI, career choices, and skill-building. Built learning communities that foster collaboration and growth.",
    highlights: ["750+ students impacted", "Multi-college reach", "AI workshops conducted"],
    color: "from-accent-cyan to-blue-600",
    glow: "border-accent-cyan/20",
  },
  {
    icon: TrendingUp,
    title: "LinkedIn AI Creator",
    org: "Professional Network",
    period: "2023 — Present",
    desc: "Active content creator on LinkedIn with a growing audience interested in AI, GenAI, RAG, and student life. Consistently sharing insights that bridge academic learning and industry relevance.",
    highlights: ["Growing AI-focused audience", "Weekly AI insight posts", "Community engagement"],
    color: "from-accent-violet to-accent-pink",
    glow: "border-accent-violet/20",
  },
  {
    icon: Mic,
    title: "Speaker & AI Advocate",
    org: "Tech Events & College Programs",
    period: "2023 — Present",
    desc: "Speaking on AI, emerging technologies, and youth entrepreneurship at college events and tech initiatives. Passionate about making complex AI concepts accessible and inspiring.",
    highlights: ["AI/Tech talks delivered", "Youth empowerment sessions", "Student leadership"],
    color: "from-accent-emerald to-teal-500",
    glow: "border-accent-emerald/20",
  },
  {
    icon: Code2,
    title: "AI Project Builder",
    org: "Open Source & Personal Projects",
    period: "2023 — Present",
    desc: "Actively building AI-powered applications including RAG systems, agentic workflows, and full-stack platforms. Focused on shipping production-grade projects that solve real problems.",
    highlights: ["4+ AI projects shipped", "Open-source contributions", "Full-stack AI apps"],
    color: "from-accent-pink to-orange-400",
    glow: "border-accent-pink/20",
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        tag="// experience"
        title="Leadership & Impact"
        subtitle="From mentoring students to building AI systems — driven by purpose at every step."
      />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-violet/30 to-transparent hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-accent-cyan bg-bg-primary z-10 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-cyan" />
              </div>

              {/* Card */}
              <div className={`${i % 2 === 1 ? "md:col-start-1" : "md:col-start-1"}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`gradient-border glass-card rounded-2xl p-6 border ${exp.glow} transition-all duration-300 shadow-lg`}
                >
                  {/* Top bar */}
                  <div className={`h-0.5 bg-gradient-to-r ${exp.color} mb-6 -mx-6 -mt-6 rounded-t-2xl`} style={{ marginTop: -1 }} />

                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0`}
                    >
                      <exp.icon size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-text-primary text-lg leading-tight">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-xs text-text-muted">{exp.org}</span>
                        <span className="text-text-muted">·</span>
                        <span className="font-mono text-xs text-accent-cyan">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-secondary border border-text-muted/10 text-xs font-mono text-text-muted"
                      >
                        <Star size={10} className="text-accent-cyan" />
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty column for alternating layout */}
              {i % 2 === 0 && <div className="hidden md:block" />}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Book Feature */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
      >
      
      </motion.div>
    </SectionWrapper>
  );
}
