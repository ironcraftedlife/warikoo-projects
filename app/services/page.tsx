import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | WARIKOO Projects Ltd",
  description:
    "Flexible project planning, controls, construction advisory, HSE and documentation support for construction clients across the UK.",
};

export default function ServicesPage() {
  return (
    <>
      <Header contactHref="/contact" />
      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="services-page-heading" className="site-container section-spacing">
          <p className="section-label mb-8 sm:mb-10">
            <span aria-hidden="true" className="section-label-rule" />
            SERVICES
          </p>
          <h1 id="services-page-heading" className="max-w-[20ch] text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.08] font-medium tracking-[-0.055em]">
            Project expertise<br />where you need it.
          </h1>
          <div className="mt-9 grid sm:mt-12 lg:grid-cols-12">
            <div className="max-w-[40rem] space-y-5 text-base leading-[1.8] text-muted sm:text-lg lg:col-span-7 lg:col-start-6">
              <p>
                WARIKOO Projects provides flexible planning, project controls,
                construction advisory, HSE and documentation support for
                construction clients across the UK.
              </p>
              <p>
                Support can be provided for a specific deliverable, project
                stage, one-off review or ongoing requirement.
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Our services" className="bg-surface">
          <div data-reveal-group className="site-container py-8 sm:py-12 lg:py-16">
            {services.map((service) => (
              <article data-reveal="row" key={service.slug} aria-labelledby={`service-${service.number}-heading`} className="grid gap-6 border-t border-border py-10 sm:py-14 lg:grid-cols-12 lg:gap-7 lg:py-16">
                <p className="text-xs font-medium tracking-[0.16em] text-muted lg:col-span-4">
                  SERVICE <span className="ml-3 text-accent">{service.number}</span>
                </p>
                <div className="min-w-0 lg:col-span-8">
                  <h2 id={`service-${service.number}-heading`} className="max-w-[24ch] text-[clamp(2rem,3.75vw,3.25rem)] leading-[1.15] font-medium tracking-[-0.045em] text-balance">
                    {service.title}
                  </h2>
                  <div className="mt-7 grid gap-7 sm:mt-9 sm:grid-cols-2 sm:gap-9">
                    <p className="text-base leading-[1.75] text-muted">{service.introduction}</p>
                    <div>
                      <p className="mb-4 text-xs font-medium tracking-[0.14em] text-muted">SELECTED CAPABILITIES</p>
                      <ul className="space-y-3 text-sm leading-[1.7]">
                        {service.capabilities.slice(0, 3).map((capability) => (
                          <li key={capability} className="border-l border-border pl-3">{capability}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`} className="nav-link mt-7 inline-flex min-h-11 items-center gap-8 border-b border-border text-sm font-medium sm:mt-9">
                    Explore Service <span aria-hidden="true" className="motion-arrow text-accent">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <FinalCTA contactHref="/contact" />
      </main>
      <Footer />
    </>
  );
}
