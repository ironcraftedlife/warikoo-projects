import Image from "next/image";
import Link from "next/link";

const sectors = ["Construction", "Energy", "Oil & Gas"];

export default function Footer() {
  return (
    <footer className="bg-dark text-surface">
      <div className="site-container pt-14 pb-10 sm:pt-20 sm:pb-12">
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

      </div>

      <div className="bg-background text-foreground">
        <div className="site-container py-2 sm:py-3">
          <Link
            href="/"
            aria-label="WProjects home"
            className="block w-[220px] max-w-full sm:w-[260px]"
          >
            <Image src="/brand/warikoo-logo-original.svg" alt="WARIKOO Projects — Plan, Control, Deliver" width={1254} height={1254} unoptimized className="h-auto w-full" />
          </Link>
        </div>
      </div>
      <div className="site-container py-7 sm:py-9">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} WARIKOO Projects Ltd.
        </p>
      </div>
    </footer>
  );
}

