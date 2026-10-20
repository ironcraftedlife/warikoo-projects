const credentials = [
  {
    title: "Project Management Professional (PMP)",
    subtitle: "Project Management Institute (PMI)",
  },
  {
    title: "NEBOSH National General Certificate in Occupational Health and Safety",
    subtitle: null,
  },
  { title: "Primavera P6 Trained", subtitle: null },
];

export default function ExperienceCredentials() {
  return (
    <section id="about" aria-labelledby="experience-heading" className="bg-surface scroll-mt-8">
      <div className="site-container section-spacing">
        <div data-reveal="intro" className="grid gap-7 border-t border-border pt-5 lg:grid-cols-12">
          <p data-reveal-part="label" className="section-label lg:col-span-4">
            <span aria-hidden="true" className="section-label-rule" />
            EXPERIENCE &amp; CREDENTIALS
          </p>
          <div className="lg:col-span-8">
            <h2 id="experience-heading" data-reveal-part="heading" className="section-heading max-w-[18ch]">
              Specialist project knowledge. Flexible delivery.
            </h2>
            <div data-reveal-part="copy" className="mt-7 max-w-[42rem] space-y-5 text-base leading-[1.75] text-muted sm:mt-9 sm:text-lg">
              <p>
                WProjects brings together construction management, project
                planning, controls and HSE knowledge to provide practical,
                remote-first advice.
              </p>
              <p>
                First-hand experience of industrial and energy capital projects
                informs programme reviews, project management and safety-led
                planning.
              </p>
              <p>
                Support is delivered primarily remotely across the UK, with
                site visits available by prior arrangement.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[42rem] text-sm leading-[1.7] text-muted">
          The following are individual professional credentials informing WProjects, rather than company accreditations.
        </p>
        <ul aria-label="Individual professional credentials" className="mt-14 border-b border-border sm:mt-20 sm:grid sm:grid-cols-3 sm:gap-x-8">
          {credentials.map((credential) => (
            <li key={credential.title} className="border-t border-border py-7 sm:py-9">
              <p className="text-[clamp(1.25rem,1.8vw,1.75rem)] leading-[1.3] font-medium tracking-[-0.025em] uppercase">
                {credential.title}
              </p>
              {credential.subtitle && (
                <p className="mt-3 text-sm leading-[1.6] text-muted sm:text-base">
                  {credential.subtitle}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
