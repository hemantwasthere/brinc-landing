"use client";

import * as React from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { markets, worldBorders, worldHeight, worldLand, worldWidth } from "@/lib/world-map";
import { useInView } from "@/hooks/use-in-view";

const hq = markets.find((item) => item.status === "HQ") ?? markets[0];
const regions = ["APAC", "MENA", "Americas"] as const;

const legend = [
  { label: "Headquarters", dot: "h-2 w-2 rounded-full bg-brand ring-4 ring-brand/15" },
  { label: "Live market", dot: "h-2 w-2 rounded-full bg-ink" },
  { label: "Coming soon", dot: "h-2 w-2 rounded-full border border-dashed border-brand bg-white" },
];

const labelLayout: Record<string, { x: number; y: number; anchor: "start" | "middle" | "end" }> = {
  Canada: { x: 279.4, y: 108, anchor: "middle" },
  India: { x: 715.6, y: 192, anchor: "middle" },
  Korea: { x: 852.8, y: 90, anchor: "middle" },
  Japan: { x: 899, y: 113, anchor: "start" },
  "Hong Kong": { x: 830, y: 150, anchor: "start" },
  Vietnam: { x: 784, y: 182, anchor: "end" },
  Philippines: { x: 836.1, y: 189, anchor: "middle" },
};

const gulf = markets.filter((item) => item.region === "MENA");

const anchorTransform = {
  start: "translate(0, -50%)",
  middle: "translate(-50%, -50%)",
  end: "translate(-100%, -50%)",
};

function arcPath(x: number, y: number) {
  const dx = x - hq.x;
  const dy = y - hq.y;
  const span = Math.hypot(dx, dy);

  return `M${hq.x},${hq.y} Q${(hq.x + x) / 2},${(hq.y + y) / 2 - span * 0.2} ${x},${y}`;
}

export function Footprint({ index = "04" }: { index?: string }) {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="markets" className="scroll-mt-24 border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index={index}
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
          <div ref={ref} className="mt-12 overflow-hidden border border-line bg-white">
            <div className="relative bg-surface/60">
              <svg
                viewBox={`0 0 ${worldWidth} ${worldHeight}`}
                className="block w-full"
                role="img"
                aria-label="Map of the markets Brinc operates in"
              >
                <path d={worldLand} fill="#eee9df" />
                <path
                  d={worldBorders}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />

                {markets
                  .filter((item) => item.status !== "HQ")
                  .map((item) => {
                    const isHovered = hovered === item.city;
                    const dimmed = hovered !== null && !isHovered;

                    return (
                      <path
                        key={item.city}
                        d={arcPath(item.x, item.y)}
                        fill="none"
                        stroke={isHovered ? "#ff5a1f" : "#a89f8d"}
                        strokeWidth={isHovered ? 1.8 : 1}
                        strokeLinecap="round"
                        strokeDasharray="5 7"
                        className="animate-dash transition-all duration-500"
                        style={{
                          opacity: inView ? (dimmed ? 0.28 : 0.85) : 0,
                          animationDuration: isHovered ? "4s" : "14s",
                        }}
                      />
                    );
                  })}

                <polyline
                  points="612,198 630,172 641,151"
                  fill="none"
                  stroke="#b8ae9b"
                  strokeWidth="0.9"
                  className="hidden lg:block"
                  style={{ opacity: inView ? 1 : 0 }}
                />
              </svg>

              <div className="absolute inset-0">
                {markets.map((item, index) => {
                  const isHq = item.status === "HQ";
                  const isSoon = item.status === "Coming soon";
                  const isActive = hovered === item.city;
                  const layout = labelLayout[item.city];

                  return (
                    <React.Fragment key={item.city}>
                      <button
                        type="button"
                        onMouseEnter={() => setHovered(item.city)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(item.city)}
                        onBlur={() => setHovered(null)}
                        aria-label={item.city}
                        style={{
                          left: `${(item.x / worldWidth) * 100}%`,
                          top: `${(item.y / worldHeight) * 100}%`,
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer p-2"
                      >
                        <span className="relative flex items-center justify-center">
                          {isHq ? (
                            <span className="absolute h-5 w-5 animate-pulse-ring rounded-full bg-brand/35" />
                          ) : null}

                          <span
                            className={`block rounded-full transition-all duration-500 ${
                              isHq
                                ? "h-2.5 w-2.5 bg-brand ring-4 ring-brand/25"
                                : isSoon
                                  ? "h-2 w-2 border border-dashed border-brand bg-white"
                                  : "h-2 w-2 bg-ink ring-2 ring-white"
                            } ${isActive ? "scale-150" : ""}`}
                            style={{
                              opacity: inView ? 1 : 0,
                              transitionDelay: `${index * 55}ms`,
                            }}
                          />
                        </span>
                      </button>

                      {layout ? (
                        <span
                          style={{
                            left: `${(layout.x / worldWidth) * 100}%`,
                            top: `${(layout.y / worldHeight) * 100}%`,
                            transform: anchorTransform[layout.anchor],
                            opacity: inView ? 1 : 0,
                            transitionDelay: `${index * 55}ms`,
                          }}
                          className={`pointer-events-none absolute hidden whitespace-nowrap text-[11.5px] transition-all duration-500 lg:block ${
                            isActive ? "font-medium text-brand" : isHq ? "text-ink" : "text-ink-soft"
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
                      ) : null}

                      <span
                        style={{
                          left: `${(item.x / worldWidth) * 100}%`,
                          top: `${(item.y / worldHeight) * 100}%`,
                        }}
                        className={`pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+10px)] whitespace-nowrap border border-line bg-white px-2 py-1 text-[11px] text-ink shadow-[0_8px_20px_-14px_rgba(20,19,16,0.8)] transition-opacity duration-300 lg:hidden ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {item.city}
                      </span>
                    </React.Fragment>
                  );
                })}

                <div
                  style={{ right: "39%", top: "52%" }}
                  className="absolute hidden border border-line bg-white/95 px-2.5 py-2 shadow-[0_10px_30px_-22px_rgba(20,19,16,0.9)] lg:block"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                    Gulf cluster · 05
                  </p>

                  <ul className="mt-1.5 grid grid-cols-2 gap-x-3 gap-y-0.5">
                    {gulf.map((item) => (
                      <li key={item.city}>
                        <button
                          type="button"
                          onMouseEnter={() => setHovered(item.city)}
                          onMouseLeave={() => setHovered(null)}
                          className={`cursor-pointer whitespace-nowrap text-[10.5px] transition-colors duration-300 ${
                            hovered === item.city ? "font-medium text-brand" : "text-ink-soft"
                          }`}
                        >
                          {item.city}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
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
                const cities = markets.filter((item) => item.region === region);

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
                            className={`cursor-pointer border px-2.5 py-1 text-[12px] transition-all duration-300 ${
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
