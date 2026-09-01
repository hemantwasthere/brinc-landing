"use client";

import * as React from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { locations } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";

const hq = locations.find((item) => item.status === "HQ") ?? locations[0];
const regions = ["APAC", "MENA", "Americas"] as const;

const legend = [
  { label: "Headquarters", dot: "h-2 w-2 rounded-full bg-brand ring-4 ring-brand/15" },
  { label: "Live market", dot: "h-2 w-2 rounded-full bg-ink" },
  { label: "Coming soon", dot: "h-2 w-2 rounded-full border border-dashed border-brand bg-white" },
];

function arcPath(x: number, y: number) {
  const midX = (hq.x + x) / 2;
  const midY = (hq.y + y) / 2 - Math.abs(hq.x - x) * 0.22 - 2;

  return `M${hq.x},${hq.y} Q${midX},${midY} ${x},${y}`;
}

export function Footprint() {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Where we operate"
          title={
            <>
              Twelve markets, one{" "}
              <span className="font-serif italic text-muted">operating network</span>
            </>
          }
          copy="Programs run in-market with local partners, so founders land with a regulator introduction rather than a plane ticket."
        />

        <Reveal>
          <div
            ref={ref}
            className="mt-12 overflow-hidden rounded-3xl border border-line bg-white"
          >
            <div className="relative aspect-[100/46] w-full bg-surface/50 sm:aspect-[100/30]">
              <div className="grid-paper absolute inset-0 opacity-70" />


              <svg
                viewBox="0 10 100 30"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {[16, 24, 32].map((line) => (
                  <line
                    key={line}
                    x1="0"
                    x2="100"
                    y1={line}
                    y2={line}
                    stroke="#e7e3db"
                    strokeWidth="0.15"
                  />
                ))}

                {locations
                  .filter((item) => item.status !== "HQ")
                  .map((item) => {
                    const isActive = hovered === item.city || hovered === null;

                    return (
                      <path
                        key={item.city}
                        d={arcPath(item.x, item.y)}
                        fill="none"
                        stroke={hovered === item.city ? "#ff5a1f" : "#d9d4c9"}
                        strokeWidth={hovered === item.city ? 0.45 : 0.25}
                        strokeLinecap="round"
                        strokeDasharray="1.4 1.6"
                        className="animate-dash transition-all duration-500"
                        style={{
                          opacity: inView ? (isActive ? 1 : 0.25) : 0,
                          animationDuration: hovered === item.city ? "1.4s" : "6s",
                        }}
                      />
                    );
                  })}
              </svg>

              <div className="absolute inset-0">
                {locations.map((item, index) => {
                  const isHq = item.status === "HQ";
                  const isSoon = item.status === "Coming soon";
                  const isActive = hovered === item.city;

                  return (
                    <React.Fragment key={item.city}>
                      <button
                        type="button"
                        onMouseEnter={() => setHovered(item.city)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(item.city)}
                        onBlur={() => setHovered(null)}
                        aria-label={item.city}
                        style={{ left: `${item.x}%`, top: `${((item.y - 10) / 30) * 100}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer p-2"
                      >
                        <span className="relative flex items-center justify-center">
                          {isHq ? (
                            <span className="absolute h-5 w-5 animate-pulse-ring rounded-full bg-brand/35" />
                          ) : null}

                          <span
                            className={`block rounded-full transition-all duration-500 ${
                              isHq
                                ? "h-2.5 w-2.5 bg-brand ring-4 ring-brand/20"
                                : isSoon
                                  ? "h-2 w-2 border border-dashed border-brand bg-white"
                                  : "h-2 w-2 bg-ink"
                            } ${isActive ? "scale-150" : ""}`}
                            style={{
                              opacity: inView ? 1 : 0,
                              transitionDelay: `${index * 55}ms`,
                            }}
                          />
                        </span>
                      </button>

                      <span
                        style={{
                          left: `${item.x + item.lx}%`,
                          top: `${((item.y + item.ly - 10) / 30) * 100}%`,
                          opacity: inView ? 1 : 0,
                          transitionDelay: `${index * 55}ms`,
                        }}
                        className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10.5px] transition-all duration-500 sm:text-[11.5px] ${
                          isActive ? "font-medium text-brand" : isHq ? "text-ink" : "text-muted"
                        }`}
                      >
                        {item.city}
                        {isHq ? (
                          <span className="ml-1 font-mono text-[9px] uppercase tracking-[0.12em] text-brand">
                            HQ
                          </span>
                        ) : null}
                        {isSoon ? (
                          <span className="ml-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted/70">
                            Soon
                          </span>
                        ) : null}
                      </span>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line px-5 py-3">
              {legend.map((item) => (
                <span key={item.label} className="flex items-center gap-1.5">
                  <span className={item.dot} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </span>
                </span>
              ))}
            </div>

            <div className="grid gap-px border-t border-line bg-line sm:grid-cols-3">
              {regions.map((region) => {
                const cities = locations.filter((item) => item.region === region);

                return (
                  <div key={region} className="bg-white p-5">
                    <div className="flex items-baseline justify-between">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                        {region}
                      </p>
                      <p className="font-mono text-[12px] tabular-nums text-ink">
                        {String(cities.length).padStart(2, "0")}
                      </p>
                    </div>

                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {cities.map((city) => (
                        <li key={city.city}>
                          <button
                            type="button"
                            onMouseEnter={() => setHovered(city.city)}
                            onMouseLeave={() => setHovered(null)}
                            className={`cursor-pointer rounded-lg border px-2.5 py-1 text-[12px] transition-all duration-300 ${
                              hovered === city.city
                                ? "border-brand/40 bg-brand-soft text-brand-ink"
                                : "border-line bg-white text-ink-soft hover:border-ink/20"
                            }`}
                          >
                            {city.city}
                            {city.status === "HQ" ? (
                              <span className="ml-1.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-brand">
                                HQ
                              </span>
                            ) : null}
                            {city.status === "Coming soon" ? (
                              <span className="ml-1.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-muted">
                                Soon
                              </span>
                            ) : null}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
