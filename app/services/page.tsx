import ServiceOverviewPhoto from "@/components/ServiceOverviewPhoto";
import CinematicHero from "@/components/CinematicHero";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | WProjects",
  description:
    "Explore WProjects services: project planning, controls, construction advisory, HSE and documentation support for construction clients across the UK.",
};

export default function ServicesPage() {
  return (
    <>
      <Header contactHref="/contact" cinematic />
      <main id="main-content" tabIndex={-1}>
        <CinematicHero id="services-page-heading" eyebrow="SERVICES" title="Project expertise where you need it.">
          <div className="space-y-5">
            <p>WProjects provides planning, project controls, construction advisory, HSE and documentation support for construction clients across the UK.</p>
            <p>Explore the service areas below to identify the support relevant to your project.</p>
          </div>
        </CinematicHero>

        <section aria-label="Our services" className="bg-surface">
          <div data-reveal-group className="site-container py-4 sm:py-6">
            {services.map((service, index) => (
              <article data-reveal="row" key={service.slug} aria-labelledby={`service-${service.number}-heading`} className="grid items-center gap-7 border-t border-border py-8 sm:gap-9 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:py-14 first:border-t-0">
                <div className={index % 2 === 0 ? "min-w-0" : "min-w-0 lg:col-start-2 lg:row-start-1"}>
                  <ServiceOverviewPhoto slug={service.slug} />
                </div>
                <div className={index % 2 === 0 ? "min-w-0" : "min-w-0 lg:col-start-1 lg:row-start-1"}>
                  <p className="section-label mb-5 text-muted">SERVICE <span className="text-accent">{service.number}</span></p>
                  <h2 id={`service-${service.number}-heading`} className="max-w-[24ch] text-[clamp(1.8rem,3.375vw,2.925rem)] leading-[1.15] font-medium tracking-[-0.045em] text-balance">
                    {service.title}
                  </h2>
                  <div className="mt-6 grid gap-6 xl:grid-cols-2">
                    <p className="text-base leading-[1.75] text-muted">{service.introduction}</p>
                    <div>
                      <p className="section-label mb-4 text-muted">SELECTED CAPABILITIES</p>
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
