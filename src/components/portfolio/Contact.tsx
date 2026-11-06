import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { contact, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, XIcon, YoutubeIcon } from "./icons";
import SectionHeading from "./SectionHeading";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255, "Email must be under 255 characters."),
  message: z
    .string()
    .trim()
    .min(1, "Please write a message.")
    .max(2000, "Message must be under 2000 characters."),
  _honey: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: FormValues) => {
    setStatus({ type: "idle" });

    const apiUrl = import.meta.env.VITE_API_URL || "/api/contact";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _honey: values._honey || "",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error ||
            `Submission failed (${response.status}: ${response.statusText}). Please verify database connectivity.`
        );
      }

      setStatus({
        type: "success",
        message:
          data.message ||
          "Your message was transmitted and saved to database successfully.",
      });
      reset();

      setTimeout(() => {
        setStatus((prev) => (prev.type === "success" ? { type: "idle" } : prev));
      }, 8000);
    } catch (err: unknown) {
      console.error("[Contact Form Submission Error]", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Unable to reach the server. Please check your network connection or verify that the backend is running.";
      setStatus({
        type: "error",
        message: errorMessage,
      });
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-muted/40 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-electric/60 focus:ring-2 focus:ring-electric/25 ${
      hasError ? "border-destructive/70" : "border-border"
    }`;

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Contact" title={contact.heading} subtitle={contact.blurb} />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass flex flex-col justify-between gap-8 rounded-2xl p-7 border border-border/70"
          >
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground font-mono">
                  Direct Inquiries
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-3 flex items-center gap-3.5 text-sm text-foreground transition-colors hover:text-electric"
                >
                  <span className="rounded-xl border border-electric/25 bg-electric/10 p-2.5 text-electric">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-sm">{profile.email}</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground font-mono">
                  Base Location
                </p>
                <div className="mt-3 flex items-center gap-3.5 text-sm text-muted-foreground">
                  <span className="rounded-xl border border-violet/25 bg-violet/12 p-2.5 text-violet">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>{profile.location} (Open to Global Remote / Relocation)</span>
                </div>
              </div>

              <div className="rounded-xl border border-neon/20 bg-neon/5 p-4 text-xs text-muted-foreground font-mono leading-relaxed">
                <span className="text-neon font-bold">[DATABASE STATUS]</span> Contact messages are
                automatically captured and stored in MongoDB via our Express API.
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground font-mono">
                Social &amp; Developer Profiles
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-electric/50 hover:text-electric"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-violet/50 hover:text-violet"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  <XIcon className="h-4 w-4" />
                  X (Twitter)
                </a>
                <a
                  href={profile.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-destructive/50 hover:text-destructive"
                >
                  <YoutubeIcon className="h-4 w-4" />
                  YouTube
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="glass rounded-2xl p-7 border border-border/70"
          >
            {/* Honeypot Spam Protection Field (invisible to genuine users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="_honey">Do not fill this field</label>
              <input id="_honey" tabIndex={-1} autoComplete="off" {...register("_honey")} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono"
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className={inputClass(!!errors.name)}
                  placeholder="e.g. Alex Mercer"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={inputClass(!!errors.email)}
                  placeholder="e.g. alex@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className={`${inputClass(!!errors.message)} resize-none`}
                placeholder="Tell me about your project, idea, or collaboration proposal…"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="glow-soft inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Transmitting Message…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    TRANSMIT MESSAGE
                  </>
                )}
              </button>

              <span className="text-[11px] font-mono text-muted-foreground text-center sm:text-right">
                Encrypted &bull; Validated &bull; Direct Storage
              </span>
            </div>

            {/* Success Feedback Alert */}
            {status.type === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-start gap-3 rounded-xl border border-neon/40 bg-neon/10 p-4 text-xs font-mono text-neon"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Transmitted to Shashvat Payghan</p>
                  <p className="mt-0.5 text-muted-foreground">{status.message}</p>
                </div>
              </motion.div>
            )}

            {/* Error Feedback Alert */}
            {status.type === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-xs font-mono text-destructive"
              >
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Submission Failed</p>
                  <p className="mt-0.5 text-foreground/80">{status.message}</p>
                </div>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
