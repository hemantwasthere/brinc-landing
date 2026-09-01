"use client";

import * as React from "react";

import { CompanyCard } from "@/components/company-card";
import { companies, sectorOrder, stageOrder } from "@/lib/companies";

const sectors = sectorOrder.filter((sector) =>
  companies.some((company) => company.sector === sector),
);

export function CompanyExplorer() {
  const [query, setQuery] = React.useState("");
  const [sector, setSector] = React.useState("All");
  const [stage, setStage] = React.useState("All");

  const visible = React.useMemo(() => {
    const needle = query.trim().toLowerCase();

    return companies.filter((company) => {
      if (sector !== "All" && company.sector !== sector) return false;
      if (stage !== "All" && company.stage !== stage) return false;
      if (!needle) return true;

      return (
        company.name.toLowerCase().includes(needle) ||
        company.blurb.toLowerCase().includes(needle) ||
        company.sector.toLowerCase().includes(needle)
      );
    });
  }, [query, sector, stage]);

  const reset = () => {
    setQuery("");
    setSector("All");
    setStage("All");
  };

  const isFiltered = query !== "" || sector !== "All" || stage !== "All";

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
      <div className="border border-line bg-white">
        <div className="flex flex-col gap-3 border-b border-line p-4 sm:flex-row sm:items-center">
          <label className="flex flex-1 items-center gap-2.5 border border-line bg-surface/60 px-3 py-2.5 transition-colors focus-within:border-ink/30">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="4.6" stroke="#6f6b63" strokeWidth="1.4" />
              <path d="M10.6 10.6 14 14" stroke="#6f6b63" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search 94 companies by name, sector or what they build"
              className="w-full bg-transparent text-[13.5px] text-ink outline-none placeholder:text-muted"
            />
          </label>

          <div className="flex items-center gap-1.5">
            {["All", ...stageOrder].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setStage(item)}
                className={`cursor-pointer border px-3 py-2 text-[12.5px] transition-all duration-300 ${
                  stage === item
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-white text-muted hover:border-ink/25 hover:text-ink"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 p-4">
          {["All", ...sectors].map((item) => {
            const count =
              item === "All"
                ? companies.length
                : companies.filter((company) => company.sector === item).length;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setSector(item)}
                className={`cursor-pointer border px-3 py-1.5 text-[12.5px] transition-all duration-300 ${
                  sector === item
                    ? "border-brand bg-brand-soft text-brand-ink"
                    : "border-line bg-white text-muted hover:border-ink/25 hover:text-ink"
                }`}
              >
                {item}
                <span className="ml-1.5 font-mono text-[10.5px] tabular-nums opacity-60">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {visible.length} {visible.length === 1 ? "company" : "companies"}
        </p>

        {isFiltered ? (
          <button
            type="button"
            onClick={reset}
            className="cursor-pointer font-mono text-[11px] uppercase tracking-[0.16em] text-brand transition-opacity hover:opacity-70"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      {visible.length === 0 ? (
        <div className="mt-6 border border-dashed border-line bg-surface/50 px-6 py-16 text-center">
          <p className="text-[15px] text-ink">Nothing matches that yet.</p>
          <p className="mt-2 text-[13.5px] text-muted">
            Try a broader sector, or clear the search to see all {companies.length} companies.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((company, index) => (
            <div
              key={company.name}
              className="animate-rise"
              style={{ animationDelay: `${Math.min(index, 12) * 45}ms` }}
            >
              <CompanyCard company={company} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
