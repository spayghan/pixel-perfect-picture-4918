import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, XIcon, YoutubeIcon } from "./icons";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-base font-semibold text-foreground">{profile.name}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{profile.tagline}</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="rounded-lg border border-border p-2 text-muted-foreground transition-all hover:border-electric/50 hover:bg-muted/40 hover:text-electric"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-lg border border-border p-2 text-muted-foreground transition-all hover:border-electric/50 hover:bg-muted/40 hover:text-electric"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) Profile"
            className="rounded-lg border border-border p-2 text-muted-foreground transition-all hover:border-cyan/50 hover:bg-muted/40 hover:text-cyan"
          >
            <XIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
            className="rounded-lg border border-border p-2 text-muted-foreground transition-all hover:border-destructive/50 hover:bg-muted/40 hover:text-destructive"
          >
            <YoutubeIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Shashvat Payghan"
            className="rounded-lg border border-border p-2 text-muted-foreground transition-all hover:border-neon/50 hover:bg-muted/40 hover:text-neon"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
