import Link from "next/link";
import CinematicHero from "./CinematicHero";

export default function Hero({ contactHref }: { contactHref: string }) {
  return (
    <CinematicHero id="hero-heading" eyebrow="PROJECT DELIVERY & ADVISORY" title={<>Experienced project support. Without the <span className="whitespace-nowrap">full-time</span> overhead.</>} home>
      <p>
        WProjects provides flexible project planning, project controls,
        construction advisory, HSE and documentation support for construction
        businesses that need additional project expertise.
      </p>
      <div className="mt-7 flex flex-col items-start gap-5 min-[420px]:flex-row min-[420px]:items-center min-[420px]:gap-7 sm:mt-8">
        <Link href={contactHref} className="project-link inline-flex min-h-12 items-center justify-between gap-8 bg-accent px-5 py-3 text-sm font-medium text-foreground">
          Discuss Your Project <span aria-hidden="true" className="motion-arrow">→</span>
        </Link>
        <Link href="/services" className="nav-link inline-flex min-h-11 items-center border-b border-white/50 text-sm font-medium">
          Explore Services
        </Link>
      </div>
    </CinematicHero>
  );
}
