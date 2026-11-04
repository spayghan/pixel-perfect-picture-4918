import { motion } from "framer-motion";
import { BarChart3, Brain, Layers, Rocket } from "lucide-react";
import { aboutCards, aboutIntro } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap = {
  brain: Brain,
  chart: BarChart3,
  layers: Layers,
  rocket: Rocket,
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Curious mind, builder's hands"
          subtitle={aboutIntro}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/40"
              >
                <div className="inline-flex rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric transition-colors group-hover:border-violet/40 group-hover:bg-violet/15 group-hover:text-violet">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
