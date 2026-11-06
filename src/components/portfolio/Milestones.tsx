import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Sparkles, Trophy } from "lucide-react";
import { milestones, type MilestoneItem } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Milestones() {
  return (
    <section id="milestones" className="scroll-mt-24 py-24 relative overflow-hidden">
      {/* Background neon ambient blur */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Achievements & Recognition"
          title="MILESTONES UNLOCKED"
          subtitle="Competition wins, hackathon victories, and technical honors achieved along the path."
        />

        {/* Milestone Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {milestones.map((milestone, i) => (
            <MilestoneCard key={milestone.id} milestone={milestone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MilestoneCard({ milestone, index }: { milestone: MilestoneItem; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="glass group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 transition-all duration-300 hover:border-neon/50 hover:shadow-2xl hover:shadow-neon/10"
    >
      {/* Top Banner & Winning Photo Container */}
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/60 bg-muted/40">
          {!imageError ? (
            <img
              src={milestone.image}
              alt={`${milestone.title} - Winning Photograph`}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            // Cyberpunk Placeholder HUD when winning photo is being added
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-muted/50 to-muted/20">
              <div className="rounded-2xl border border-neon/30 bg-neon/10 p-3 text-neon shadow-lg shadow-neon/10 animate-pulse-glow">
                <Trophy className="h-7 w-7" />
              </div>
              <p className="mt-3 font-display text-xs font-bold uppercase tracking-wider text-neon">
                {milestone.badge}
              </p>
              <p className="mt-1 text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                <Camera className="h-3 w-3" />
                Winning Photograph
              </p>
              <div className="mt-2.5 rounded-md border border-border/60 bg-background/80 px-2.5 py-1 text-[10px] font-mono text-cyan">
                {milestone.image}
              </div>
            </div>
          )}

          {/* Badge Overlay */}
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-lg border border-neon/30 bg-background/85 px-2.5 py-1 text-xs font-bold text-neon backdrop-blur-md">
            <Sparkles className="h-3 w-3" />
            {milestone.badge}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-electric">
            {milestone.competition}
          </span>
          <h3 className="mt-2 font-display text-lg font-bold text-foreground transition-colors group-hover:text-neon">
            {milestone.title}
          </h3>

          <div className="mt-3 rounded-lg border border-border/40 bg-muted/30 p-2.5">
            <p className="text-xs font-semibold text-foreground/90 font-mono">
              Project Topic:
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
              {milestone.projectTopic}
            </p>
          </div>

          <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground">
            {milestone.description}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-2">
        <div className="flex items-center justify-between border-t border-border/40 pt-3 text-[11px] font-mono text-muted-foreground">
          <span className="flex items-center gap-1.5 text-neon">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
            Winning Photograph
          </span>
          <span className="text-cyan">{milestone.badge}</span>
        </div>
      </div>
    </motion.article>
  );
}
