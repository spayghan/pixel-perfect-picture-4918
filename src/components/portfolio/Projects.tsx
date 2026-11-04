import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "./icons";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of projects where AI, data and full-stack engineering meet."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-electric/40"
            >
              {/* corner glow on hover */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-xl border border-electric/25 bg-electric/10 p-2.5 text-electric">
                  <FolderGit2 className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} — GitHub repository`}
                    className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-electric/50 hover:text-electric"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} — live demo`}
                    className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-violet/50 hover:text-violet"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-violet/12 px-2.5 py-1 text-xs font-medium text-violet"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
