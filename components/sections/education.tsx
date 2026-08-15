import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 60}>
              <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-accent">
                  <GraduationCap size={18} aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">{item.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
