import * as React from "react";

import { coInvestors, partners } from "@/lib/data";

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <div
        className="flex shrink-0 animate-marquee items-center gap-3 pr-3"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {items.map((item) => (
          <span
            key={item}
            className="whitespace-nowrap border border-line bg-white px-4 py-2 text-[13px] text-ink-soft transition-colors hover:border-brand/40 hover:text-ink"
          >
            {item}
          </span>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="flex shrink-0 animate-marquee items-center gap-3 pr-3"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {items.map((item) => (
          <span
            key={item}
            className="whitespace-nowrap border border-line bg-white px-4 py-2 text-[13px] text-ink-soft transition-colors hover:border-brand/40 hover:text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section className="border-y border-line bg-surface/50 py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Co-investing and building programs alongside
        </p>

        <div className="mt-6 space-y-3">
          <Row items={coInvestors} />
          <Row items={partners} reverse />
        </div>
      </div>
    </section>
  );
}
