"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowRight, Zap } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" tone="b">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/3 via-accent-violet/3 to-accent-pink/3 rounded-3xl" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-tag mb-4"
        >
          // contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6"
        >
          Let&apos;s Talk{" "}
          <span className="gradient-text-cyan">About</span>
          <br />
          Something Interesting
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-text-primary/80 text-lg max-w-xl mx-auto"
        >
          Whether you&apos;re looking for an intern, a speaker, a project partner,
          or just want to talk about AI over chai — I&apos;d love to hear from you.
        </motion.p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: Mail,
            label: "Email",
            value: "trmalge@gmail.com",
            href: "mailto:trmalge@gmail.com",
            gradient: "from-accent-cyan to-blue-600",
            desc: "Best for detailed conversations",
          },
          {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/tejashwini-malge",
            href: "https://linkedin.com/in/tejashwini-malge",
            gradient: "from-accent-violet to-accent-pink",
            desc: "Let's connect professionally",
          },
          {
            icon: Github,
            label: "GitHub",
            value: "github.com/tejashwini-malge",
            href: "https://github.com/tejashwini-malge",
            gradient: "from-accent-emerald to-teal-500",
            desc: "Explore my code & projects",
          },
        ].map((contact, i) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ y: -8, scale: 1.02, rotate: 0 }}
            className={`gradient-border glass-card rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-300 cursor-pointer ${
              i % 2 === 0 ? "scrap-tilt-l" : "scrap-tilt-r"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
            >
              <contact.icon size={20} className="text-white" />
            </div>
            <div>
              <p className="font-mono text-xs text-text-muted mb-1">{contact.label}</p>
              <p className="font-body text-text-primary font-medium text-sm mb-1 break-all">
                {contact.value}
              </p>
              <p className="font-body text-text-muted text-xs">{contact.desc}</p>
            </div>
            <ArrowRight
              size={16}
              className="text-text-muted group-hover:text-accent-cyan group-hover:translate-x-1 transition-all mt-auto"
            />
          </motion.a>
        ))}
      </div>

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-accent-violet/10 to-accent-pink/10" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink" />

        <div className="relative">
          <Zap className="text-accent-cyan mx-auto mb-4" size={36} />
          <h3 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Got something in mind? Let&apos;s talk.
          </h3>
          <p className="font-body text-text-secondary mb-8 max-w-md mx-auto">
            Open to internships, speaking invites, and interesting collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:trmalge@gmail.com"
              className="shimmer-btn flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-medium font-body hover:shadow-2xl hover:shadow-accent-cyan/30 transition-all duration-300 hover:scale-105"
            >
              <Send size={16} />
              Send a Message
            </a>
            <a
              href="/TEJASHWINI.pdf"
              download
              className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-text-muted/30 text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300 font-body"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
