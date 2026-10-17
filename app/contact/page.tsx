import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact | WProjects",
  description: "Discuss project planning, controls, construction advisory, HSE or documentation support with WProjects. UK-wide remote support and site visits by prior arrangement.",
};

export default function ContactPage() {
  return (
    <>
      <Header contactHref="/contact" />
      <main id="main-content" tabIndex={-1} className="site-container">
        <section aria-labelledby="contact-page-heading" className="grid items-center gap-8 pt-8 sm:gap-10 sm:pt-10 md:grid-cols-2 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <div className="min-w-0">
            <p className="section-label mb-8">
              <span aria-hidden="true" className="section-label-rule" />
              START A CONVERSATION
            </p>
            <h1 id="contact-page-heading" className="text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance">
              Tell us about your project.
            </h1>
            <p className="mt-7 max-w-[35rem] text-base leading-[1.75] text-muted sm:text-lg">
              Tell us about the project, the current challenges and the support
              you need.
            </p>
            <a href="#enquiry" className="nav-link mt-6 inline-flex min-h-11 items-center border-b border-border text-sm font-medium sm:mt-8">
              Discuss your project
            </a>
          </div>
          <div className="relative aspect-[16/10] min-w-0 overflow-hidden sm:aspect-[2/1] md:aspect-auto md:h-[360px] lg:h-[440px] xl:h-[460px]">
            <Image
              src="/images/services/contact.jpg"
              alt="A seating area with a sofa, yellow armchairs, a low table and a potted plant."
              fill
              sizes="(min-width: 1280px) 820px, (min-width: 1024px) 785px, (min-width: 768px) 640px, calc(100vw - clamp(40px, 8vw, 128px))"
              loading="eager"
              className="object-cover object-[50%_60%]"
            />
          </div>
        </section>

        <section id="enquiry" aria-labelledby="enquiry-heading" className="mx-auto max-w-[720px] scroll-mt-8 pt-12 pb-16 sm:pt-16 sm:pb-20">
          <h2 id="enquiry-heading" className="text-2xl leading-[1.2] font-medium tracking-[-0.035em] sm:text-3xl">
            Let&apos;s get started.
          </h2>
          <p className="mt-5 max-w-[40rem] text-base leading-[1.75] text-muted">
            WProjects supports construction clients across the UK, with
            services delivered primarily remotely and site visits available by
            prior arrangement.
          </p>
          <div className="mt-8">
            <EnquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
