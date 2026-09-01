"use client";

import * as React from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/lib/data";

const filters = ["All", ...Array.from(new Set(portfolio.map((item) => item.sector)))];

const stageTone: Record<string, string> = {
  Acquired: "bg-ink text-white",
  Exit: "bg-ink text-white",
};

export function PortfolioGrid() {
  const [filter, setFilter] = React.useState("All");

  const visible = React.useMemo(
    () => (filter === "All" ? portfolio : portfolio.filter((item) => item.sector === filter)),
    [filter],
  );

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 border-t border-line bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="05"
            eyebrow="Portfolio"
            title={
              <>
                259 companies, and the{" "}
                <span className="font-serif italic text-muted">sectors behind them</span>
              </>
            }
          />

          <Reveal delay={120}>
            <a
              href="#start"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-[13.5px] font-medium text-ink transition-colors hover:border-ink/25 hover:bg-white"
            >
              See the full portfolio
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mask-fade-x-mobile mt-10 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="flex gap-1.5 pb-1">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`cursor-pointer whitespace-nowrap rounded-xl border px-3.5 py-2 text-[13px] transition-all duration-300 ${
                    filter === item
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-white text-muted hover:border-ink/25 hover:text-ink"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((company, index) => (
            <article
              key={company.name}
              className="group animate-rise cursor-pointer rounded-2xl border border-line bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_28px_55px_-45px_rgba(20,19,16,0.75)]"
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[16.5px] tracking-[-0.02em] text-ink">{company.name}</h3>
                <span
                  className={`rounded-lg px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                    stageTone[company.stage] ?? "bg-surface-2 text-ink-soft"
                  }`}
                >
                  {company.stage}
                </span>
              </div>

              <p className="mt-6 text-[12.5px] text-muted">{company.sector}</p>

              <div className="mt-2 flex items-center justify-between border-t border-line-soft pt-3">
                <span className="text-[12.5px] text-ink-soft">{company.country}</span>
                <span className="font-mono text-[11px] text-muted transition-colors duration-300 group-hover:text-brand">
                  View &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
