import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCaseStudy } from "@/components/ui/project-case-study";
import { engineeringProjects } from "@/lib/engineering-projects";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-bg py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Selected engineering work" title="From board to system" description="Industry experience, current senior design, and coursework — with my contribution and the project status made clear." />
        <nav aria-label="Jump to engineering project" className="my-10 flex flex-wrap gap-3">
          {engineeringProjects.map((p, i) => <a key={p.id} href={`#${p.id}`} className="rounded-sm border border-border px-3 py-2 text-body-sm text-text-muted hover:border-signal hover:text-text">0{i+1} / {p.title}</a>)}
        </nav>
        <div className="space-y-8">
          {engineeringProjects.map((p, i) => <ProjectCaseStudy key={p.id} {...p} reverse={i % 2 === 1} />)}
        </div>
      </div>
    </section>
  );
}
