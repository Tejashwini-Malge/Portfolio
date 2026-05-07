"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu, Bot, Users, Shield } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

interface Project {
  title: string;
  description: string;
  longDesc: string;
  tech: string[];
  github: string;
  demo: string;
  icon: React.ElementType;
  gradient: string;
  glow: string;
  tag: string;
}

const projects: Project[] = [
  {
    title: "AIRA",
    description:
      "AI-powered intelligent assistant.",
    longDesc:
      "Explores advanced RAG architectures with intelligent workflows, vector embeddings, and real-time retrieval for production-grade AI applications.",
    tech: ["Python",  "Prompt Engineering", "GroqAPI", "FastAPI"],
    github: "https://github.com/tejashwini-malge/aira",
    demo: "#",
    icon: Cpu,
    gradient: "from-accent-cyan to-blue-600",
    glow: "hover:shadow-accent-cyan/20",
    tag: "RAG • Agentic AI",
  },
  {
    title: "BlogAgents",
    description:
      "Multi-agent AI system that automates intelligent content creation workflows — from research to writing to publishing.",
    longDesc:
      "Built with autonomous AI agents that collaborate to research topics, generate content, optimize for SEO, and manage publishing pipelines.",
    tech: ["Python", "AI Agents", "LangGraph", "GroqAI", "CrewAI"],
    github: "https://github.com/tejashwini-malge/blogagents",
    demo: "#",
    icon: Bot,
    gradient: "from-accent-violet to-accent-pink",
    glow: "hover:shadow-accent-violet/20",
    tag: "Multi-Agent • Automation",
  },
  {
    title: "LinkedIn Clone",
    description:
      "Full-stack professional networking platform with authentication, dynamic feed, real-time connections, and profile management.",
    longDesc:
      "Complete LinkedIn-inspired application with JWT auth, RESTful APIs, image uploads, post reactions, and a responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Cloudinary"],
    github: "https://github.com/tejashwini-malge/linkedin-clone",
    demo: "#",
    icon: Users,
    gradient: "from-accent-emerald to-teal-500",
    glow: "hover:shadow-accent-emerald/20",
    tag: "Full Stack • Social",
  },
  {
    title: "Kavach",
    description:
      "AI-driven fraud detection application that identifies suspicious patterns in real-time transactions using ML models.",
    longDesc:
      "Intelligent fraud prevention system with ML classification, anomaly detection, risk scoring, and real-time alert dashboards.",
    tech: ["Flutter", "Kotlin", "Whisper", "Gemma4", "Claude"],
    github: "https://github.com/tejashwini-malge/kavach",
    demo: "#",
    icon: Shield,
    gradient: "from-accent-pink to-orange-500",
    glow: "hover:shadow-accent-pink/20",
    tag: "ML • Security",
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        tag="// projects"
        title="Things I've Built"
        subtitle="Production-ready AI systems and full-stack applications with real-world impact."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            className={`gradient-border glass-card rounded-2xl overflow-hidden group transition-all duration-400 shadow-xl ${project.glow} cursor-default`}
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
              <h3 className="font-display text-2xl font-bold text-text-primary mb-3 group-hover:gradient-text-cyan transition-colors">
                {project.title}
              </h3>

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
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-text-muted/20 text-text-secondary hover:text-text-primary hover:border-text-muted/40 transition-all duration-200 text-sm font-medium font-body"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-medium font-body hover:opacity-90 transition-all duration-200 hover:shadow-lg`}
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              </div>
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
          href="https://github.com/tejashwini-malge"
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
