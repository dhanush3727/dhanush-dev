import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import { ExternalLink, Github } from "lucide-react";
import {
  Layers,
  ShieldCheck,
  Building2,
  Factory,
  KeyRound,
  Boxes,
  RefreshCw,
  Component,
  Wrench,
  ClipboardList,
  CalendarClock,
  ListChecks,
  Bell,
  LayoutDashboard,
  FileBarChart,
  Building,
} from "lucide-react";
import {
  maintixFeatures,
  maintixChallenges,
  maintixDecisions,
  MAINTIX_LIVE_URL,
  MAINTIX_REPO_URL,
} from "@/lib/data";

const featureIcons: Record<string, LucideIcon> = {
  Equipment: Wrench,
  "Preventive Maintenance": ClipboardList,
  "Breakdown Maintenance": Wrench,
  Checklists: ListChecks,
  Schedules: CalendarClock,
  Tasks: ListChecks,
  Notifications: Bell,
  Dashboard: LayoutDashboard,
  Reports: FileBarChart,
  "Organization Management": Building,
};

const decisionIcons: LucideIcon[] = [Building2, ShieldCheck, KeyRound, Factory, KeyRound, Boxes, RefreshCw, Component];

const archLayers = [
  { label: "Frontend", value: "Next.js + React + TypeScript" },
  { label: "API", value: "NestJS" },
  { label: "ORM", value: "Prisma" },
  { label: "Database", value: "PostgreSQL" },
];

const archCapabilities = [
  "Authentication",
  "RBAC",
  "Multi-tenancy",
  "Factory-level access",
  "REST APIs",
  "TanStack Query",
  "Zustand",
];

export function MaintixCaseStudy() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Flagship Project · Case Study
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Maintix — Multi-Tenant Equipment Maintenance SaaS
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            An independently built, full-stack SaaS platform for managing industrial equipment
            maintenance across multiple organizations.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-accent">
              Own Project · Full Stack · SaaS
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={MAINTIX_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent"
            >
              <ExternalLink size={15} aria-hidden />
              Live Demo
            </a>
            <a
              href={MAINTIX_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/40 hover:bg-surface-2"
            >
              <Github size={15} aria-hidden />
              GitHub Code
            </a>
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-border bg-surface p-7">
              <h3 className="mb-3 font-mono text-sm uppercase tracking-wide text-accent">Problem</h3>
              <p className="text-sm leading-relaxed text-muted">
                Industrial teams often manage equipment maintenance manually or across disconnected
                spreadsheets and tools — preventive schedules, breakdown reports, checklists, and
                technician assignments live in separate places. That makes it hard to track equipment
                status, enforce maintenance schedules, or see maintenance history across an
                organization, let alone across multiple factories or business units.
              </p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="h-full rounded-xl border border-border bg-surface p-7">
              <h3 className="mb-3 font-mono text-sm uppercase tracking-wide text-accent">Solution</h3>
              <p className="text-sm leading-relaxed text-muted">
                Maintix unifies equipment management, preventive maintenance, breakdown maintenance,
                checklists, scheduling, task management, notifications, and reporting into a single
                platform — built as a multi-tenant SaaS so each organization operates in an isolated
                workspace with its own users, factories, and access rules.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Architecture */}
        <Reveal delay={100}>
          <div className="mt-6 rounded-xl border border-border bg-surface p-7 sm:p-9">
            <h3 className="mb-6 font-mono text-sm uppercase tracking-wide text-accent">Architecture</h3>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              {archLayers.map((layer, i) => (
                <div key={layer.label} className="flex flex-1 items-center gap-3">
                  <div className="flex-1 rounded-lg border border-border bg-surface-2 p-4 text-center">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      {layer.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{layer.value}</p>
                  </div>
                  {i < archLayers.length - 1 && (
                    <span className="hidden shrink-0 font-mono text-accent sm:block" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-border pt-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-muted">
                Cross-cutting capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {archCapabilities.map((c) => (
                  <Badge key={c}>{c}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Key engineering decisions */}
        <div className="mt-14">
          <h3 className="mb-6 font-mono text-sm uppercase tracking-wide text-accent">
            Key Engineering Decisions
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {maintixDecisions.map((decision, i) => {
              const Icon = decisionIcons[i % decisionIcons.length];
              return (
                <Reveal key={decision.title} delay={i * 50}>
                  <div className="h-full rounded-lg border border-border bg-surface p-5">
                    <Icon size={17} className="mb-3 text-accent" aria-hidden />
                    <h4 className="mb-1.5 text-sm font-semibold text-foreground">{decision.title}</h4>
                    <p className="text-xs leading-relaxed text-muted">{decision.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mt-14">
          <h3 className="mb-6 font-mono text-sm uppercase tracking-wide text-accent">Features</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {maintixFeatures.map((feature, i) => {
              const Icon = featureIcons[feature] ?? Layers;
              return (
                <Reveal key={feature} delay={i * 30}>
                  <div className="flex h-full flex-col items-start gap-2.5 rounded-lg border border-border bg-surface p-4 transition-colors duration-200 hover:border-accent/40">
                    <Icon size={16} className="text-accent" aria-hidden />
                    <span className="text-xs font-medium leading-snug text-foreground">{feature}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Engineering challenges */}
        <div className="mt-14">
          <h3 className="mb-6 font-mono text-sm uppercase tracking-wide text-accent">
            Engineering Challenges
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {maintixChallenges.map((challenge, i) => (
              <Reveal key={challenge.title} delay={i * 40}>
                <div className="h-full rounded-lg border border-border bg-surface p-5">
                  <h4 className="mb-1.5 text-sm font-semibold text-foreground">{challenge.title}</h4>
                  <p className="text-xs leading-relaxed text-muted">{challenge.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
