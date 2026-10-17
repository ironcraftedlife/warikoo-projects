export default function Positioning() {
  return (
    <section
      aria-labelledby="positioning-heading"
      className="bg-dark text-surface"
    >
      <div className="site-container section-spacing">
        <div data-reveal="intro" className="grid gap-7 border-t border-white/20 pt-5 sm:gap-10 lg:grid-cols-12">
          <p data-reveal-part="label" className="section-label lg:col-span-4">
            <span aria-hidden="true" className="section-label-rule" />
            A FLEXIBLE APPROACH
          </p>
          <div className="lg:col-span-8">
            <h2
              id="positioning-heading" data-reveal-part="heading"
              className="section-heading max-w-[17ch]"
            >
              Not every project needs another full-time hire.
            </h2>
            <div data-reveal-part="copy" className="mt-10 grid gap-5 text-base leading-[1.75] text-white/75 sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:mt-16">
              <p>
                Some SMEs, developers, contractors, subcontractors and builders need
                experienced project expertise without adding permanent resource
                or engaging a large consultancy.
              </p>
              <p>
                WProjects supports one-off reviews, specific deliverables,
                individual project stages and ongoing or retained requirements
                where appropriate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
