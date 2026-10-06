import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Project Experience | WARIKOO Projects Ltd",
  description:
    "Selected professional experience brought to WARIKOO Projects across refinery shutdowns, heavy-lift construction, marine infrastructure and major capital projects.",
};

function ProjectDescription({ text }: { text: string }) {
  const parts = text.split(/(1,200\+ personnel|8\u201312-week shutdown window|1,350-tonne crawler crane|500-tonne mobile crane)/);
  return parts.map((part, index) => index % 2 === 1
    ? <strong key={index} className="font-medium text-foreground">{part}</strong>
    : part);
}

export default function ExperiencePage() {
  return (
    <>
      <Header contactHref="/contact" />
      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="experience-page-heading" className="site-container section-spacing">
          <p className="section-label mb-8 sm:mb-10">
            <span aria-hidden="true" className="section-label-rule" />
            EXPERIENCE
          </p>
          <h1 id="experience-page-heading" className="max-w-[23ch] text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance">
            Experience shaped by complex project delivery.
          </h1>
          <div className="mt-9 grid sm:mt-12 lg:grid-cols-12">
            <p className="max-w-[40rem] text-base leading-[1.8] text-muted sm:text-lg lg:col-span-7 lg:col-start-6">
              Experience brought to WARIKOO Projects spans refinery shutdowns,
              heavy-lift construction, marine infrastructure and major capital
              projects, from project initiation through to closeout.
            </p>
          </div>
        </section>

        <section aria-labelledby="selected-projects-heading" className="bg-surface">
          <div className="site-container section-spacing">
            <div data-reveal="intro" className="grid gap-7 lg:grid-cols-12">
              <h2 id="selected-projects-heading" data-reveal-part="label" className="section-label lg:col-span-4">
                <span aria-hidden="true" className="section-label-rule" />
                SELECTED PROJECT EXPERIENCE
              </h2>
              <div data-reveal-part="copy" className="max-w-[40rem] space-y-5 text-base leading-[1.75] text-muted sm:text-lg lg:col-span-8">
                <p>
                  Experience across complex refinery, shutdown, marine and major
                  capital projects, from project initiation through to closeout.
                </p>
                <p className="text-sm leading-[1.7]">
                  These projects represent previous professional experience
                  brought to WARIKOO Projects, rather than a list of WARIKOO
                  Projects Ltd contracts.
                </p>
              </div>
            </div>

            <ol data-reveal-group className="mt-12 border-t border-border sm:mt-16 lg:mt-20">
              {projects.map((project) => (
                <li data-reveal="row" data-reveal-sequence key={project.number} className="grid gap-x-5 gap-y-6 border-b border-border py-9 sm:grid-cols-[minmax(0,1fr)_auto] sm:py-12 lg:grid-cols-12 lg:gap-x-7 lg:py-14">
                  <p data-reveal-part="label" className="text-xs font-medium tracking-[0.16em] text-accent sm:col-span-2 lg:col-span-1">
                    <span className="sr-only">Project </span>{project.number}
                  </p>
                  <h3 data-reveal-part="heading" className="max-w-[24ch] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-medium tracking-[-0.04em] text-balance lg:col-span-7">
                    {project.title}
                  </h3>
                  <div data-reveal-part="heading" className="sm:text-right lg:col-span-3 lg:col-start-10">
                    <p className="mb-3 text-xs font-medium tracking-[0.14em] text-muted">PROJECT VALUE</p>
                    <p className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] font-medium tracking-[-0.04em]">{project.value}</p>
                  </div>
                  <div data-reveal-part="copy" className="max-w-[40rem] sm:col-span-2 lg:col-span-7 lg:col-start-2">
                    <p className="text-base leading-[1.8] text-muted sm:text-lg"><ProjectDescription text={project.description} /></p>
                    {project.facts.length > 0 && (
                      <ul aria-label="Project facts" className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-base font-medium leading-[1.6]">
                        {project.facts.map((fact) => (
                          <li key={fact} className="border-l border-accent pl-3">{fact}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <FinalCTA contactHref="/contact" />
      </main>
      <Footer />
    </>
  );
}
