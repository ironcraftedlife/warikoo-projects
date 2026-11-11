import Image from "next/image";
import Link from "next/link";

const sectors = ["Construction", "Energy", "Oil & Gas"];

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="site-container pt-10 pb-6 sm:pt-14 sm:pb-8">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-6">
            <Link href="/" aria-label="WProjects home" className="block w-[160px] max-w-full sm:w-[180px]">
              <Image src="/brand/warikoo-logo-original.svg" alt="WARIKOO Projects — Plan, Control, Deliver" width={1254} height={1254} unoptimized className="h-auto w-full" />
            </Link>
            <p className="mt-4 max-w-[24rem] text-base leading-[1.75] text-muted lg:pr-8">
              WProjects provides project planning, controls, construction advisory,
              HSE and documentation support.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <p className="section-label mb-5 text-muted">
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
            <p className="section-label mb-5 text-muted">
              SECTORS WE SUPPORT
            </p>
            <ul className="space-y-3 text-base lg:text-sm">
              {sectors.map((sector) => <li key={sector}>{sector}</li>)}
            </ul>
          </div>
        </div>
        <p className="mt-9 border-t border-border pt-5 text-xs text-muted sm:mt-12">
          © {new Date().getFullYear()} WARIKOO Projects Ltd.
        </p>
      </div>
    </footer>
  );
}
