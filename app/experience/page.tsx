import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Experience & Expertise | WProjects",
  description:
    "Remote project advisory backed by first-hand construction and capital project experience, with planning, project management and HSE support from WProjects.",
};

const background = [
  "6+ years in construction management",
  "PMP and NEBOSH qualified",
  "10+ years of planning experience within our team",
  "Industrial and energy project environments",
];

const experience = [
  {
    title: "Complex, time-critical projects",
    description:
      "We've worked on projects where tight windows, multiple contractors and safety-critical constraints all had to be managed together. We use that experience to help clients test their plans, spot risks early and keep programmes realistic.",
  },
  {
    title: "Capital project environments",
    description:
      "Long, multi-discipline projects need clear scope, good controls and honest reporting. We bring that perspective to project management reviews, controls and reporting.",
  },
  {
    title: "Safety-led thinking",
    description:
      "Our HSE background means safety is considered at the planning stage, not left until later.",
  },
];

const principles = [
  { title: "Practical.", description: "We focus on what can be delivered safely and on programme." },
  { title: "Independent.", description: "We give clear, honest views to support your decisions." },
  { title: "Flexible.", description: "Remote support that scales to the size and needs of your project." },
];

export default function ExperiencePage() {
  return (
    <>
      <Header contactHref="/contact" />
      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="experience-page-heading" className="site-container section-spacing">
          <p className="section-label mb-8 sm:mb-10">
            <span aria-hidden="true" className="section-label-rule" />
            EXPERIENCE &amp; EXPERTISE
          </p>
          <h1 id="experience-page-heading" className="max-w-[23ch] text-[clamp(2.2rem,4.8vw,4.2rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance">
            Advice grounded in real project delivery.
          </h1>
          <div className="mt-9 grid sm:mt-12 lg:grid-cols-12">
            <p className="max-w-[40rem] text-base leading-[1.8] text-muted sm:text-lg lg:col-span-7 lg:col-start-6">
              WProjects is a remote advisory firm providing practical project
              support, backed by first-hand experience of how complex construction
              and capital projects are planned, controlled and delivered.
            </p>
          </div>
          <div className="mt-14 sm:mt-20">
            <h2 className="section-label">Background at a glance</h2>
            <ul className="mt-6 grid gap-x-8 border-b border-border sm:grid-cols-2 lg:grid-cols-4">
              {background.map((fact) => (
                <li key={fact} className="border-t border-border py-6 text-xl leading-[1.4] font-medium tracking-[-0.025em] sm:py-8">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="bg-surface">
          <div className="site-container section-spacing">
            <section aria-labelledby="advice-experience-heading">
              <h2 id="advice-experience-heading" className="section-heading max-w-[22ch]">
                The experience behind our advice
              </h2>
              <ul className="mt-10 grid gap-x-8 sm:mt-14 md:grid-cols-3 lg:gap-x-12">
                {experience.map((item) => (
                  <li key={item.title} className="border-t border-border py-7 sm:py-9">
                    <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] font-medium tracking-[-0.035em]">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-[40rem] text-base leading-[1.75] text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="planning-heading" className="mt-10 grid gap-8 border-t border-border pt-8 sm:mt-14 sm:pt-10 lg:grid-cols-12 lg:gap-7">
              <h2 id="planning-heading" className="section-heading max-w-[18ch] lg:col-span-5">
                Our planning support
              </h2>
              <p className="max-w-[40rem] text-base leading-[1.8] text-muted sm:text-lg lg:col-span-6 lg:col-start-7">
                Planning is led by an experienced planning professional with over
                10 years of experience, who is part of the WProjects team. They
                develop and review programmes, support schedule development and
                help keep project timelines clear and credible. Combined with our
                project management and HSE experience, this gives clients planning
                support backed by an understanding of how the work is actually
                delivered.
              </p>
            </section>
          </div>
        </div>

        <section aria-labelledby="principles-heading" className="site-container section-spacing">
          <h2 id="principles-heading" className="section-heading max-w-[22ch]">
            How this shapes our advice
          </h2>
          <ul className="mt-10 grid gap-x-8 sm:mt-14 md:grid-cols-3 lg:gap-x-12">
            {principles.map((principle) => (
              <li key={principle.title} className="border-t border-border py-7 sm:py-9">
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] font-medium tracking-[-0.035em]">
                  {principle.title}
                </h3>
                <p className="mt-5 max-w-[28rem] text-base leading-[1.75] text-muted">
                  {principle.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="services-link-heading" className="bg-surface">
          <div className="site-container py-10 sm:py-14">
            <div className="grid gap-7 border-t border-border pt-5 lg:grid-cols-12">
              <h2 id="services-link-heading" className="section-label lg:col-span-4">See how we can help</h2>
              <div className="lg:col-span-8">
                <p className="text-base leading-[1.75] text-muted sm:text-lg">Our experience supports the services we offer.</p>
                <Link href="/services" className="nav-link mt-5 inline-flex min-h-11 w-fit items-center gap-7 border-b border-border text-sm font-medium">
                  View Our Services <span aria-hidden="true" className="motion-arrow text-accent">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <FinalCTA
          contactHref="/contact"
          description="Tell us about your project and where you need help. We'll talk through how WProjects can assist."
        />
      </main>
      <Footer />
    </>
  );
}
