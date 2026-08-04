"use client";

import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
  Maximize2,
  Lightbulb,
  Sparkles,
  Heart,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

interface Poster {
  src: string;
  title: string;
  /** Who hosted the session — college, club, or "Independent". */
  host: string;
  date: string;
}

interface Review {
  /** Leave undefined when the note came in without a name attached. */
  name?: string;
  role?: string;
  /** Typed-out testimonial. Leave undefined for a screenshot-only card. */
  quote?: string;
  /** Screenshot of the message. Leave undefined for a quote-only card. */
  image?: string;
  source?: string;
  /** "suggestion" swaps the quote mark for a lightbulb and adds a label. */
  kind?: "review" | "suggestion";
  /** note-butter | note-blush | note-mint | note-sky */
  tint: string;
}

// Newest first. Drop new images in public/gallery/posters/ and add a row.
const posters: Poster[] = [
  {
    src: "/gallery/posters/solve-the-right-problem.webp",
    title: "Solve The Right Problem",
    host: "Srinivas University, IET — CSE Dept",
    date: "Jan 2026",
  },
  {
    src: "/gallery/posters/visionx-ai-workshop.webp",
    title: "VisionX",
    host: "Rotaract Club of Adithya, Coimbatore",
    date: "Sep 2025",
  },
  {
    src: "/gallery/posters/advanced-linkedin.webp",
    title: "Advanced LinkedIn for Career Growth",
    host: "Srinivas University, IET — CSE Dept",
    date: "Sep 2025",
  },
  {
    src: "/gallery/posters/ai-workshop-2025.webp",
    title: "AI Workshop 2025",
    host: "Independent — with Saketh",
    date: "Aug 2025",
  },
  {
    src: "/gallery/posters/linkedin-glow.webp",
    title: "LinkedIn Glow",
    host: "Rotaract Club of Adithya × SNS College of Technology",
    date: "Aug 2024",
  },
];

/*
 * Each note takes a typed `quote`, a screenshot `image`, or both.
 * Quotes are kept as they were written — only obvious typing slips fixed.
 */
const reviews: Review[] = [
  {
    name: "Raju Nagavi",
    role: "Software Engineer",
    quote:
      "I've had the chance to connect with Tejashwini over several conversations, and what stands out every time is her genuine curiosity and thoughtfulness. She listens carefully, asks sharp questions, and gives honest, constructive feedback that genuinely helps the people around her. She's reliable, approachable, and brings real energy to everything she takes on. I have no doubt she'll create meaningful impact in whatever she pursues — anyone who gets to work with her is lucky to have her.",
    source: "LinkedIn",
    tint: "note-butter",
  },
  {
    name: "Nikhil",
    role: "Web Developer",
    quote:
      "I had the opportunity to connect with Tejashwini for career guidance and was impressed by her knowledge of AI, industry trends, and personal branding. She has a remarkable ability to simplify complex concepts and provide practical, actionable advice. Her communication skills, confidence, and willingness to help others make her someone I highly recommend connecting with.",
    source: "LinkedIn",
    tint: "note-sky",
  },
  {
    name: "Chandrashekhar",
    quote:
      "I saw your LinkedIn profile, posts and Vercel link. Really impressive. As far as the approach for a good job — be good in the fundamentals of Software Engineering and Design, AI, and good communication. And the only way to grow is learning week by week, throughout life. That's what I do. Wishing you good luck.",
    source: "LinkedIn",
    kind: "suggestion",
    tint: "note-mint",
  },
  {
    quote:
      "I loved your honest recent post about the ‘8-hour hackathon.' Your reflection that ‘Not every experience needs a trophy' is truly inspiring. Your work in Gen-AI and RAG is phenomenal. It would be an honor to connect.",
    source: "LinkedIn",
    tint: "note-blush",
  },
  {
    quote:
      "I genuinely find your posts really insightful and valuable. Always happy to support and learn from your content.",
    source: "LinkedIn",
    tint: "note-butter",
  },
];

interface LightboxItem {
  src: string;
  title: string;
  caption: string;
}

const posterItems: LightboxItem[] = posters.map((p) => ({
  src: p.src,
  title: p.title,
  caption: `${p.host} · ${p.date}`,
}));

const reviewItems: LightboxItem[] = reviews
  .filter((r): r is Review & { image: string } => Boolean(r.image))
  .map((r) => ({
    src: r.image,
    title: r.name ?? "A kind note",
    caption: [r.role, r.source].filter(Boolean).join(" · "),
  }));

