import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact | WARIKOO Projects Ltd",
  description: "Discuss project planning, controls, construction advisory, HSE or documentation support for your construction project.",
};

export default function ContactPage() {
  return (
    <>
      <Header contactHref="/contact" />
      <main id="main-content" tabIndex={-1} className="site-container section-spacing">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="section-label mb-8">
              <span aria-hidden="true" className="section-label-rule" />
              START A CONVERSATION
            </p>
            <h1 className="text-[clamp(2.75rem,5.5vw,4.75rem)] leading-[1.08] font-medium tracking-[-0.055em]">
              Tell us about<br />your project.
            </h1>
            <p className="mt-7 max-w-[35rem] text-base leading-[1.75] text-muted sm:text-lg">
              Whether you need support with a specific deliverable, project stage
              or ongoing requirement, tell us a little about the project and
              where additional support is needed.
            </p>
            <p className="mt-9 max-w-[35rem] border-t border-border pt-5 text-base leading-[1.75] text-muted">
              WARIKOO Projects supports construction clients across the UK, with
              services delivered primarily remotely and site visits available by
              prior arrangement.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
