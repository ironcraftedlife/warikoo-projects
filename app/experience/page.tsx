import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { experienceCategories, projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Project Experience | WProjects",
  description:
    "Previous professional experience informing WProjects across shutdown and turnaround projects, equipment replacement and heavy lifts, and marine and capital infrastructure.",
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
          <h1 id="experience-page-heading" className="max-w-[23ch] text-[clamp(2.2rem,4.8vw,4.2rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance">
            Experience shaped by complex project delivery.
          </h1>
          <div className="mt-9 grid sm:mt-12 lg:grid-cols-12">
            <p className="max-w-[40rem] text-base leading-[1.8] text-muted sm:text-lg lg:col-span-7 lg:col-start-6">
              Previous professional experience in refinery shutdowns, equipment
              replacement, heavy-lift construction and marine infrastructure
              informs the project support provided by WProjects.
            </p>
          </div>
        </section>

        <section aria-labelledby="selected-projects-heading" className="bg-surface">
          <div className="site-container section-spacing">
            <div data-reveal="intro" className="grid gap-7 lg:grid-cols-12">
              <h2 id="selected-projects-heading" data-reveal-part="label" className="section-label lg:col-span-4">
                <span aria-hidden="true" className="section-label-rule" />
                RELEVANT PROJECT CAPABILITIES
              </h2>
              <p data-reveal-part="copy" className="max-w-[40rem] text-sm leading-[1.7] text-muted lg:col-span-8">
                These examples represent previous professional experience
                informing WProjects. They are not presented as contracts
                awarded to WProjects.
              </p>
            </div>

            <div className="mt-12 sm:mt-16 lg:mt-20">
              {experienceCategories.map((category) => (
                <section key={category.id} aria-labelledby={`${category.id}-heading`} className="border-t border-border py-9 sm:py-12 lg:py-14">
                  <div data-reveal="intro" className="grid gap-7 lg:grid-cols-12">
                    <p data-reveal-part="label" className="section-label uppercase lg:col-span-4">
                      {category.title}
                    </p>
                    <div className="min-w-0 lg:col-span-8">
                      <h2 id={`${category.id}-heading`} data-reveal-part="heading" className="section-heading max-w-[18ch]">
                        {category.headline}
                      </h2>
                      <p data-reveal-part="copy" className="mt-7 max-w-[40rem] text-base leading-[1.75] text-muted sm:text-lg">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul data-reveal-group className="mt-9 sm:mt-12">
                    {projects.filter((project) => category.projectNumbers.includes(project.number)).map((project) => (
                      <li data-reveal="row" data-reveal-sequence key={project.number} className="grid gap-6 border-t border-border py-7 sm:py-9 lg:grid-cols-12 lg:gap-7">
                        <div data-reveal-part="heading" className="min-w-0 lg:col-span-4">
                          <h3 className="max-w-[24ch] text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] font-medium tracking-[-0.035em] text-balance">
                            {project.title}
                          </h3>
                          <p className="mt-4 text-sm leading-[1.6] text-muted">
                            Project value: {project.value}
                          </p>
                        </div>
                        <div data-reveal-part="copy" className="min-w-0 max-w-[40rem] lg:col-span-7 lg:col-start-6">
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
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>
        <FinalCTA contactHref="/contact" />
      </main>
      <Footer />
    </>
  );
}
