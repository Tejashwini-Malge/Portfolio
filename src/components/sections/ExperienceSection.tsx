"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Mic, Code2, Star } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const experiences = [
  {
    icon: Users,
    title: "Student Mentor & Community Lead",
    org: "AI & Tech Community",
    period: "2023 — Present",
    desc: "Mentored 750+ students on AI, career decisions, and general figuring-things-out. Built small communities where people actually ask questions instead of just lurking.",
    highlights: ["750+ students", "Multiple colleges", "AI workshops"],
    color: "from-accent-cyan to-blue-600",
    glow: "border-accent-cyan/20",
  },
  {
    icon: TrendingUp,
    title: "LinkedIn Creator",
    org: "Personal",
    period: "2023 — Present",
    desc: "Write about AI, RAG, and student life on LinkedIn. Somehow grew an audience of 3,000+ people who enjoy reading about my late-night debugging sessions.",
    highlights: ["3,000+ followers", "Weekly posts", "Real conversations in the comments"],
    color: "from-accent-violet to-accent-pink",
    glow: "border-accent-violet/20",
  },
  {
    icon: Mic,
    title: "Speaker",
    org: "College Tech Events",
    period: "2023 — Present",
    desc: "Talk about AI at college events and student programs — trying to make it feel less intimidating and a bit more fun.",
    highlights: ["Talks at multiple colleges", "Youth-focused sessions", "Q&A that actually gets messy"],
    color: "from-accent-emerald to-teal-500",
    glow: "border-accent-emerald/20",
  },
  {
    icon: Code2,
    title: "Independent Projects",
    org: "Personal / Open Source",
    period: "2023 — Present",
    desc: "Build RAG systems, agent workflows, and full-stack apps on my own time — mostly to solve problems I've actually run into.",
    highlights: ["4+ projects shipped", "Open-source contributions", "Full-stack + AI"],
    color: "from-accent-pink to-orange-400",
    glow: "border-accent-pink/20",
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" tone="b">
      <SectionHeader
        tag="// experience"
        title="What I've Been Up To"
        subtitle="Mentoring, speaking, writing, building — usually all in the same week."
      />

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical string */}
        <div className="absolute left-4 top-0 bottom-0 w-0 border-l-2 border-dashed border-text-muted/30" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative pl-12"
            >
              {/* Timeline pin */}
              <div className="absolute left-4 top-8 -translate-x-1/2 pin-dot z-10" />

              <motion.div
                whileHover={{ y: -4, rotate: 0 }}
                className={`gradient-border glass-card rounded-2xl p-6 pt-8 border ${exp.glow} transition-all duration-300 shadow-lg relative ${
                  i % 2 === 0 ? "scrap-tilt-l" : "scrap-tilt-r"
                }`}
              >
                <div className="washi-tape" />

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0`}
                  >
                    <exp.icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-text-primary text-2xl leading-tight">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="font-mono text-xs text-text-muted">{exp.org}</span>
                      <span
                        className="font-mono text-[0.65rem] text-accent-cyan border border-accent-cyan/40 border-dashed rounded px-1.5 py-0.5 -rotate-2 inline-block"
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((h, hi) => (
                    <span
                      key={h}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-secondary border border-text-muted/10 text-xs font-display text-sm text-text-secondary ${
                        hi % 2 === 0 ? "scrap-tilt-l" : "scrap-tilt-r"
                      }`}
                    >
                      <Star size={10} className="text-accent-cyan" />
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
