import Link from "next/link";
import type { Service } from "@/lib/services";

const engagementOptions = [
  "A specific deliverable",
  "A project stage",
  "A one-off review",
  "An ongoing requirement",
];

export default function ServiceDetail({ service, nextService }: { service: Service; nextService?: Service }) {
  return (
    <>
      <section aria-labelledby="service-heading" className="site-container section-spacing">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 sm:mb-10">
          <p className="section-label">
            <span aria-hidden="true" className="section-label-rule" />
            SERVICE {service.number}
          </p>
          <Link href="/services" className="nav-link inline-flex min-h-11 items-center text-sm text-muted">All Services</Link>
        </div>
        <h1 id="service-heading" className="max-w-[24ch] text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance">
          {service.title}
        </h1>
        <div className="mt-9 grid sm:mt-12 lg:grid-cols-12">
          <p className="max-w-[40rem] text-base leading-[1.8] text-muted sm:text-lg lg:col-span-7 lg:col-start-6">
            {service.introduction}
          </p>
        </div>
      </section>

      <section aria-labelledby="support-heading" className="bg-surface">
        <div className="site-container section-spacing grid gap-8 lg:grid-cols-12 lg:gap-7">
          <h2 id="support-heading" className="section-label lg:col-span-4">
            <span aria-hidden="true" className="section-label-rule" />
            WHAT WE SUPPORT
          </h2>
          <ul data-reveal="row" data-reveal-rule className="min-w-0 border-t border-border lg:col-span-8">
            {service.capabilities.map((capability) => (
              <li key={capability} className="border-b border-border py-6 text-[clamp(1.25rem,2.1vw,1.75rem)] leading-[1.4] tracking-[-0.02em] sm:py-7">
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-dark text-surface">
        <div className="site-container section-spacing">
          <section data-reveal data-reveal-rule="light" aria-labelledby="engagement-heading" className="grid gap-8 border-t border-white/20 pt-5 lg:grid-cols-12 lg:gap-7">
            <h2 id="engagement-heading" className="section-label lg:col-span-4">
              <span aria-hidden="true" className="section-label-rule" />
              FLEXIBLE ENGAGEMENT
            </h2>
            <div className="lg:col-span-8">
              <p className="text-base leading-[1.8] text-white/75 sm:text-lg">Support may be provided for:</p>
              <ul className="mt-7 grid gap-x-9 sm:grid-cols-2">
                {engagementOptions.map((option) => (
                  <li key={option} className="border-b border-white/20 py-5 text-xl leading-[1.4] tracking-[-0.02em] sm:text-2xl">{option}</li>
                ))}
              </ul>
            </div>
          </section>
          <section data-reveal aria-labelledby="delivery-heading" className="mt-14 grid gap-8 border-t border-white/20 pt-5 sm:mt-20 lg:grid-cols-12 lg:gap-7">
            <h2 id="delivery-heading" className="section-label lg:col-span-4">
              <span aria-hidden="true" className="section-label-rule" />
              DELIVERY
            </h2>
            <p className="max-w-[40rem] text-base leading-[1.8] text-white/75 sm:text-lg lg:col-span-8">
              WARIKOO Projects works primarily through remote review, reporting,
              planning and documentation support across the UK, with site visits
              available by prior arrangement.
            </p>
          </section>
        </div>
      </div>

      <nav aria-label="Service sequence" className="site-container pt-14 sm:pt-20">
        <div data-reveal className="grid gap-7 border-t border-border pt-5 lg:grid-cols-12">
          <p className="section-label lg:col-span-4">
            <span aria-hidden="true" className="section-label-rule" />
            {nextService ? "NEXT SERVICE" : "ALL SERVICES"}
          </p>
          <Link href={nextService ? `/services/${nextService.slug}` : "/services"} className="group block min-w-0 lg:col-span-8">
            <span className="block max-w-[25ch] text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.2] font-medium tracking-[-0.035em] group-hover:text-muted">
              {nextService ? nextService.title : "Explore all services"}
              <span aria-hidden="true" className="motion-arrow ml-3 inline-block text-accent">→</span>
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
