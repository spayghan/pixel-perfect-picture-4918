import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { projects, type ProjectItem } from "@/data/portfolio";
import { GithubIcon } from "./icons";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          subtitle="A selection of real-world AI, machine learning and full-stack engineering applications."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const [imgSrc, setImgSrc] = useState(project.image);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgSrc(project.image);
    setImgFailed(false);
  }, [project.image]);

  const handleImageError = () => {
    // Intelligent extension resolution: try alternate common extensions
    if (imgSrc.endsWith(".jpg")) {
      setImgSrc(imgSrc.replace(".jpg", ".png"));
    } else if (imgSrc.endsWith(".png")) {
      setImgSrc(imgSrc.replace(".png", ".jpeg"));
    } else if (imgSrc.endsWith(".jpeg")) {
      setImgSrc(imgSrc.replace(".jpeg", ".webp"));
    } else {
      setImgFailed(true);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 transition-all duration-300 hover:border-electric/50 hover:shadow-2xl hover:shadow-electric/10"
    >
      {/* Corner glow on hover */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-electric/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Project Thumbnail Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-muted/30">
        {!imgFailed ? (
          <img
            src={imgSrc}
            alt={project.title}
            loading="lazy"
            onError={handleImageError}
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-muted/50 to-muted/20">
            <div className="rounded-xl border border-electric/30 bg-electric/10 p-3 text-electric mb-2">
              <FolderGit2 className="h-6 w-6" />
            </div>
            <p className="font-display text-xs font-bold text-foreground">{project.title}</p>
            <p className="mt-1 font-mono text-[10px] text-muted-foreground">Drop image at: {project.image}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40 pointer-events-none" />
        <div className="absolute top-3 left-3 inline-flex rounded-lg border border-electric/30 bg-background/80 px-2.5 py-1 text-xs font-semibold backdrop-blur-md text-electric">
          Project 0{index + 1}
        </div>
      </div>

      {/* Project Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="inline-flex rounded-xl border border-electric/25 bg-electric/10 p-2 text-electric">
              <FolderGit2 className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — GitHub repository`}
                  className="rounded-lg border border-border bg-muted/40 p-2 text-muted-foreground transition-all hover:border-electric/50 hover:bg-muted hover:text-electric"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              )}
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — live demo`}
                  className="rounded-lg border border-border bg-muted/40 p-2 text-muted-foreground transition-all hover:border-violet/50 hover:bg-muted hover:text-violet"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <h3 className="mt-4 font-display text-xl font-bold text-foreground transition-colors group-hover:text-electric">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Technologies and Action Button */}
        <div className="mt-6 pt-4 border-t border-border/40">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-violet/20 bg-violet/10 px-2.5 py-1 text-xs font-medium text-violet transition-colors group-hover:border-violet/35"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.github && (
            <div className="mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-electric"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Explore on GitHub &rarr;
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
