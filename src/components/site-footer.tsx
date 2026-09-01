import * as React from "react";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { site } from "@/lib/data";

const columns = [
  {
    title: "Network",
    links: [
      { label: "Investors", href: "/investors" },
      { label: "Partners", href: "/partners" },
      { label: "Founders", href: "/founders" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { label: "VentureVerse", href: site.ventureverse, external: true },
      { label: "Founder community", href: site.community, external: true },
      { label: "UpRound club", href: site.upround, external: true },
      { label: "Apply to a program", href: site.apply, external: true },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "LinkedIn", href: site.linkedin, external: true },
      { label: "X", href: site.x, external: true },
      { label: "Instagram", href: site.instagram, external: true },
      { label: "YouTube", href: site.youtube, external: true },
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
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex cursor-pointer items-center gap-2 border border-line bg-white px-3.5 py-2 text-[13px] text-ink transition-colors hover:border-brand/40 hover:bg-brand-soft"
            >
              {site.email}
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
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="cursor-pointer text-[13.5px] text-ink-soft transition-colors hover:text-brand"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="cursor-pointer text-[13.5px] text-ink-soft transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    )}
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
              href="https://brinc.io/terms-of-use"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer text-[12.5px] text-muted transition-colors hover:text-ink"
            >
              Terms of Use
            </a>
            <a
              href="https://brinc.io/privacy-policy"
              target="_blank"
              rel="noreferrer noopener"
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
