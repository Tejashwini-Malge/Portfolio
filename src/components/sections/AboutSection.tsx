"use client";

import { motion } from "framer-motion";
import { Brain, Mic, Microscope, Users } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const pillars = [
  {
    icon: Brain,
    title: "Builder",
    desc: "Agentic workflows, RAG pipelines, and multi-agent systems built until they actually hold up.",
    color: "from-accent-cyan to-blue-500",
    glow: "shadow-accent-cyan/20",
  },
  {
    icon: Microscope,
    title: "Researcher",
    desc: "Vision-language models and multimodal learning for medical AI at NITK Surathkal.",
    color: "from-accent-violet to-accent-pink",
    glow: "shadow-accent-violet/20",
  },
  {
    icon: Mic,
    title: "Speaker",
    desc: "Explaining AI to a room without making it sound scarier than it is.",
    color: "from-accent-pink to-orange-400",
    glow: "shadow-accent-pink/20",
  },
  {
    icon: Users,
    title: "Mentor",
    desc: "Talking to 750+ students about LinkedIn, networking, career, and AI.",
    color: "from-accent-emerald to-teal-400",
    glow: "shadow-accent-emerald/20",
  },
];

const stats = [
  { value: "9.5", label: "CGPA / 10" },
  { value: "750+", label: "Students Mentored" },
  { value: "3,000+", label: "Community" },
  { value: "4", label: "AI Projects Built" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        tag="// about me"
        title="Somewhere Between Code and Conversations"
        subtitle="I like building things that matter, and talking about why they matter."
      />

      <div className="grid md:grid-cols-5 gap-8 items-start">

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 space-y-6"
        >
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden scrap-tilt-r">

            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan via-accent-ember to-accent-pink" />

            <p className="font-body text-text-secondary leading-relaxed text-lg mb-4">
              I&apos;m a{" "}
              <span className="text-text-primary font-medium">
                final-year Computer Science student at Srinivas University
              </span>{" "}
              (CGPA 9.5/10), based in Bidar, Karnataka. I love building
              things that think, such as{" "}
              <span className="text-accent-cyan">agentic systems</span>,{" "}
              <span className="text-accent-violet">RAG pipelines</span>,{" "}
              <span className="text-accent-emerald">vision-language models</span>
              , the whole rabbit hole.
            </p>

            <p className="font-body text-text-secondary leading-relaxed">
              These days that splits between applied research generating
              structured radiology reports from medical images at NITK Surathkal
              and shipping products, like the agentic NGO transparency platform I
              work on as an AI Social Impact Fellow.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-xl p-5 text-center ${
                i % 2 === 0 ? "scrap-tilt-l" : "scrap-tilt-r"
              }`}
            >
              <p className="font-display text-3xl font-bold gradient-text-cyan">
                {stat.value}
              </p>

              <p className="font-mono text-xs text-text-muted mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillar Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:col-span-5 mt-4"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02, rotate: 0 }}
              className={`gradient-border glass-card rounded-2xl p-6 flex flex-col gap-3 shadow-lg ${pillar.glow} transition-all duration-300 cursor-default ${
                i % 2 === 0 ? "scrap-tilt-l" : "scrap-tilt-r"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}
              >
                <pillar.icon size={18} className="text-white" />
              </div>

              <h3 className="font-display font-semibold text-text-primary text-2xl">
                {pillar.title}
              </h3>

              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}