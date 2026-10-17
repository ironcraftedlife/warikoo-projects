import Link from "next/link";

export default function FinalCTA({ contactHref }: { contactHref: string }) {
  return (
    <section data-reveal="cta" id="contact" aria-labelledby="contact-heading" className="bg-background scroll-mt-8">
      <div className="site-container section-spacing">
        <div data-reveal-rule className="grid gap-7 border-t border-border pt-5 lg:grid-cols-12">
          <p className="section-label lg:col-span-4">
            <span aria-hidden="true" className="section-label-rule" />
            START A CONVERSATION
          </p>
          <div className="lg:col-span-8">
            <h2
              id="contact-heading"
              className="max-w-[18ch] text-[clamp(2.4475rem,5.34vw,4.895rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance"
            >
              Have a project that needs additional support?
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-7 sm:mt-14 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-[38rem] text-base leading-[1.8] text-muted sm:text-lg">
              Tell us about your project, current challenges and where you need
              support. We can discuss how W Projects may be able to assist.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5 min-[420px]:flex-row min-[420px]:items-center min-[420px]:gap-7 sm:mt-10">
              <Link
                href={contactHref}
                className="project-link inline-flex min-h-12 items-center justify-between gap-8 border border-accent bg-accent px-5 py-3 text-sm font-medium text-foreground"
              >
                Discuss Your Project <span aria-hidden="true" className="motion-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
