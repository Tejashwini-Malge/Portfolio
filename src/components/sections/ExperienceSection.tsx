"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Microscope, ShieldCheck, Star } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const experiences = [
  {
    icon: Microscope,
    title: "Research Intern",
    org: "NITK Surathkal · Mangalore, Karnataka",
    period: "May 2026 — Present",
    desc: "Building an AI-powered radiology report generation system that turns medical images into structured clinical reports, using vision-language models and transformer architectures. Day to day that means data preprocessing, feature extraction, model experimentation, and evaluation across multimodal medical AI workflows.",
    highlights: ["Vision-Language Models", "Transformers", "Multimodal Medical AI"],
    color: "from-accent-cyan to-blue-600",
    glow: "border-accent-cyan/20",
  },
  {
    icon: ShieldCheck,
    title: "AI Social Impact Fellow",
    org: "Vitainspire · T-Hub, Hyderabad (Remote, Part-time)",
    period: "June 2026 — Present",
    desc: "Building the admin dashboard for an agentic AI NGO transparency platform with Next.js, TypeScript, Prisma ORM, and Neon PostgreSQL. Integrated specialised agents for compliance validation, fraud detection, document verification, and campaign review into the NGO administration workflow.",
    highlights: ["Next.js + TypeScript", "Prisma + Neon PostgreSQL", "Agentic workflows"],
    color: "from-accent-violet to-accent-pink",
    glow: "border-accent-violet/20",
  },
  {
    icon: Users,
    title: "Guest Trainer — AI & Communication",
    org: "Colleges & Institutions",
    period: "2023 — Present",
    desc: "Deliver AI and communication workshops across colleges and institutions, reaching 750+ students. Also served as Speaker's Club Coordinator, running public speaking sessions and mentoring students on communication and presentation.",
    highlights: ["750+ students reached", "Multiple institutions", "Speaker's Club Coordinator"],
    color: "from-accent-emerald to-teal-500",
    glow: "border-accent-emerald/20",
  },
  {
    icon: TrendingUp,
    title: "LinkedIn Creator",
    org: "Personal",
    period: "2023 — Present",
    desc: "Write about AI, networking, and career development on LinkedIn — a community of 3,000+ professionals has grown around it, mostly people who enjoy reading about my late-night debugging sessions.",
    highlights: ["3,000+ community", "Educational content", "Real conversations in the comments"],
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
        subtitle="Applied research, product work, and teaching — usually all in the same week."
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
