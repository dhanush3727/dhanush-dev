import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/lib/data";
import { CheckCircle2, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Professional Experience" title="Where I've been building" />

        <Reveal>
          <div className="rounded-xl border border-border bg-surface p-7 sm:p-9">
            <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-accent">
                  <Briefcase size={18} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                  <p className="text-sm text-muted">{experience.company}</p>
                </div>
              </div>
              <span className="font-mono text-xs text-muted sm:text-sm">{experience.period}</span>
            </div>

            <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {experience.achievements.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
