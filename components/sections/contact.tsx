"use client";

import { useState, FormEvent } from "react";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/data";

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: FileText, label: "Resume", href: profile.resumeUrl },
];

type Status = "idle" | "submitting" | "sent" | "error";

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

/**
 * ─────────────────────────────────────────────────────────────────────
 *  PLUG YOUR EMAIL SERVICE IN HERE
 * ─────────────────────────────────────────────────────────────────────
 * Right now this just resolves — nothing is sent anywhere.
 *
 * To wire it up, replace the body with a call to whatever you choose:
 *
 *   const res = await fetch("/api/contact", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(data),
 *   });
 *   if (!res.ok) throw new Error("Failed to send");
 *
 * Throw on failure and the form shows its error state automatically.
 * The UI below needs no changes.
 */
async function sendContactMessage(data: ContactMessage): Promise<void> {
  // eslint-disable-next-line no-console
  fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      await sendContactMessage({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I&apos;m open to Software Developer, Frontend Developer, and
              Full-Stack Developer opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2.5 rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground transition-colors duration-200 hover:border-accent/40 hover:bg-surface-2"
                >
                  <link.icon size={16} className="text-accent" aria-hidden />
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-surface p-7 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    disabled={status === "submitting"}
                    className="rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus-visible:outline-none disabled:opacity-60"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    disabled={status === "submitting"}
                    className="rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus-visible:outline-none disabled:opacity-60"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={5000}
                  disabled={status === "submitting"}
                  className="resize-none rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus-visible:outline-none disabled:opacity-60"
                  placeholder="Tell me about the role or project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent disabled:opacity-60"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle2 size={16} aria-hidden /> Message sent
                  </>
                ) : (
                  <>
                    <Send size={16} aria-hidden />
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === "sent" && (
                  <p className="mt-3 flex items-start gap-2 text-sm text-accent">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0"
                      aria-hidden
                    />
                    Thanks — I&apos;ll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="mt-3 flex items-start gap-2 text-sm text-red-400">
                    <AlertCircle
                      size={15}
                      className="mt-0.5 shrink-0"
                      aria-hidden
                    />
                    <span>
                      Something went wrong. You can email me directly at{" "}
                      <a
                        href={`mailto:${profile.email}`}
                        className="underline underline-offset-2 hover:text-foreground"
                      >
                        {profile.email}
                      </a>
                      .
                    </span>
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
