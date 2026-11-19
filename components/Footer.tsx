import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const sectors = ["Construction", "Energy", "Oil & Gas"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" aria-label="WProjects home" className={`${styles.logo} block w-[180px] max-w-full`}>
            <Image src="/brand/warikoo-logo-original.svg" alt="WARIKOO Projects — Plan, Control, Deliver" width={1254} height={1254} unoptimized className="h-auto w-full" />
          </Link>
          <p className={`${styles.description} mt-5 max-w-[24rem] text-base leading-[1.75]`}>
            WProjects provides project planning, controls, construction advisory,
            HSE and documentation support.
          </p>
        </div>
        <div className={styles.navigation}>
          <div className={styles.links}>
          <nav aria-label="Footer navigation">
            <p className={`${styles.label} section-label mb-5`}>
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
          <div>
            <p className={`${styles.label} section-label mb-5`}>
              SECTORS WE SUPPORT
            </p>
            <ul className="space-y-3 text-base lg:text-sm">
              {sectors.map((sector) => <li key={sector}>{sector}</li>)}
            </ul>
            <Link href="/contact" className="nav-link mt-6 inline-flex min-h-11 items-center gap-5 border-b border-white/20 text-sm font-medium text-accent hover:text-white">Discuss Your Project <span aria-hidden="true" className="motion-arrow">→</span></Link>
          </div>
          </div>
        </div>
          <p className={`${styles.legal} text-xs text-white/65`}>
            © {new Date().getFullYear()} WARIKOO Projects Ltd.
          </p>
      </div>
    </footer>
  );
}
