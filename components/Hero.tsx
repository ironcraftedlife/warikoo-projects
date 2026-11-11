import DemoVideo from "@/components/DemoVideo";
import { demoVideoEnabled } from "@/lib/demo-video";
import Link from "next/link";

export default function Hero({ contactHref }: { contactHref: string }) {
  if (demoVideoEnabled) return (
    <section aria-labelledby="hero-heading" className="hero-entrance site-container pt-8 sm:pt-10 lg:pt-12">
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        <div className="min-w-0">
      <p data-hero-part="eyebrow" className="section-label mb-8 gap-2 sm:mb-10 sm:gap-3">
        <span aria-hidden="true" className="section-label-rule" />
        PROJECT DELIVERY &amp; ADVISORY
      </p>
      <h1
        id="hero-heading"
        data-hero-part="headline"
        className="max-w-[22ch] text-[clamp(2.15rem,4.33vw,3.79rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance"
      >
        <span className="block">Experienced project support.</span>
        <span className="block">Without the <span className="whitespace-nowrap">full-time</span> overhead.</span>
      </h1>
      <div className="mt-7">
        <div className="min-w-0">
          <p data-hero-part="copy" className="max-w-[42rem] text-base leading-[1.8] text-muted sm:text-lg">
            WProjects provides flexible project planning, project controls,
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
        </div>
        <DemoVideo />
      </div>
      <ul data-hero-part="industries" aria-label="Sectors we support" className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4 border-t border-border py-6 text-center text-xs font-medium tracking-[0.1em] sm:mt-12 sm:gap-x-12 sm:py-7 sm:tracking-[0.12em] lg:mt-12 lg:gap-x-16">
        <li>CONSTRUCTION</li>
        <li>ENERGY</li>
        <li>OIL &amp; GAS</li>
      </ul>
    </section>
  );

  return (
    <section aria-labelledby="hero-heading" className="hero-entrance site-container pt-12 sm:pt-16 lg:pt-20">
      <p data-hero-part="eyebrow" className="section-label mb-8 gap-2 sm:mb-10 sm:gap-3">
        <span aria-hidden="true" className="section-label-rule" />
        PROJECT DELIVERY &amp; ADVISORY
      </p>
      <h1
        id="hero-heading"
        data-hero-part="headline"
        className="max-w-[22ch] text-[clamp(2.15rem,4.33vw,3.79rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance"
      >
        <span className="block">Experienced project support.</span>
        <span className="block">Without the <span className="whitespace-nowrap">full-time</span> overhead.</span>
      </h1>
      <div className="mt-8 grid gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-6">
          <p data-hero-part="copy" className="max-w-[42rem] text-base leading-[1.8] text-muted sm:text-lg">
            WProjects provides flexible project planning, project controls,
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
      <ul data-hero-part="industries" aria-label="Sectors we support" className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-4 border-t border-border py-6 text-center text-xs font-medium tracking-[0.1em] sm:mt-16 sm:gap-x-12 sm:py-7 sm:tracking-[0.12em] lg:mt-20 lg:gap-x-16">
        <li>CONSTRUCTION</li>
        <li>ENERGY</li>
        <li>OIL &amp; GAS</li>
      </ul>
    </section>
  );
}

