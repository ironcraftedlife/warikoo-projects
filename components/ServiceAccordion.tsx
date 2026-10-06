"use client";

import { useState, type ReactNode } from "react";
import styles from "./ServiceAccordion.module.css";

type ServiceAccordionProps = {
  id: string;
  summary: ReactNode;
  children: ReactNode;
};

export default function ServiceAccordion({ id, summary, children }: ServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `${id}-panel`;

  return (
    <div data-reveal="row" data-open={isOpen} className={`${styles.accordion} border-b border-border`}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-labelledby={`${id}-number ${id}-title`}
        onClick={() => setIsOpen((open) => !open)}
        className="grid w-full cursor-pointer grid-cols-[2.25rem_minmax(0,1fr)_auto] gap-x-4 gap-y-4 py-7 text-left hover:text-accent sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-x-6 sm:py-9 lg:grid-cols-12 lg:gap-x-5 lg:py-10"
      >
        {summary}
        <span
          aria-hidden="true"
          className={`${styles.indicator} col-start-3 row-start-1 self-center text-xl leading-none text-accent lg:col-span-1 lg:col-start-12 lg:justify-self-end`}
        >
          +
        </span>
      </button>
      <div id={panelId} className={styles.panel} aria-hidden={!isOpen} inert={!isOpen}>
        <div className={styles.clip}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
}
