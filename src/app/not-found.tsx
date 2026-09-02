import type { Metadata } from "next";
import * as React from "react";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for does not exist.",
  robots: { index: false, follow: true },
};

const routes = [
  { href: "/investors", label: "Investors" },
  { href: "/partners", label: "Partners" },
  { href: "/founders", label: "Founders" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function NotFound() {
  return (
    <main className="relative">
      <SiteNav />

      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 pt-32 pb-20 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Error 404</p>

        <h1 className="mt-5 max-w-2xl text-balance text-[2.4rem] leading-[1.02] tracking-[-0.035em] text-ink sm:text-5xl">
          That page isn&rsquo;t part of the{" "}
          <span className="font-serif italic text-brand">network</span>
        </h1>

        <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-muted">
          The link may be out of date. Pick the side of Brinc you were looking for.
        </p>

        <nav className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group cursor-pointer bg-white px-5 py-4 text-[15px] text-ink transition-colors hover:bg-surface"
            >
              {route.label}
              <span className="ml-1.5 inline-block text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand">
                &rarr;
              </span>
            </Link>
          ))}
        </nav>
      </section>

      <SiteFooter />
    </main>
  );
}
