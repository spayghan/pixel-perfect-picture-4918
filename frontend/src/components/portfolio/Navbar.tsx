import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, XIcon, YoutubeIcon } from "./icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Milestones", href: "#milestones" },
  { label: "Journey", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-foreground">
          <span className="text-gradient">{"{ "}</span>
          {profile.name.split(" ")[0]}
          <span className="text-gradient">{" }"}</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-electric"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-2.5 border-l border-border pl-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-muted-foreground transition-colors hover:text-electric"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-muted-foreground transition-colors hover:text-electric"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Profile"
              className="p-1.5 text-muted-foreground transition-colors hover:text-cyan"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="p-1.5 text-muted-foreground transition-colors hover:text-destructive"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-strong overflow-hidden border-b border-border lg:hidden"
          >
            <ul className="space-y-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 px-3 pt-3 border-t border-border/50">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-electric"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-electric"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="text-muted-foreground hover:text-cyan"
                >
                  <XIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-muted-foreground hover:text-destructive"
                >
                  <YoutubeIcon className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
