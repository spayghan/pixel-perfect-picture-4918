import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { profile, rotatingWords } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, XIcon, YoutubeIcon } from "./icons";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(profile.avatar || "/images/profile.jpg");

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % rotatingWords.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
        {/* Left column on desktop — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-64 sm:w-80 lg:w-full lg:max-w-md"
        >
          <div className="glow-ring animate-spin-slow absolute -inset-3 rounded-[2.5rem]" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={imgSrc}
              alt={`Portrait of ${profile.name}`}
              width={1024}
              height={1024}
              onError={() => setImgSrc("/images/profile.svg")}
              className="w-full rounded-[1.6rem] object-cover aspect-square"
            />
          </div>
          <div className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground whitespace-nowrap shadow-lg">
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-neon" />
            Building with AI & MERN, every day
          </div>
        </motion.div>

        {/* Right column on desktop — Personal Info */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-xs font-medium text-neon"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Open to internships & collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            <span className="glitch-text" data-text={profile.name}>
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            {profile.role}
          </motion.p>

          {/* Animated rotating highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 flex h-9 items-center gap-3 font-display text-xl font-semibold sm:text-2xl"
          >
            <span className="h-2 w-2 shrink-0 animate-pulse-glow rounded-full bg-neon" />
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="text-gradient"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 font-display text-lg text-foreground/90 sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {profile.intro}
          </motion.p>

          {/* Action buttons and Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="glow-soft inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-electric/40 bg-electric/10 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-electric hover:bg-electric/20 hover:text-electric"
              aria-label={`Email ${profile.email}`}
            >
              <Mail className="h-4 w-4 text-electric" />
              Email Me
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-violet/50 hover:text-violet"
            >
              Send Message
            </a>

            {/* Social media links */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 sm:pt-0 sm:pl-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-all hover:border-electric/50 hover:bg-muted/50 hover:text-electric"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-all hover:border-electric/50 hover:bg-muted/50 hover:text-electric"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) Profile"
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-all hover:border-cyan/50 hover:bg-muted/50 hover:text-cyan"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-all hover:border-destructive/50 hover:bg-muted/50 hover:text-destructive"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
