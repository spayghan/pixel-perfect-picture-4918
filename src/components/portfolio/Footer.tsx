import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">{profile.name}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{profile.tagline}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-electric/50 hover:text-electric"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-violet/50 hover:text-violet"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
