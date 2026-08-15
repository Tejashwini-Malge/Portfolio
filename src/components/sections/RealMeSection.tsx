"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

export default function RealMeSection() {
  return (
    <SectionWrapper id="real-me">
      <SectionHeader
        tag="// the real me"
        title="First in My Bloodline to Build a Portfolio"
        subtitle="Here's the part that doesn't fit on a resume."
      />

      <div className="grid md:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 space-y-6"
        >
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden scrap-tilt-l">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-pink via-accent-ember to-accent-cyan" />

            <p className="font-body text-text-secondary leading-relaxed text-lg mb-4">
              I&apos;m the elder daughter in an orthodox family — the kind
              where you&apos;re not always given the chance to study or go
              after something before you&apos;ve had to prove yourself and
              clear your name, every single day. But that pressure works both
              ways. Every day, something is pushing you toward your goal,
              your passion, your ambition, whether you asked for it or not.
            </p>

            <p className="font-body text-text-secondary leading-relaxed mb-4">
              When you come from that place and still manage to do something
              good, you open a door for the people coming after you. You
              become the bridge. I&apos;d like to think I got lucky enough to
              be that bridge — for myself first, and then for my cousins, my
              sisters, my siblings. Give a woman the chance, and she&apos;ll
              show you she can do anything, entirely on her own terms.
            </p>

            <p className="font-body text-text-secondary leading-relaxed">
              I wasn&apos;t always this person. But they say the adult you
              imagined as a kid is the adult you grow up wanting to be — so
              I try to be the adult I needed when I was younger. Outside the
              agents and the pipelines, I care most about people: life
              psychology, relationships, family, friendship, and the quiet
              act of showing up for someone. Titles change — today an
              engineer, tomorrow maybe a developer, someday maybe someone
              running her own thing. But underneath all of it, I&apos;ll
              always be the same daughter, the same sister, the same friend.
              That&apos;s the role that matters most to me.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card rounded-2xl px-8 py-6 scrap-tilt-r"
          >
            <p className="font-display text-2xl md:text-3xl text-text-primary flex items-center gap-3 flex-wrap">
              Same daughter.
              <span className="text-accent-cyan">Same sister.</span>
              <span className="text-accent-pink">Same friend.</span>
              <Heart size={20} className="text-accent-pink fill-accent-pink" />
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 4 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative scrap-tilt-l w-full max-w-[300px]">
            <div className="relative glass-card torn-edge-bottom rounded-sm p-3 pb-14">
              <div className="washi-tape" />
              <Image
                src="/profile.webp"
                alt="Tejashwini Malge"
                width={800}
                height={1423}
                className="rounded-sm object-cover object-top w-full aspect-[4/5]"
              />
              <p className="absolute bottom-4 left-0 right-0 text-center font-display text-xl text-text-secondary">
                the bridge, not just the builder
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
