"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/logo";
import { site } from "@/lib/data";
import { useScrollState } from "@/hooks/use-scroll-state";

const links = [
  { href: "/investors", label: "Investors" },
  { href: "/partners", label: "Partners" },
  { href: "/founders", label: "Founders" },
  { href: "/portfolio", label: "Portfolio" },
];

export function SiteNav() {
  const scrolled = useScrollState(16);
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "border-line bg-white/85 shadow-[0_1px_2px_rgba(20,19,16,0.04),0_12px_40px_-24px_rgba(20,19,16,0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="cursor-pointer" aria-label="Brinc home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative cursor-pointer px-3 py-2 text-[13.5px] transition-colors ${
                    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 bottom-1 h-px origin-left bg-brand transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${site.email}`}
            className="hidden cursor-pointer px-3.5 py-2 text-[13.5px] text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink sm:block"
          >
            Contact
          </a>

          <a
            href="#start"
            className="group cursor-pointer bg-ink px-4 py-2 text-[13.5px] font-medium text-white transition-all duration-300 hover:bg-brand"
          >
            Get started
            <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="cursor-pointer border border-line bg-white p-2 text-ink transition-colors hover:bg-surface-2 md:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d={open ? "M3 3l10 10M13 3L3 13" : "M2 4.5h12M2 11.5h12"}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden border bg-white/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open
            ? "max-h-80 border-line opacity-100 shadow-[0_20px_60px_-30px_rgba(20,19,16,0.5)]"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="p-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block cursor-pointer px-3 py-2.5 text-sm text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${site.email}`}
              className="block cursor-pointer px-3 py-2.5 text-sm text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
