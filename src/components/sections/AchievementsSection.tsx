"use client";

import { motion } from "framer-motion";
import { Trophy, Cpu, Users, Globe, Star } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const achievements = [
  {
    icon: Cpu,
    title: "Projects Shipped",
    desc: "Built 4+ AI projects covering RAG, agents, and full-stack apps — each one taught me something the last one didn't.",
    stat: "4+",
    statLabel: "Projects",
    gradient: "from-accent-cyan to-blue-600",
    glow: "shadow-accent-cyan/10",
  },
  {
    icon: Users,
    title: "Student Mentor",
    desc: "Talked through AI, engineering, and career decisions with 750+ students so far.",
    stat: "750+",
    statLabel: "Students Mentored",
    gradient: "from-accent-emerald to-teal-500",
    glow: "shadow-accent-emerald/10",
  },
  {
    icon: Globe,
    title: "LinkedIn Creator",
    desc: "Write about AI, RAG, and student life on LinkedIn — 3,000+ people apparently find it worth reading.",
    stat: "3,000+",
    statLabel: "Followers",
    gradient: "from-blue-500 to-accent-cyan",
    glow: "shadow-blue-500/10",
  },
];

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeader
        tag="// achievements"
        title="A Running List"
        subtitle="What I've built, said, and helped with so far."
      />

      {/* Trophy Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl p-6 mb-12 flex items-center gap-4 border border-yellow-500/20 bg-yellow-500/3 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent" />
        <Trophy className="text-yellow-400 shrink-0" size={32} />
        <div className="relative">
          <p className="font-display font-semibold text-text-primary text-2xl">
            Engineer, Speaker, Mentor — usually all at once
          </p>
          <p className="font-body text-text-secondary text-sm mt-1">
            No single label ever quite fits, so here are three that mostly do.
          </p>
        </div>
      </motion.div>

      {/* Achievement Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((ach, i) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02, rotate: 0 }}
            className={`gradient-border glass-card rounded-2xl p-6 relative overflow-hidden shadow-xl ${ach.glow} transition-all duration-300 cursor-default ${
              i % 2 === 0 ? "scrap-tilt-l" : "scrap-tilt-r"
            }`}
          >
            {/* Background gradient */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${ach.gradient} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2`} />

            {/* Stat */}
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ach.gradient} flex items-center justify-center shadow-lg`}
              >
                <ach.icon size={20} className="text-white" />
              </div>
              <div className="text-right">
                <p className={`font-display text-3xl font-bold bg-gradient-to-r ${ach.gradient} bg-clip-text text-transparent`}>
                  {ach.stat}
                </p>
                <p className="font-mono text-xs text-text-muted">{ach.statLabel}</p>
              </div>
            </div>

            <h3 className="font-display font-semibold text-text-primary text-2xl mb-2">
              {ach.title}
            </h3>
            <p className="font-body text-text-secondary text-sm leading-relaxed">
              {ach.desc}
            </p>

            {/* Star decoration */}
            <div className="absolute bottom-4 right-4 opacity-10">
              <Star size={40} className="text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
