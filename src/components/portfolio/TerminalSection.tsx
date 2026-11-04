import { useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillCategories,
} from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

type Line = { type: "input" | "output" | "accent" | "error"; text: string };

const COMMANDS = ["help", "about", "skills", "projects", "education", "contact", "clear"] as const;

function buildOutput(raw: string): Line[] {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case "help":
      return [
        { type: "output", text: "Available commands:" },
        ...COMMANDS.filter((c) => c !== "clear").map((c) => ({
          type: "accent" as const,
          text: `  ${c.padEnd(12)} — ${
            {
              about: "who I am",
              skills: "my technical skills",
              projects: "things I've built",
              education: "my education & experience",
              contact: "how to reach me",
              help: "list all commands",
            }[c]
          }`,
        })),
        { type: "output", text: "Tip: type 'clear' to reset the terminal." },
      ];
    case "about":
      return [
        { type: "output", text: `${profile.name} — ${profile.role}` },
        { type: "output", text: profile.intro },
        { type: "accent", text: profile.tagline },
      ];
    case "skills":
      return skillCategories.flatMap((category) => [
        { type: "accent" as const, text: `> ${category.title}` },
        { type: "output" as const, text: `  ${category.skills.join(" · ")}` },
      ]);
    case "projects":
      return projects.flatMap((project) => [
        { type: "accent" as const, text: `> ${project.title}` },
        { type: "output" as const, text: `  ${project.description}` },
        { type: "output" as const, text: `  Tech: ${project.tech.join(", ")}` },
      ]);
    case "education":
      return [
        ...education.flatMap((e) => [
          { type: "accent" as const, text: `> ${e.title} (${e.period})` },
          { type: "output" as const, text: `  ${e.org}` },
        ]),
        ...experience.flatMap((e) => [
          { type: "accent" as const, text: `> ${e.title} (${e.period})` },
          { type: "output" as const, text: `  ${e.org}` },
        ]),
        { type: "output", text: `Certifications: ${certifications.map((c) => c.name).join(", ")}` },
      ];
    case "contact":
      return [
        { type: "output", text: `Email    : ${profile.email}` },
        { type: "output", text: `GitHub   : ${profile.github}` },
        { type: "output", text: `LinkedIn : ${profile.linkedin}` },
        { type: "accent", text: "I usually reply within 24 hours." },
      ];
    default:
      return [
        {
          type: "error",
          text: `command not found: ${raw.trim()} — type 'help' to see available commands.`,
        },
      ];
  }
}

const WELCOME: Line[] = [
  { type: "accent", text: `Welcome to ${profile.name}'s interactive terminal.` },
  { type: "output", text: "Type 'help' to see available commands." },
];

export default function TerminalSection() {
  const [history, setHistory] = useState<Line[]>(WELCOME);
  const [value, setValue] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = value;
    if (!raw.trim()) return;
    const cmd = raw.trim().toLowerCase();
    if (cmd === "clear") {
      setHistory([]);
    } else {
      setHistory((h) => [...h, { type: "input", text: raw }, ...buildOutput(raw)]);
    }
    setValue("");
  };

  return (
    <section id="terminal" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Interactive Terminal"
          title="Talk to my portfolio"
          subtitle="Prefer a command line? Ask it about me directly."
        />

        <div
          className="glass-strong mt-14 overflow-hidden rounded-2xl shadow-2xl"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-neon/70" />
            <span className="h-3 w-3 rounded-full bg-electric/70" />
            <span className="ml-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Terminal className="h-3.5 w-3.5" />
              shashvat@portfolio: ~
            </span>
          </div>

          {/* Output */}
          <div
            ref={bodyRef}
            className="h-80 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed sm:text-sm"
          >
            {history.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap break-words">
                {line.type === "input" && (
                  <span className="text-neon">
                    ➜ ~ ${" "}
                    <span className="text-foreground">{line.text}</span>
                  </span>
                )}
                {line.type === "output" && <span className="text-muted-foreground">{line.text}</span>}
                {line.type === "accent" && <span className="text-electric">{line.text}</span>}
                {line.type === "error" && <span className="text-destructive">{line.text}</span>}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border px-4 py-3">
            <span className="font-mono text-sm text-neon">➜ ~ $</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "l" && e.ctrlKey) {
                  e.preventDefault();
                  setHistory([]);
                  setValue("");
                }
              }}
              className="w-full bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
              placeholder="type a command… (help)"
              aria-label="Terminal command input"
              autoComplete="off"
              spellCheck={false}
            />
            <span className="h-4 w-2 animate-blink bg-neon" />
          </form>
        </div>
      </div>
    </section>
  );
}
