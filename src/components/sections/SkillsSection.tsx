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
    skills: [
      "LLMs",
      "Agentic AI",
      "RAG",
      "PyTorch",
      "TensorFlow",
      "Deep Learning",
      "Prompt Engineering",
      "Computer Vision",
      "VLM",
      "Transformers",
    ],
  },
  {
    label: "Languages & Frameworks",
    color: "from-accent-violet to-accent-pink",
    textColor: "text-accent-violet",
    borderColor: "border-accent-violet/30",
    bgColor: "bg-accent-violet/5",
    skills: ["Python", "SQL", "FastAPI", "Next.js", "React", "Tailwind CSS", "Prisma ORM"],
  },
  {
    label: "Databases & Tools",
    color: "from-accent-emerald to-teal-500",
    textColor: "text-accent-emerald",
    borderColor: "border-accent-emerald/30",
    bgColor: "bg-accent-emerald/5",
    skills: [
      "PostgreSQL",
      "Neon PostgreSQL",
      "Git",
      "GitHub",
      "Docker",
      "Railway",
      "Render",
      "Vercel",
    ],
  },
  {
    label: "Concepts",
    color: "from-accent-pink to-orange-400",
    textColor: "text-accent-pink",
    borderColor: "border-accent-pink/30",
    bgColor: "bg-accent-pink/5",
    skills: [
      "System Design",
      "Agentic System Design",
      "Multi-Agent Orchestration",
      "Public Speaking",
      "Mentorship",
    ],
  },
];

const researchAreas = [
  {
    name: "Agentic RAG",
    desc: "Retrieval that reasons about what it needs before it goes looking.",
  },
  {
    name: "Vision-Language Models",
    desc: "Getting models to read an image and write something clinically useful about it.",
  },
  {
    name: "Multimodal Learning",
    desc: "Text, images, and structure learned together rather than bolted on.",
  },
  {
    name: "Transformer Architectures",
    desc: "The layer underneath all of the above — worth understanding properly.",
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" tone="b">
      <SectionHeader
        tag="// tech stack"
        title="What's in My Toolbox"
        subtitle="The languages, frameworks, and skills I actually reach for when building something."
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
            whileHover={{ rotate: 0 }}
            className={`glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all duration-300 ${
              ci % 2 === 0 ? "scrap-tilt-l" : "scrap-tilt-r"
            }`}
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

      {/* Research Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl p-8"
      >
        <h3 className="font-display font-semibold text-text-primary text-3xl mb-2">
          What I&apos;m Reading Into
        </h3>
        <p className="font-body text-text-secondary text-sm mb-8">
          The research areas I keep coming back to.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-3"
            >
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-brick shrink-0" />
              <div>
                <p className="font-display font-semibold text-text-primary text-xl leading-tight">
                  {area.name}
                </p>
                <p className="font-body text-sm text-text-secondary leading-relaxed mt-1">
                  {area.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
