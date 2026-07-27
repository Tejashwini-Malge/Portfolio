"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu, Bot, Eye, Hand } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

interface Project {
  title: string;
  description: string;
  longDesc: string;
  tech: string[];
  github?: string;
  demo?: string;
  icon: React.ElementType;
  gradient: string;
  glow: string;
  tag: string;
  kind: string;
  period: string;
  demoNote?: string;
}

const projects: Project[] = [
  {
    title: "AIRA",
    description:
      "An AI communication platform that analyses 6 communication dimensions and writes you a personalised feedback report.",
    longDesc:
      "LLM-powered conversation with adaptive questioning, built to help people improve confidence, communication, and interview performance. Validated with 50+ students, educators, trainers, and professionals — their feedback shaped most of what the product looks like today.",
    tech: ["Python", "FastAPI", "Prompt Engineering", "Groq API"],
    github: "https://github.com/Tejashwini-Malge/Aira",
    demo: "https://aira-k5no.onrender.com/",
    demoNote: "First load may take ~30-60s to wake up",
    icon: Cpu,
    gradient: "from-accent-cyan to-blue-600",
    glow: "hover:shadow-accent-cyan/20",
    tag: "Agentic AI",
    kind: "Individual",
    period: "Oct 2025 — Present",
  },
  {
    title: "BlogAgent",
    description:
      "A 3-agent workflow that researches, writes, and edits — full blog drafts in 6–7 minutes.",
    longDesc:
      "Configurable loop engineering lets the agents run autonomous multi-pass refinement, improving research depth and factual consistency with each pass. Validated with 20+ AI engineers, founders, content creators, and editors.",
    tech: ["Python", "LangGraph", "CrewAI", "Groq API"],
    github: "https://github.com/Tejashwini-Malge/BlogAgent",
    demo: "https://web-production-81fb1.up.railway.app/",
    demoNote: "First load may take ~30-60s to wake up",
    icon: Bot,
    gradient: "from-accent-violet to-accent-pink",
    glow: "hover:shadow-accent-violet/20",
    tag: "Multi-Agent",
    kind: "Individual",
    period: "Mar 2026 — May 2026",
  },
  {
    title: "ImpactBridge",
    description:
      "An AI-powered NGO transparency platform closing the trust gap between donors and NGOs.",
    longDesc:
      "Compliance verification, impact tracking, and proof-based reporting, with AI-assisted fraud detection and document verification behind human approval gates. Automates checks across 6 compliance categories — PAN, Registration, 12A, 80G, FCRA, and Impact Proofs.",
    tech: ["Next.js", "TypeScript", "Prisma ORM", "Neon PostgreSQL"],
    icon: Eye,
    gradient: "from-accent-emerald to-teal-500",
    glow: "hover:shadow-accent-emerald/20",
    tag: "In Development",
    kind: "Team Project",
    period: "June 2026 — Present",
  },
  {
    title: "SignLanguage",
    description: "Placeholder — real description coming soon.",
    longDesc: "Placeholder — details coming soon.",
    tech: ["TBD"],
    icon: Hand,
    gradient: "from-accent-pink to-orange-500",
    glow: "hover:shadow-accent-pink/20",
    tag: "Coming Soon",
    kind: "Individual",
    period: "TBD",
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        tag="// projects"
        title="Things I've Built"
        subtitle="AI products I've built end to end. Two are live, two are still cooking."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -8, rotate: 0 }}
            className={`gradient-border glass-card rounded-2xl overflow-hidden group transition-all duration-400 shadow-xl ${project.glow} cursor-default ${
              i % 2 === 0 ? "scrap-tilt-l" : "scrap-tilt-r"
            }`}
          >
            {/* Card Header */}
            <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

            <div className="p-8">
              {/* Icon + Tag */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon size={20} className="text-white" />
                </div>
                <span className="font-mono text-xs text-text-muted px-3 py-1.5 rounded-full border border-text-muted/20 bg-bg-secondary">
                  {project.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl font-bold text-text-primary mb-1 group-hover:gradient-text-cyan transition-colors">
                {project.title}
              </h3>

              {/* Kind + Period */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="font-mono text-xs text-text-muted">
                  {project.kind}
                </span>
                <span className="w-1 h-1 rounded-full bg-text-muted/40" />
                <span className="font-mono text-xs text-text-muted">
                  {project.period}
                </span>
              </div>

              {/* Description */}
              <p className="font-body text-text-secondary leading-relaxed mb-6 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-text-muted bg-bg-secondary border border-text-muted/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              {project.github || project.demo ? (
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-text-muted/20 text-text-secondary hover:text-text-primary hover:border-text-muted/40 transition-all duration-200 text-sm font-medium font-body"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-medium font-body hover:opacity-90 transition-all duration-200 hover:shadow-lg`}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-xs text-text-muted font-mono text-center py-2.5 rounded-xl border border-dashed border-text-muted/20">
                  Links coming soon
                </p>
              )}
              {project.demoNote && (
                <p className="text-xs text-text-muted font-body mt-3 text-center">
                  {project.demoNote}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/Tejashwini-Malge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-text-muted/30 text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300 font-body text-sm"
        >
          <Github size={16} />
          View all projects on GitHub
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
