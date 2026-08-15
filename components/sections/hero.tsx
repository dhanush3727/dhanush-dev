"use client";

import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import { Avatar } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40 sm:pt-48">
      <div
        aria-hidden
        className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 animate-grid-pan opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-content px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Available for Software Developer / Full-Stack roles
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Software Developer building{" "}
              <span className="text-gradient">scalable web applications</span> and SaaS platforms.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted">
              2 years of experience building enterprise applications with React, Next.js, TypeScript,
              NestJS, PostgreSQL, and Prisma.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/40 hover:bg-surface-2"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-4 font-mono text-sm text-muted">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground"
              >
                <FileText size={15} /> Resume
              </a>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <Avatar />
          </div>
        </div>

        <TerminalCard />
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="mt-16 max-w-xl overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/30">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-xs text-muted">profile.ts</span>
      </div>
      <div className="px-5 py-4 font-mono text-[13px] leading-relaxed text-muted">
        <p>
          <span className="text-accent-2">const</span> <span className="text-foreground">developer</span> = {"{"}
        </p>
        <p className="pl-4">
          name: <span className="text-accent">&quot;Dhanush S&quot;</span>,
        </p>
        <p className="pl-4">
          role: <span className="text-accent">&quot;Software Developer&quot;</span>,
        </p>
        <p className="pl-4">
          experience: <span className="text-accent-2">2</span>,
        </p>
        <p className="pl-4">
          stack: [<span className="text-accent">&quot;React&quot;</span>,{" "}
          <span className="text-accent">&quot;Next.js&quot;</span>,{" "}
          <span className="text-accent">&quot;NestJS&quot;</span>,{" "}
          <span className="text-accent">&quot;Prisma&quot;</span>],
        </p>
        <p>
          {"}"}
          <span className="ml-1 inline-block h-3.5 w-1.5 animate-blink bg-accent align-middle" />
        </p>
      </div>
    </div>
  );
}
