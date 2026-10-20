"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Experience & Expertise", href: "/experience" },
  { label: "About", href: "/#about" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ contactHref }: { contactHref: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const sentinel = useRef<HTMLSpanElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sentinel.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (header.current) header.current.dataset.scrolled = String(!entry.isIntersecting);
    });
    observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <span ref={sentinel} aria-hidden="true" className="header-sentinel" />
    <header
      ref={header}
      className={`site-header ${isOpen ? "header-menu-open" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="site-container">
      <div className="header-row flex min-h-20 flex-wrap items-center justify-between gap-x-6 lg:min-h-24 lg:flex-nowrap">
        <Link
          href="/"
          className="flex min-h-11 shrink-0 items-center py-2"
          aria-label="WProjects — Home"
        >
          <Image
            src="/brand/warikoo-monogram-header.svg"
            alt=""
            width={431}
            height={456}
            unoptimized
            className="h-10 w-auto lg:h-12"
          />
        </Link>
        <button
          ref={menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="flex min-h-11 items-center gap-3 py-2 text-sm font-medium hover:text-muted lg:hidden"
        >
          {isOpen ? "Close" : "Menu"}
          <span aria-hidden="true" className="text-lg leading-none">
            {isOpen ? "−" : "+"}
          </span>
        </button>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`${isOpen ? "block" : "hidden"} absolute -inset-x-[var(--page-gutter)] top-full max-h-[calc(100svh-5rem)] w-[calc(100%+var(--page-gutter)*2)] overflow-y-auto border-b border-border bg-background px-[var(--page-gutter)] pt-3 pb-6 lg:static lg:block lg:max-h-none lg:w-auto lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-6 xl:gap-8">
            {navigation.map(
              ({ label, href }) => {
                const isCurrentPage = pathname === href;
                const isCurrentSection = href === "/services" && pathname.startsWith("/services/");
                const isActive = isCurrentPage || isCurrentSection;
                return (
                <li key={label}>
                    <Link
                      href={href}
                      aria-current={isCurrentPage ? "page" : isCurrentSection ? "location" : undefined}
                      onClick={() => {
                        setIsOpen(false);
                        if (isOpen) menuButton.current?.focus();
                      }}
                      className="nav-link block py-3 text-base lg:text-sm"
                    >
                      <span className={`header-nav-label ${isActive ? "header-nav-label-active" : ""}`}>{label}</span>
                    </Link>
                </li>
                );
              },
            )}
            <li className="mt-3 lg:mt-0">
              <Link
                href={contactHref}
                onClick={() => {
                  setIsOpen(false);
                  if (isOpen) menuButton.current?.focus();
                }}
                className="project-link inline-flex min-h-11 items-center justify-between gap-5 border border-accent px-4 py-2.5 text-sm font-medium"
              >
                Discuss a Project <span aria-hidden="true" className="motion-arrow">→</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
    </>
  );
}

