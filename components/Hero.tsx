import Link from "next/link";

export default function Hero({ contactHref }: { contactHref: string }) {
  return (
    <section aria-labelledby="hero-heading" className="hero-entrance site-container pt-12 sm:pt-16 lg:pt-20">
      <p data-hero-part="eyebrow" className="section-label mb-8 gap-2 tracking-[0.12em] sm:mb-10 sm:gap-3 sm:tracking-[0.16em]">
        <span aria-hidden="true" className="section-label-rule" />
        PROJECT DELIVERY &amp; ADVISORY
      </p>
      <h1
        id="hero-heading"
        data-hero-part="headline"
        className="max-w-[22ch] text-[clamp(2.15rem,5.16vw,4.515rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance"
      >
        <span className="block">Experienced project support.</span>
        <span className="block">Without the <span className="whitespace-nowrap">full-time</span> overhead.</span>
      </h1>
      <div className="mt-8 grid gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-6">
          <p data-hero-part="copy" className="max-w-[42rem] text-base leading-[1.8] text-muted sm:text-lg">
            W Projects provides flexible project planning, project controls,
            construction advisory, HSE and documentation support for construction
            businesses that need additional project expertise.
          </p>
          <div data-hero-part="actions" className="mt-7 flex flex-col items-start gap-5 min-[420px]:flex-row min-[420px]:items-center min-[420px]:gap-7 sm:mt-8">
            <Link
              href={contactHref}
              className="project-link inline-flex min-h-12 items-center justify-between gap-8 bg-accent px-5 py-3 text-sm font-medium text-foreground"
            >
              Discuss Your Project <span aria-hidden="true" className="motion-arrow">→</span>
            </Link>
            <Link href="/services" className="nav-link inline-flex min-h-11 items-center border-b border-border text-sm font-medium">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
      <ul data-hero-part="industries" aria-label="Construction support and relevant sector background, including" className="mt-14 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border py-6 text-xs font-medium tracking-[0.1em] sm:mt-16 sm:grid-cols-4 sm:py-7 sm:tracking-[0.12em] lg:mt-20">
        <li>CONSTRUCTION</li>
        <li>ENERGY</li>
        <li>OIL &amp; GAS</li>
        <li>NUCLEAR</li>
      </ul>
    </section>
  );
}

