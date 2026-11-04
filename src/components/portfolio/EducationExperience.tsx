import { motion } from "framer-motion";
import { Award, BadgeCheck, Briefcase, GraduationCap, Route, Trophy } from "lucide-react";
import { achievements, certifications, education, experience, learningJourney } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

interface TimelineItem {
  period: string;
  title: string;
  org: string;
  detail: string;
}

const timeline: (TimelineItem & { kind: "education" | "work" })[] = [
  ...education.map((e) => ({ ...e, kind: "education" as const })),
  ...experience.map((e) => ({ ...e, kind: "work" as const })),
];

export default function EducationExperience() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education & Experience"
          title="The journey so far"
          subtitle="Where I've studied, what I've learned and where I've worked."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Timeline — education + internships */}
          <div>
            <div className="relative space-y-8 before:absolute before:left-[26px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-electric/60 before:via-violet/40 before:to-transparent">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-5"
                >
                  <div
                    className={`relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl border ${
                      item.kind === "education"
                        ? "border-electric/35 bg-electric/12 text-electric"
                        : "border-violet/35 bg-violet/12 text-violet"
                    }`}
                  >
                    {item.kind === "education" ? (
                      <GraduationCap className="h-6 w-6" />
                    ) : (
                      <Briefcase className="h-6 w-6" />
                    )}
                  </div>
                  <div className="glass flex-1 rounded-2xl p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neon">
                      {item.period}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{item.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </div>
                </motion.div>
              ))}

              {/* Learning journey */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: timeline.length * 0.1 }}
                className="relative flex gap-5"
              >
                <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl border border-neon/35 bg-neon/10 text-neon">
                  <Route className="h-6 w-6" />
                </div>
                <div className="glass flex-1 rounded-2xl p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">Learning journey</h3>
                  <ul className="mt-3 space-y-2.5">
                    {learningJourney.map((step) => (
                      <li key={step} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certifications + achievements */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-foreground">
                <BadgeCheck className="h-5 w-5 text-electric" />
                Certifications
              </h3>
              <ul className="mt-4 space-y-3.5">
                {certifications.map((cert) => (
                  <li key={cert.name} className="rounded-xl border border-border bg-muted/40 p-3.5">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                      <span className="shrink-0 text-xs text-neon">{cert.year}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-foreground">
                <Trophy className="h-5 w-5 text-neon" />
                Achievements
              </h3>
              <ul className="mt-4 space-y-3.5">
                {achievements.map((achievement) => (
                  <li key={achievement.title} className="rounded-xl border border-border bg-muted/40 p-3.5">
                    <p className="flex items-start gap-2 text-sm font-semibold text-foreground">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                      {achievement.title}
                    </p>
                    <p className="mt-1 pl-6 text-xs text-muted-foreground">{achievement.detail}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
