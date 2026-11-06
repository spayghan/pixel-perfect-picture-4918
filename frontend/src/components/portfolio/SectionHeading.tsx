import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        <span className="glitch-text" data-text={title}>
          {title}
        </span>
      </h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
