import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, Code2, Database, MonitorSmartphone, Server, Wrench } from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap = {
  code: Code2,
  frontend: MonitorSmartphone,
  backend: Server,
  ai: BrainCircuit,
  data: BarChart3,
  database: Database,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My technical arsenal"
          subtitle="A toolkit that spans the full pipeline — from raw data to deployed product."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={`glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/40 ${
                  i === skillCategories.length - 1 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-xl border border-violet/25 bg-violet/12 p-2.5 text-violet transition-colors group-hover:border-electric/40 group-hover:bg-electric/12 group-hover:text-electric">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-electric/40 hover:text-electric"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
