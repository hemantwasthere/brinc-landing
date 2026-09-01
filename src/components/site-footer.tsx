import * as React from "react";

import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Network",
    links: [
      { label: "Investors", href: "#investors" },
      { label: "Partners", href: "#partners" },
      { label: "Founders", href: "#founders" },
      { label: "Portfolio", href: "#portfolio" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Programs", href: "#partners" },
      { label: "Careers", href: "#start" },
      { label: "Contact", href: "mailto:marketing@brinc.io" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/brinc" },
      { label: "YouTube", href: "https://www.youtube.com/@brincio" },
      { label: "Instagram", href: "https://www.instagram.com/brinc.io" },
      { label: "X", href: "https://x.com/brinc_io" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-muted">
              Connecting capital, corporates and founders across 12 markets. Backing the next
              generation of businesses since 2014.
            </p>

            <a
              href="mailto:marketing@brinc.io"
              className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-line bg-white px-3.5 py-2 text-[13px] text-ink transition-colors hover:border-brand/40 hover:bg-brand-soft"
            >
              marketing@brinc.io
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {column.title}
              </p>

              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="cursor-pointer text-[13.5px] text-ink-soft transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-muted">
            &copy; {new Date().getFullYear()} Brinc. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#top"
              className="cursor-pointer text-[12.5px] text-muted transition-colors hover:text-ink"
            >
              Terms of Use
            </a>
            <a
              href="#top"
              className="cursor-pointer text-[12.5px] text-muted transition-colors hover:text-ink"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
