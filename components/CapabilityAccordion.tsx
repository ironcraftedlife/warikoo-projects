"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import styles from "./CapabilityAccordion.module.css";

type Capability = {
  title: string;
  description: string;
};

export default function CapabilityAccordion({ items }: { items: readonly Capability[] }) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let target: number;
    switch (event.key) {
      case "ArrowDown": target = (index + 1) % items.length; break;
      case "ArrowUp": target = (index - 1 + items.length) % items.length; break;
      case "Home": target = 0; break;
      case "End": target = items.length - 1; break;
      default: return;
    }
    event.preventDefault();
    buttons.current[target]?.focus();
  }

  return (
    <div className="border-t border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${id}-${index}-trigger`;
        const panelId = `${id}-${index}-panel`;

        return (
          <div key={item.title} className={styles.item} data-open={isOpen}>
            <h3>
              <button
                ref={(button) => { buttons.current[index] = button; }}
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className="grid min-h-11 w-full cursor-pointer grid-cols-[1.75rem_minmax(0,1fr)_1rem] items-start gap-x-3 py-[1.125rem] text-left hover:text-accent focus-visible:outline-accent focus-visible:outline-offset-[-2px] sm:grid-cols-[2rem_minmax(0,1fr)_1rem] sm:gap-x-4 sm:py-5"
              >
                <span aria-hidden="true" className="pt-1 text-xs font-medium tracking-[0.1em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 text-base leading-[1.5] font-medium tracking-[-0.02em] sm:text-lg">
                  {item.title}
                </span>
                <span aria-hidden="true" className="pt-0.5 text-center text-lg leading-[1.5] text-accent">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              inert={!isOpen}
              className={styles.panel}
            >
              <div className={styles.clip}>
                <p className={`${styles.description} pr-7 pb-[1.125rem] pl-10 text-base leading-[1.75] text-muted sm:pr-8 sm:pb-5 sm:pl-12`}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
