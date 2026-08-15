import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const hasLinks = Boolean(project.caseStudyHref || project.liveUrl || project.repoUrl);
  const hasDetail = Boolean(project.context || project.contributions || project.technical);

  return (
    <Reveal delay={delay}>
      <article
        className={cn(
          "card-hover group flex h-full flex-col rounded-xl border bg-surface p-6 sm:p-7",
          project.featured ? "border-accent/30" : "border-border"
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
            <p className="mt-1 font-mono text-xs text-accent">{project.label}</p>
          </div>
          {project.featured && (
            <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent">
              Flagship
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        {project.bullets && (
          <ul className="mt-4 space-y-1.5">
            {project.bullets.slice(0, 4).map((b) => (
              <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground">
          {project.highlight}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        {hasDetail && (
          <div className="mt-5 space-y-5 border-t border-border pt-5">
            {project.context && (
              <div>
                <h4 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                  Context
                </h4>
                <p className="text-sm leading-relaxed text-muted">{project.context}</p>
              </div>
            )}

            {project.contributions && (
              <div>
                <h4 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                  What I built
                </h4>
                <ul className="space-y-1.5">
                  {project.contributions.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.technical && (
              <div>
                <h4 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                  Technical highlights
                </h4>
                <ul className="space-y-1.5">
                  {project.technical.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {hasLinks && (
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-5">
            {project.caseStudyHref && (
              <a
                href={project.caseStudyHref}
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent"
              >
                View Case Study
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/40 hover:bg-surface-2"
              >
                <ExternalLink size={15} aria-hidden />
                Live Demo
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/40 hover:bg-surface-2"
              >
                <Github size={15} aria-hidden />
                GitHub
              </a>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}
