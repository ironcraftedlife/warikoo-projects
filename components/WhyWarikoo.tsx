const principles = [
  {
    number: "01",
    title: "Flexible Engagement",
    description:
      "Support can be provided for a defined deliverable, project stage or ongoing requirement.",
  },
  {
    number: "02",
    title: "Independent Perspective",
    description:
      "External review can help identify programme, documentation and delivery issues before they become larger project problems.",
  },
  {
    number: "03",
    title: "Remote-First Delivery",
    description:
      "Reviews, reporting and documentation can be delivered remotely, with site visits available by prior arrangement.",
  },
  {
    number: "04",
    title: "Practical Project Support",
    description:
      "The focus is on clear project information, useful documentation and actionable recommendations rather than unnecessary consultancy overhead.",
  },
];

export default function WhyWarikoo() {
  return (
    <section aria-labelledby="why-heading" className="bg-surface">
      <div className="site-container section-spacing pt-[clamp(2.5rem,4vw,4rem)]">
        <div data-reveal="intro" className="grid gap-7 border-t border-border pt-5 lg:grid-cols-12">
          <p data-reveal-part="label" className="section-label lg:col-span-4">
            <span aria-hidden="true" className="section-label-rule" />
            WHY W PROJECTS
          </p>
          <div className="lg:col-span-8">
            <h2
              id="why-heading" data-reveal-part="heading"
              className="section-heading max-w-[18ch]"
            >
              Senior project expertise. Built around what you need.
            </h2>
            <p data-reveal-part="copy" className="mt-7 max-w-[42rem] text-base leading-[1.75] text-muted sm:mt-9 sm:text-lg">
              W Projects combines an independent perspective with practical
              planning, reporting and documentation support, shaped around your
              project requirements.
            </p>
          </div>
        </div>

        <ol data-reveal-group className="mt-14 grid sm:mt-20 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-16">
          {principles.map((principle) => (
            <li
              data-reveal="row"
              key={principle.number}
              className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 border-t border-border py-7 sm:block sm:py-9 lg:py-10"
            >
              <span className="pt-1 text-xs font-medium tracking-[0.1em] text-muted">
                {principle.number}
              </span>
              <div className="sm:mt-6">
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] font-medium tracking-[-0.035em]">
                  {principle.title}
                </h3>
                <p className="mt-4 max-w-[28rem] text-base leading-[1.75] text-muted">
                  {principle.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
