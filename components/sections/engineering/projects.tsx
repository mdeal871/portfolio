import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCaseStudy } from "@/components/ui/project-case-study";
import { additionalVerilogProjects, engineeringProjects } from "@/lib/engineering-projects";

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

        <div className="mt-16 border-t border-border pt-10">
          <div className="mb-6 max-w-2xl">
            <p className="mb-2 font-mono text-mono-label uppercase text-signal">Additional Verilog work</p>
            <h3 className="font-display text-heading-lg text-text">Three designs, three abstraction levels</h3>
            <p className="mt-3 text-body-sm text-text-muted">
              Compact coursework examples spanning structural, dataflow, and behavioral hardware design.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {additionalVerilogProjects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-trace"
              >
                <FileText className="mb-5 h-6 w-6 text-signal" aria-hidden />
                <p className="font-mono text-mono-label uppercase text-text-muted">{project.context}</p>
                <h4 className="mt-2 font-display text-heading-md text-text">{project.title}</h4>
                <p className="mt-3 text-body-sm text-text-muted">{project.description}</p>
                <p className="mt-4 font-mono text-xs leading-relaxed text-text-muted">
                  {project.tags.join("  /  ")}
                </p>
                <a
                  href={project.reportHref}
                  download
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-border px-4 py-2.5 font-mono text-mono-label uppercase text-text transition-colors hover:border-signal hover:bg-signal hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:mt-auto md:translate-y-1"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download report
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
