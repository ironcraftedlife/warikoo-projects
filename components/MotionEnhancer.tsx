"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | undefined;

    function start() {
      observer?.disconnect();
      elements.forEach((element) => {
        element.classList.remove("is-revealing");
        element.style.removeProperty("--reveal-order");
      });
      if (preference.matches) return;

      const initialized = new WeakSet<Element>();
      observer = new IntersectionObserver((entries) => {
        const groups = new Map<Element, number>();
        for (const entry of entries) {
          const firstObservation = !initialized.has(entry.target);
          initialized.add(entry.target);
          if (!entry.isIntersecting) continue;
          observer?.unobserve(entry.target);

          // Content already on screen at hydration stays visible without a flash.
          if (firstObservation) continue;
          const element = entry.target as HTMLElement;
          const group = element.closest("[data-reveal-group]");
          if (group) {
            const index = groups.get(group) ?? 0;
            element.style.setProperty("--reveal-order", String(Math.min(index, 3)));
            groups.set(group, index + 1);
          }
          element.classList.add("is-revealing");
        }
      }, { rootMargin: "0px 0px -32px 0px", threshold: 0 });
      elements.forEach((element) => observer?.observe(element));
    }

    start();
    preference.addEventListener("change", start);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", start);
      elements.forEach((element) => {
        element.classList.remove("is-revealing");
        element.style.removeProperty("--reveal-order");
      });
    };
  }, [pathname]);

  return null;
}
