"use client";

import * as React from "react";

import { CompanyCard } from "@/components/company-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { companies } from "@/lib/companies";

const featuredNames = [
  "Zeta Surgical",
  "Soundbrenner",
  "Omni.pet",
  "Aonic (Poladrone)",
  "Airhive",
  "Umami Bioworks",
  "Galy",
  "Ajuna Network",
  "Sova Health",
];

const featured = featuredNames
  .map((name) => companies.find((item) => item.name === name))
  .filter((item): item is (typeof companies)[number] => Boolean(item));

const filters = ["All", ...Array.from(new Set(featured.map((item) => item.sector)))];

export function PortfolioGrid() {
  const [filter, setFilter] = React.useState("All");

  const visible = React.useMemo(
    () => (filter === "All" ? featured : featured.filter((item) => item.sector === filter)),
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
                {companies.length} companies you can{" "}
                <span className="font-serif italic text-muted">look up yourself</span>
              </>
            }
          />

          <Reveal delay={120}>
            <a
              href="/portfolio"
              className="group inline-flex cursor-pointer items-center gap-2 border border-line bg-white px-4 py-2.5 text-[13.5px] font-medium text-ink transition-colors hover:border-ink/25"
            >
              Browse the full portfolio
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
                  className={`cursor-pointer whitespace-nowrap border px-3.5 py-2 text-[13px] transition-all duration-300 ${
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
            <div
              key={company.name}
              className="animate-rise"
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <CompanyCard company={company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
