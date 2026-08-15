import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  ShieldCheck,
  KeyRound,
  Plug,
  Workflow,
  LayoutDashboard,
  Boxes,
  RefreshCw,
  Component,
  Building2,
  Database,
} from "lucide-react";

const focusAreas = [
  { icon: ShieldCheck, label: "Role-based access control" },
  { icon: KeyRound, label: "Authentication and authorization" },
  { icon: Plug, label: "REST API integration" },
  { icon: Workflow, label: "Complex business workflows" },
  { icon: LayoutDashboard, label: "Dashboard applications" },
  { icon: Boxes, label: "State management" },
  { icon: RefreshCw, label: "Data fetching and caching" },
  { icon: Component, label: "Reusable UI architecture" },
  { icon: Building2, label: "Multi-tenant SaaS architecture" },
  { icon: Database, label: "Database-driven applications" },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="About" title="Building software for real business operations" />

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <p className="text-base leading-relaxed text-muted">
              I work on enterprise applications involving real business workflows rather than simple
              CRUD screens — equipment maintenance, engineering approvals, contractor management, and
              multi-tenant SaaS operations. That means designing systems around roles, permissions, and
              state that has to stay correct across teams and organizations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              My focus is on frontend architecture that scales, backend APIs that are secure by
              default, and database design that supports the business logic — not just the demo case.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3">
            {focusAreas.map((item, i) => (
              <Reveal key={item.label} delay={i * 40}>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3.5 transition-colors duration-200 hover:border-accent/40">
                  <item.icon size={17} className="shrink-0 text-accent" aria-hidden />
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