/* Each poster hangs at its own angle, like they were pinned up by hand. */
const PIN_ANGLES = [-2.4, 1.7, -1.1, 2.2, -1.8, 1.2];

const SPRING = { stiffness: 210, damping: 17, mass: 0.7 };

function PosterCard({
  poster,
  index,
  onOpen,
}: {
  poster: Poster;
  index: number;
  onOpen: () => void;
}) {
  const reduceMotion = useReducedMotion();

  // Cursor position within the card, normalised to -0.5 … 0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [11, -11]), SPRING);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-13, 13]), SPRING);
  const lift = useSpring(0, SPRING);
  const glare = useSpring(0, SPRING);

  const glareX = useTransform(px, [-0.5, 0.5], ["12%", "88%"]);
  const glareY = useTransform(py, [-0.5, 0.5], ["12%", "88%"]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.6), rgba(255,255,255,0) 55%)`;

  const isMouse = (e: React.PointerEvent) => e.pointerType === "mouse";

  const handleMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (reduceMotion || !isMouse(e)) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handleEnter = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (reduceMotion || !isMouse(e)) return;
    lift.set(42);
    glare.set(0.5);
  };

  const rest = () => {
    px.set(0);
    py.set(0);
    lift.set(0);
    glare.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      style={{
        perspective: 1100,
        rotate: reduceMotion ? 0 : PIN_ANGLES[index % PIN_ANGLES.length],
      }}
      className="relative z-0 hover:z-20"
    >
      <motion.button
        type="button"
        onClick={onOpen}
        onPointerMove={handleMove}
        onPointerEnter={handleEnter}
        onPointerLeave={rest}
        onBlur={rest}
        style={{ rotateX, rotateY, z: lift, transformStyle: "preserve-3d" }}
        className="paper-card group relative w-full rounded-xl p-3 pb-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ember focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        aria-label={`Open the ${poster.title} poster full size`}
      >
        {/* Tape floats above the paper */}
        <span
          className="washi-tape"
          style={{ transform: "translateX(-50%) rotate(-3deg) translateZ(46px)" }}
          aria-hidden="true"
        />

        <div
          className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-bg-card"
          style={{ transform: "translateZ(26px)" }}
        >
          <Image
            src={poster.src}
            alt={`Poster for ${poster.title}, hosted by ${poster.host}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
          />

          <span className="photo-corner photo-corner-tl" aria-hidden="true" />
          <span className="photo-corner photo-corner-tr" aria-hidden="true" />
          <span className="photo-corner photo-corner-bl" aria-hidden="true" />
          <span className="photo-corner photo-corner-br" aria-hidden="true" />

          <span className="absolute inset-0 flex items-center justify-center bg-[#2c1e12]/0 group-hover:bg-[#2c1e12]/30 transition-colors duration-300">
            <Maximize2
              size={26}
              className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
            />
          </span>
        </div>

        <div className="pt-4 px-1" style={{ transform: "translateZ(16px)" }}>
          <p className="font-display text-2xl text-text-primary leading-none">
            {poster.title}
          </p>
          <p className="font-body text-xs text-text-secondary mt-2 leading-snug">
            {poster.host}
          </p>
          <p className="font-mono text-xs text-text-muted mt-1">{poster.date}</p>
        </div>

        {/* Light sweeping across the paper as it tilts */}
        <motion.span
          aria-hidden="true"
          style={{ opacity: glare, backgroundImage: glareBg }}
          className="pointer-events-none absolute inset-0 rounded-xl mix-blend-soft-light"
        />
      </motion.button>
    </motion.div>
  );
}

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<{
    items: LightboxItem[];
    index: number;
  } | null>(null);

  const isOpen = lightbox !== null;

  const step = useCallback((dir: number) => {
    setLightbox((lb) =>
      lb
        ? { ...lb, index: (lb.index + dir + lb.items.length) % lb.items.length }
        : lb
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, step]);

  const current = lightbox ? lightbox.items[lightbox.index] : null;

  return (
    <SectionWrapper id="gallery">
      <SectionHeader
        tag="// tejus gallery"
        title="Tejus Gallery"
        subtitle={
          reviews.length > 0
            ? "Rooms I've been invited into — the posters that went out, and what people said after."
            : "Rooms I've been invited into, and the posters that went out for them."
        }
      />

      {/* ---------- Posters ---------- */}
      {posters.length > 0 && (
        <>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6"
          >
            Session posters
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mb-20">
            {posters.map((poster, i) => (
              <PosterCard
                key={poster.src}
                poster={poster}
                index={i}
                onOpen={() => setLightbox({ items: posterItems, index: i })}
              />
            ))}
          </div>
        </>
      )}

      {/* ---------- Reviews ---------- */}
      {reviews.length > 0 && (
        <>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6"
          >
            Kind words &amp; good advice
          </motion.p>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {reviews.map((review, i) => {
              const lightboxIndex = review.image
                ? reviewItems.findIndex((item) => item.src === review.image)
                : -1;

              return (
                <motion.div
                  key={`${review.name}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                  whileHover={{ y: -4, rotate: 0 }}
                  className={`note-card ${review.tint} rounded-2xl p-6 pt-8 relative ${
                    i % 2 === 0 ? "scrap-tilt-r" : "scrap-tilt-l"
                  }`}
                >
                  {i % 2 === 0 ? (
                    <span className="pin-dot" aria-hidden="true" />
                  ) : (
                    <span className="washi-tape" aria-hidden="true" />
                  )}

                  {/* Corner doodle */}
                  <Sparkles
                    size={28}
                    className="absolute top-3 right-3 text-accent-brick/15 rotate-12"
                    aria-hidden="true"
                  />

                  {review.quote && (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        {review.kind === "suggestion" ? (
                          <>
                            <Lightbulb size={22} className="text-accent-pink" />
                            <span className="font-display text-xl text-accent-cyan">
                              a good nudge
                            </span>
                          </>
                        ) : (
                          <Quote size={24} className="text-accent-ember/70" />
                        )}
                      </div>
                      <p className="font-display text-[1.35rem] text-text-primary leading-relaxed relative">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </>
                  )}

                  {review.image && (
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({ items: reviewItems, index: Math.max(lightboxIndex, 0) })
                      }
                      className={`group relative block w-full overflow-hidden rounded-lg border border-text-muted/15 bg-bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ember ${
                        review.quote ? "mt-5" : "mt-2"
                      }`}
                      aria-label={`Open the note from ${review.name ?? "a connection"} full size`}
                    >
                      <Image
                        src={review.image}
                        alt={`Note from ${review.name ?? "a LinkedIn connection"}`}
                        width={800}
                        height={900}
                        sizes="(max-width: 768px) 90vw, 30vw"
                        className="w-full h-auto"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-[#2c1e12]/0 group-hover:bg-[#2c1e12]/30 transition-colors duration-300">
                        <Maximize2
                          size={22}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
                        />
                      </span>
                    </button>
                  )}

                  <div className="mt-5 pt-4 border-t border-dashed border-text-muted/30 flex items-center gap-3">
                    <span className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-accent-ember to-accent-brick flex items-center justify-center text-white font-body text-xs font-semibold">
                      {review.name ? (
                        initials(review.name)
                      ) : (
                        <Heart size={15} aria-hidden="true" />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-body text-sm font-semibold text-text-primary truncate">
                        {review.name ?? "A LinkedIn connection"}
                      </span>
                      {review.role && (
                        <span className="block font-mono text-xs text-text-muted truncate">
                          {review.role}
                        </span>
                      )}
                    </span>
                    {review.source && (
                      <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-wider text-text-muted px-2 py-1 rounded-full border border-text-muted/25 bg-white/50">
                        {review.source}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </>
      )}

      {/* ---------- Lightbox ---------- */}
      <AnimatePresence>
        {current && lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${current.title} — ${current.caption}`}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#2c1e12]/85 backdrop-blur-sm px-14 py-16 md:p-16"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              autoFocus
              className="absolute top-5 right-5 p-2 rounded-full text-[#f3ddc8] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={26} />
            </button>

            {lightbox.items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-1 md:left-6 p-2 rounded-full text-[#f3ddc8] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={34} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-1 md:right-6 p-2 rounded-full text-[#f3ddc8] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={34} />
                </button>
              </>
            )}

            <motion.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-4 max-w-4xl w-full"
            >
              <div className="relative w-full h-[62vh] md:h-[70vh]">
                <Image
                  src={current.src}
                  alt={`${current.title} — ${current.caption}`}
                  fill
                  sizes="(max-width: 768px) 92vw, 70vw"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              <figcaption className="text-center">
                <p className="font-display text-3xl text-[#f6e7cf]">{current.title}</p>
                <p className="font-mono text-xs text-[#f6e7cf]/60 mt-1">{current.caption}</p>
                {lightbox.items.length > 1 && (
                  <p className="font-mono text-xs text-[#f6e7cf]/40 mt-3">
                    {lightbox.index + 1} / {lightbox.items.length}
                  </p>
                )}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
