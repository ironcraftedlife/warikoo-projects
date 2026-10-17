import Link from "next/link";
import ServiceAccordion from "./ServiceAccordion";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="site-container section-spacing scroll-mt-8 pb-[clamp(2.5rem,4vw,4rem)]"
    >
      <div data-reveal="intro" data-reveal-rule className="grid gap-7 border-t border-border pt-5 lg:grid-cols-12">
        <p data-reveal-part="label" className="section-label lg:col-span-4">
          <span aria-hidden="true" className="section-label-rule" />
          OUR SERVICES
        </p>
        <div className="lg:col-span-8">
          <h2
            id="services-heading" data-reveal-part="heading"
            className="section-heading max-w-[18ch]"
          >
            Project expertise where your delivery needs it.
          </h2>
          <p data-reveal-part="copy" className="mt-7 max-w-[39rem] text-base leading-[1.75] text-muted sm:mt-9 sm:text-lg">
            Flexible project support across planning, construction advisory,
            HSE, performance control and project documentation.
          </p>
        </div>
      </div>

      <div data-reveal-group className="mt-14 border-t border-border sm:mt-20">
        {services.map((service) => (
          <ServiceAccordion key={service.number} id={`service-${service.number}`} summary={
            <>
              <span id={`service-${service.number}-number`} className="pt-1 text-xs font-medium tracking-[0.1em] text-muted lg:col-span-1">
                {service.number}
              </span>
              <span id={`service-${service.number}-title`} className="max-w-[23ch] text-[clamp(1.425rem,2.375vw,2.1375rem)] leading-[1.2] font-medium tracking-[-0.035em] lg:col-span-5">
                {service.title}
              </span>
              <span className="col-start-2 max-w-[27rem] text-base leading-[1.7] text-muted lg:col-span-5 lg:col-start-7 lg:row-start-1 lg:self-center">
                {service.homepageDescription}
              </span>
            </>
          }>
            <div className="grid pb-9 pl-[3.25rem] sm:pl-[5rem] lg:grid-cols-12 lg:pb-11 lg:pl-0">
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="section-label mb-4 text-muted">
                  CAPABILITIES
                </p>
                <ul className="grid gap-x-8 gap-y-3 text-base leading-[1.6] sm:grid-cols-2">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="border-l border-accent pl-3">
                      {capability}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Explore ${service.title}`}
                  className="nav-link mt-6 inline-flex min-h-11 items-center gap-7 border-b border-border text-sm font-medium"
                >
                  Explore Service <span aria-hidden="true" className="motion-arrow text-accent">→</span>
                </Link>
              </div>
            </div>
          </ServiceAccordion>
        ))}
      </div>
    </section>
  );
}

