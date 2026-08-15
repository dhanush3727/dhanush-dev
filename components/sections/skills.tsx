import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { techStack } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies I build with"
          description="Grouped by where they sit in the stack — not ranked by arbitrary percentages."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div className="h-full rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/30">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
