import { motion } from "framer-motion";
import { Code2, GraduationCap, Route } from "lucide-react";
import { education, experience, learningJourney } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function EducationExperience() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education & Development"
          title="The Journey So Far"
          subtitle="My academic foundation in AI & Data Science alongside self-driven MERN full-stack engineering."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Left Column: Education & MERN Learning */}
          <div className="space-y-8">
            <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2.5">
              <GraduationCap className="h-5 w-5 text-electric" />
              Academic &amp; Full-Stack Track
            </h3>

            {/* Academic Education */}
            {education.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass relative rounded-2xl p-6 border border-border/70 transition-all hover:border-electric/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-lg border border-electric/30 bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-electric">
                    {item.period}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">Degree</span>
                </div>
                <h4 className="mt-3 font-display text-lg font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-electric/90">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </motion.div>
            ))}

            {/* MERN Stack Learning & Project Development */}
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass relative rounded-2xl p-6 border border-border/70 transition-all hover:border-neon/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-lg border border-neon/30 bg-neon/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neon">
                    {item.period}
                  </span>
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-neon/10 px-2 py-0.5 text-xs font-medium text-neon">
                    <Code2 className="h-3.5 w-3.5" />
                    Practical Development
                  </div>
                </div>
                <h4 className="mt-3 font-display text-lg font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-muted-foreground">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Learning Journey Road-map */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2.5">
              <Route className="h-5 w-5 text-neon" />
              Continuous Learning Milestones
            </h3>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="glass rounded-2xl p-6 border border-border/70"
            >
              <div className="relative space-y-6 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-electric/60 before:via-violet/40 before:to-neon/60">
                {learningJourney.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 pl-1">
                    <span className="relative z-10 mt-1 h-5 w-5 shrink-0 rounded-full border-2 border-background bg-gradient-to-r from-electric to-neon shadow-sm shadow-electric/50" />
                    <div className="flex-1 rounded-xl border border-border/40 bg-muted/20 p-3.5 transition-colors hover:border-electric/30">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
