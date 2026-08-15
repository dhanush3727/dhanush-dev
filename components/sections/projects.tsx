import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/data";

// Maintix leads the section as a full case study, so the grid covers the
// remaining company projects.
const companyProjects = projects.filter((project) => !project.featured);

export function Projects() {
  return (
    <section id="company-projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Enterprise platforms built at Monitpro"
          description="Production applications supporting maintenance, engineering, and contractor workflows."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {companyProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
