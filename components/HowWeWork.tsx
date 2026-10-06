const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We discuss the project, current challenges and the support required.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "Existing programmes, documentation, reports and relevant project information are reviewed.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "WARIKOO Projects provides the agreed planning, reporting, advisory or documentation support.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Ongoing support can be provided where required, with site visits arranged when necessary.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" aria-labelledby="how-heading" className="bg-dark text-surface scroll-mt-8">
      <div className="site-container section-spacing">
        <div data-reveal="intro" data-reveal-rule="light" className="grid gap-7 border-t border-white/20 pt-5 lg:grid-cols-12">
          <p data-reveal-part="label" className="section-label lg:col-span-4">
            <span aria-hidden="true" className="section-label-rule" />
            HOW WE WORK
          </p>
          <h2
            id="how-heading" data-reveal-part="heading"
            className="section-heading max-w-[18ch] lg:col-span-8"
          >
            A straightforward way to strengthen your project.
          </h2>
        </div>

        <ol data-reveal-group className="mt-14 border-t border-white/20 sm:mt-20 md:grid md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              data-reveal="row"
              key={step.number}
              className={`grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 border-b border-white/20 py-7 md:block md:px-6 md:py-9 lg:border-r lg:border-b-0 lg:px-7 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0 ${index % 2 === 0 ? "md:border-r" : ""}`}
            >
              <span className="pt-1 text-sm font-medium tracking-[0.1em] text-accent">
                {step.number}
              </span>
              <div className="md:mt-9">
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] font-medium tracking-[-0.035em]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[22rem] text-base leading-[1.75] text-white/75">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
