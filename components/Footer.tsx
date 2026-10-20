import Link from "next/link";

const sectors = ["Construction", "Energy", "Oil & Gas"];

export default function Footer() {
  return (
    <footer className="bg-dark text-surface">
      <div className="site-container pt-14 pb-7 sm:pt-20 sm:pb-9">
        <div className="grid gap-12 border-t border-white/20 pt-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <p className="max-w-[24rem] text-base leading-[1.75] text-white/75 sm:col-span-2 lg:col-span-6 lg:pr-16">
            WProjects provides project planning, controls, construction advisory,
            HSE and documentation support.
          </p>
          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <p className="section-label mb-5 text-white/60">
              NAVIGATION
            </p>
            <ul className="text-base lg:text-sm">
              <li><Link href="/services" className="inline-flex min-h-11 items-center hover:text-accent">Services</Link></li>
              <li><Link href="/experience" className="inline-flex min-h-11 items-center hover:text-accent">Experience &amp; Expertise</Link></li>
              <li><Link href="/#about" className="inline-flex min-h-11 items-center hover:text-accent">About</Link></li>
              <li><Link href="/#how-we-work" className="inline-flex min-h-11 items-center hover:text-accent">How We Work</Link></li>
              <li><Link href="/contact" className="inline-flex min-h-11 items-center hover:text-accent">Contact</Link></li>
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <p className="section-label mb-5 text-white/60">
              SECTORS WE SUPPORT
            </p>
            <ul className="space-y-3 text-base lg:text-sm">
              {sectors.map((sector) => <li key={sector}>{sector}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-6 sm:mt-16 lg:mt-20">
          <Link
            href="/"
            aria-label="WProjects home"
            className="flex min-h-11 w-fit items-center text-[clamp(1.75rem,7vw,6.5rem)] leading-none font-medium tracking-[-0.065em]"
          >
            WProjects
          </Link>
        </div>
        <p className="mt-10 border-t border-white/20 pt-5 text-xs text-white/60 sm:mt-14">
          © {new Date().getFullYear()} WARIKOO Projects Ltd.
        </p>
      </div>
    </footer>
  );
}

