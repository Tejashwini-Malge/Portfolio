"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mic, Play } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

/*
 * Drop a thumbnail (stream screenshot, cover art, a photo from the session)
 * into public/speaking/ and point `image` at it, e.g. "/speaking/ai-builders-podcast.jpg".
 * Leave `image` undefined for a text-only card — it's optional.
 */
const speakingEvents = [
  {
    id: "podcast-ai-builders",
    type: "Podcast Guest",
    title: "AI Builders Podcast",
    date: "2026",
    description:
      "Discussion on building agentic AI systems, practical applications of LLMs, and lessons from shipping AI products.",
    broadcast: ["YouTube", "Instagram", "LinkedIn", "Facebook"],
    duration: "1 hour, live",
    image: undefined as string | undefined,
    platform: "YouTube",
    link: "https://www.youtube.com/live/5BXiNF7RHBM?si=KPrC7A3qwtI98sc0",
    linkText: "Watch Full Episode",
    icon: Mic,
    gradient: "from-accent-brick to-accent-ember",
    glow: "border-accent-brick/20",
  },
  {
    id: "live-ai-session",
    type: "Live Session",
    title: "Building AI at Scale",
    date: "2026",
    organizer: "Tech Community Collective",
    description:
      "Real-time demonstration of agentic AI workflows, multimodal systems, and best practices for production AI deployment.",
    broadcast: ["YouTube", "Instagram", "LinkedIn", "Facebook"],
    duration: "1 hour, live",
    image: undefined as string | undefined,
    audience: "300+ attendees",
    link: "https://www.youtube.com/watch?v=HR5YN6jcZ-A&t=2864s",
    linkText: "Watch Full Session",
    icon: Play,
    gradient: "from-accent-violet to-blue-600",
    glow: "border-accent-violet/20",
  },
];

export default function SpeakingMediaSection() {
  return (
    <SectionWrapper id="speaking">
      <SectionHeader
        tag="// speaking & media"
        title="On Stage & Live"
        subtitle="Sharing knowledge through public appearances, podcast conversations, and live technical sessions."
      />

      <div className="space-y-8 max-w-3xl mx-auto">
        {speakingEvents.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className={`gradient-border glass-card rounded-2xl p-6 pt-8 border ${event.glow} transition-all duration-300 shadow-lg relative ${
              i % 2 === 0 ? "scrap-tilt-l" : "scrap-tilt-r"
            }`}
          >
            <div className="washi-tape" />

            {event.image && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-bg-card">
                <Image
                  src={event.image}
                  alt={`${event.title} — ${event.type}`}
                  fill
                  sizes="(max-width: 768px) 92vw, 48rem"
                  className="object-cover"
                />
                <span className="photo-corner photo-corner-tl" aria-hidden="true" />
                <span className="photo-corner photo-corner-tr" aria-hidden="true" />
                <span className="photo-corner photo-corner-bl" aria-hidden="true" />
                <span className="photo-corner photo-corner-br" aria-hidden="true" />
              </div>
            )}

            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${event.gradient} flex items-center justify-center shrink-0`}
              >
                <event.icon size={18} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs text-text-muted mb-1">
                  {event.type}
                </p>
                <h3 className="font-display font-semibold text-text-primary text-2xl leading-tight">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="font-mono text-[0.65rem] text-accent-cyan border border-accent-cyan/40 border-dashed rounded px-1.5 py-0.5 -rotate-2 inline-block">
                    {event.date}
                  </span>
                  {event.organizer && (
                    <span className="font-mono text-xs text-text-muted">
                      · {event.organizer}
                    </span>
                  )}
                  {event.duration && (
                    <span className="font-mono text-xs text-text-muted">
                      · {event.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
              {event.description}
            </p>

            <div className="space-y-3">
              {event.broadcast && (
                <div className="flex flex-wrap gap-2">
                  <span className="font-mono text-xs text-text-muted">
                    Broadcast on:
                  </span>
                  {event.broadcast.map((platform) => (
                    <span
                      key={platform}
                      className="px-2.5 py-1 rounded-full bg-bg-secondary border border-text-muted/10 text-xs font-display text-text-secondary"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              )}

              {event.audience && (
                <p className="font-mono text-xs text-text-muted">
                  <span className="text-accent-cyan font-semibold">
                    {event.audience}
                  </span>
                  {" "}attended the live session
                </p>
              )}

              {event.link && (
                <motion.a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent-brick to-accent-ember text-white font-body font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent-brick/20"
                >
                  {event.linkText}
                  <Play size={14} />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
