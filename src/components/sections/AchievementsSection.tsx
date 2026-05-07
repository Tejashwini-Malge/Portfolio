"use client";

import { motion } from "framer-motion";
import { Trophy, Cpu, Mic2, Users, BookOpen, Globe, Rocket, Star } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const achievements = [
  {
    icon: Cpu,
    title: "AI Projects Shipped",
    desc: "Built 4+ production-ready AI applications exploring RAG, Agentic AI, and full-stack ML systems.",
    stat: "4+",
    statLabel: "AI Projects",
    gradient: "from-accent-cyan to-blue-600",
    glow: "shadow-accent-cyan/10",
  },
  {
    icon: Users,
    title: "Student Mentor",
    desc: "Mentored over 750 students, guiding them through AI, engineering, and career development.",
    stat: "750+",
    statLabel: "Students Mentored",
    gradient: "from-accent-emerald to-teal-500",
    glow: "shadow-accent-emerald/10",
  },
  {
    icon: Globe,
    title: "AI Community Builder",
    desc: "Active LinkedIn creator building an engaged AI and tech community with educational content.",
    stat: "↑",
    statLabel: "Growing Network",
    gradient: "from-blue-500 to-accent-cyan",
    glow: "shadow-blue-500/10",
  },
];

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeader
        tag="// achievements"
        title="Milestones & Recognition"
        subtitle="Building a track record of impact — one project, one talk, one student at a time."
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
          <p className="font-display font-semibold text-text-primary text-lg">
            AI Builder × Speaker × Mentor
          </p>
          <p className="font-body text-text-secondary text-sm mt-1">
            A multidisciplinary achiever combining technical depth with human-first leadership.
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
            whileHover={{ y: -6, scale: 1.02 }}
            className={`gradient-border glass-card rounded-2xl p-6 relative overflow-hidden shadow-xl ${ach.glow} transition-all duration-300 cursor-default`}
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

            <h3 className="font-display font-semibold text-text-primary text-lg mb-2">
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
