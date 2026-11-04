import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { contact, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";
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
    .max(1000, "Message must be under 1000 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (_values: FormValues) => {
    // TODO: connect a real backend / email service here to receive messages.
    // The form is fully validated on the client; swap the simulated delay
    // below for an API call when a backend is configured.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 6000);
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-muted/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-electric/60 focus:ring-2 focus:ring-electric/25 ${
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
            className="glass flex flex-col justify-between gap-8 rounded-2xl p-7"
          >
            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 text-sm text-muted-foreground transition-colors hover:text-electric"
              >
                <span className="rounded-xl border border-electric/25 bg-electric/10 p-2.5 text-electric">
                  <Mail className="h-4 w-4" />
                </span>
                {profile.email}
              </a>
              <p className="flex items-center gap-3.5 text-sm text-muted-foreground">
                <span className="rounded-xl border border-violet/25 bg-violet/12 p-2.5 text-violet">
                  <MapPin className="h-4 w-4" />
                </span>
                {profile.location}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Find me on
              </p>
              <div className="mt-3 flex gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-electric/50 hover:text-electric"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-violet/50 hover:text-violet"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="glass rounded-2xl p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input id="name" {...register("name")} className={inputClass(!!errors.name)} placeholder="Your name" />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input id="email" type="email" {...register("email")} className={inputClass(!!errors.email)} placeholder="you@example.com" />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className={`${inputClass(!!errors.message)} resize-none`}
                placeholder="Tell me about your project, internship or idea…"
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="glow-soft mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-neon" />
                  Message sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>

            {sent && (
              <p className="mt-4 text-sm text-neon">
                Thanks for reaching out — I'll get back to you soon. 🌎
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
