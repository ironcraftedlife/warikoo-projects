import Link from "next/link";
import { previewProjects } from "@/lib/projects";

export default function ProjectExperiencePreview() {
  return (
    <section aria-labelledby="project-preview-heading" className="site-container py-[clamp(2.5rem,5vw,4rem)]">
      <div data-reveal="intro" data-reveal-rule className="grid gap-5 border-t border-border pt-5 lg:grid-cols-12">
        <h2 id="project-preview-heading" data-reveal-part="label" className="section-label lg:col-span-4">
          <span aria-hidden="true" className="section-label-rule" />
          SELECTED EXPERIENCE
        </h2>
        <p data-reveal-part="copy" className="text-sm leading-[1.7] text-muted lg:col-span-8">
          Professional experience brought to WARIKOO Projects.
        </p>
      </div>
      <ol data-reveal-group className="mt-8 grid gap-x-8 md:grid-cols-3 lg:gap-x-12">
        {previewProjects.map((project) => (
          <li data-reveal="row" key={project.number} className="border-t border-border py-6 sm:py-7">
            <p className="text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-medium tracking-[-0.045em]">
              <span className="sr-only">Project value: </span>{project.value}
            </p>
            <h3 className="mt-4 max-w-[25ch] text-[clamp(1.25rem,1.8vw,1.5rem)] leading-[1.3] font-medium tracking-[-0.025em]">
              {project.title}
            </h3>
          </li>
        ))}
      </ol>
      <Link href="/experience" className="nav-link mt-3 inline-flex min-h-11 w-fit items-center gap-7 border-b border-border text-sm font-medium sm:mt-5">
        View Project Experience <span aria-hidden="true" className="motion-arrow text-accent">→</span>
      </Link>
    </section>
  );
}
