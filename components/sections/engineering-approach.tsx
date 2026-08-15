import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { engineeringApproach } from "@/lib/data";
import { Component, ShieldCheck, RefreshCw, Lock, Layers, Gauge } from "lucide-react";

const icons = [Component, ShieldCheck, RefreshCw, Lock, Layers, Gauge];

export function EngineeringApproach() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Engineering Approach" title="How I approach development" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringApproach.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={i * 50}>
                <div className="h-full rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/30">
                  <Icon size={20} className="mb-4 text-accent" aria-hidden />
                  <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
