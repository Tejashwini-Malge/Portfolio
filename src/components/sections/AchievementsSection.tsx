"use client";

import { motion } from "framer-motion";
import { Trophy, Cpu, Users, Globe, Star, GraduationCap, Timer, Award } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const achievements = [
  {
    icon: GraduationCap,
    title: "Academics",
    desc: "Computer Science and Engineering at Srinivas University Institute of Engineering and Technology, Mangalore.",
    stat: "9.50",
    statLabel: "CGPA / 10",
    gradient: "from-accent-cyan to-blue-600",
    glow: "shadow-accent-cyan/10",
  },
  {
    icon: Users,
    title: "Guest Trainer",
    desc: "Delivered AI and communication workshops across colleges and institutions, reaching 750+ students.",
    stat: "750+",
    statLabel: "Students Reached",
    gradient: "from-accent-emerald to-teal-500",
    glow: "shadow-accent-emerald/10",
  },
  {
    icon: Globe,
    title: "LinkedIn Community",
    desc: "Educational content on AI, networking, and career development 3,000+ professionals apparently find it worth reading.",
    stat: "3,000+",
    statLabel: "Professionals",
    gradient: "from-blue-500 to-accent-cyan",
    glow: "shadow-blue-500/10",
  },
  {
    icon: Cpu,
    title: "Products Validated",
    desc: "AIRA and BlogAgent were both put in front of real users students, educators, engineers, founders, editors and reshaped by what came back.",
    stat: "70+",
    statLabel: "Users Interviewed",
    gradient: "from-accent-violet to-accent-pink",
    glow: "shadow-accent-violet/10",
  },
  {
    icon: Timer,
    title: "24-Hour AI Hackathon",
    desc: "Designed and shipped an end-to-end AI solution under strict time constraints, start to finish, in a single day.",
    stat: "24h",
    statLabel: "Start to Ship",
    gradient: "from-accent-pink to-orange-400",
    glow: "shadow-accent-pink/10",
  },
  {
    icon: Award,
    title: "State-Level SAP HackFest",
    desc: "Competed on enterprise technology and problem-solving challenges, collaborating under competition conditions.",
    stat: "SAP",
    statLabel: "State Level",
    gradient: "from-accent-violet to-blue-500",
    glow: "shadow-accent-violet/10",
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
