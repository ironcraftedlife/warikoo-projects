import type { ReactNode } from "react";
import DemoVideo from "./DemoVideo";
import styles from "./CinematicHero.module.css";

export default function CinematicHero({ id, eyebrow, title, children, home = false }: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  home?: boolean;
}) {
  return (
    <section data-cinematic-hero aria-labelledby={id} className={styles.hero}>
      <DemoVideo background />
      <div aria-hidden="true" className={styles.shade} />
      <div className={`site-container ${styles.content}`}>
        <p className="section-label mb-7 sm:mb-9">
          <span aria-hidden="true" className="section-label-rule" />
          {eyebrow}
        </p>
        <h1 id={id} className={home
          ? "max-w-[23ch] text-[clamp(2.15rem,4.33vw,3.79rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance"
          : "max-w-[23ch] text-[clamp(2.2rem,4.8vw,4.2rem)] leading-[1.08] font-medium tracking-[-0.055em] text-balance"}>
          {title}
        </h1>
        <div className="mt-7 max-w-[40rem] text-base leading-[1.8] sm:mt-9 sm:text-lg">
          {children}
        </div>
        {home && (
          <ul aria-label="Sectors we support" className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/30 pt-5 text-xs font-medium tracking-[0.12em] sm:mt-12 sm:gap-x-12">
            <li>CONSTRUCTION</li><li>ENERGY</li><li>OIL &amp; GAS</li>
          </ul>
        )}
      </div>
    </section>
  );
}
