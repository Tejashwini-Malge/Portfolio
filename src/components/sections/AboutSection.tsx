"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Brain, Mic, Users } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const pillars = [
  {
    icon: Brain,
    title: "AI Engineer",
    desc: "Exploring RAG, GenAI, and Agentic systems to build intelligent, autonomous workflows.",
    color: "from-accent-cyan to-blue-500",
    glow: "shadow-accent-cyan/20",
  },
  {
    icon: Mic,
    title: "Speaker",
    desc: "Communicating complex AI concepts to diverse audiences with clarity and passion.",
    color: "from-accent-violet to-accent-pink",
    glow: "shadow-accent-violet/20",
  },
  {
    icon: Users,
    title: "Mentor",
    desc: "Empowering 750+ students with knowledge, guidance, and a growth mindset.",
    color: "from-accent-emerald to-teal-400",
    glow: "shadow-accent-emerald/20",
  },
];

const stats = [
  { value: "750+", label: "Students Mentored" },
  { value: "4+", label: "AI Projects Built" },
  { value: "∞", label: "Ideas Yet to be discovered" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        tag="// about me"
        title="Building at the Intersection of AI & Human Soul"
        subtitle=" I love buidling things matter and talking about those things."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-accent-cyan via-accent-violet to-accent-pink blur-2xl opacity-30 animate-pulse" />

            {/* Image Frame */}
            <div className="relative glass-card rounded-[30px] p-3 border border-white/10">
              <Image
                src="/profile.jpeg"
                alt="Tejashwini Malge"
                width={420}
                height={520}
                className="rounded-[24px] object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink" />

            <p className="font-body text-text-secondary leading-relaxed text-lg mb-4">
              I&apos;m a{" "}
              <span className="text-text-primary font-medium">
                final-year engineering student
              </span>{" "}
              with an obsession for building things that think. From{" "}
              <span className="text-accent-cyan">
                RAG pipelines
              </span>{" "}
              to{" "}
              <span className="text-accent-violet">
                agentic workflows
              </span>
              , I&apos;m on a mission to make AI not just powerful  but purposeful.
            </p>

            <p className="font-body text-text-secondary leading-relaxed">
              I believe technology is most powerful when it amplifies human potential.
              That belief drives everything from the code I ship to the
              conversations I have to the communities I build.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-4 text-center"
              >
                <p className="font-display text-2xl font-bold gradient-text-cyan">
                  {stat.value}
                </p>

                <p className="font-mono text-xs text-text-muted mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pillar Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4 md:col-span-2"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`gradient-border glass-card rounded-2xl p-6 flex flex-col gap-3 shadow-lg ${pillar.glow} transition-all duration-300 cursor-default`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}
              >
                <pillar.icon size={18} className="text-white" />
              </div>

              <h3 className="font-display font-semibold text-text-primary text-lg">
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