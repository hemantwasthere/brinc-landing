"use client";

import * as React from "react";

import { useInView } from "@/hooks/use-in-view";

const deals = [
  { name: "Zeta Surgical", sector: "Healthcare", fill: 78, round: "Series A" },
  { name: "Verdant Yield", sector: "Agrifood", fill: 54, round: "Seed" },
  { name: "Mori Labs", sector: "AI / ML", fill: 92, round: "Pre-A" },
];

export function InvestorArt() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div ref={ref} className="space-y-2">
      {deals.map((deal, index) => (
        <div
          key={deal.name}
          className="rounded-xl border border-line bg-white px-3 py-2.5 transition-colors duration-300 hover:border-brand/40"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-[12.5px] font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {deal.name}
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
              {deal.round}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-brand transition-[width] duration-1000 ease-out"
                style={{
                  width: inView ? `${deal.fill}%` : "0%",
                  transitionDelay: `${index * 140}ms`,
                }}
              />
            </div>
            <span className="w-9 text-right font-mono text-[10.5px] tabular-nums text-muted">
              {deal.fill}%
            </span>
          </div>

          <p className="mt-1.5 text-[11px] text-muted">{deal.sector} · allocation filled</p>
        </div>
      ))}
    </div>
  );
}

const funnel = [
  { label: "Applications", value: "1,240", width: 100 },
  { label: "Shortlist", value: "68", width: 62 },
  { label: "Cohort", value: "12", width: 34 },
  { label: "Pilots signed", value: "5", width: 18 },
];

export function PartnerArt() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div ref={ref} className="rounded-xl border border-line bg-white p-3.5">
      <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
        One program cycle
      </p>

      <div className="mt-3 space-y-2.5">
        {funnel.map((stage, index) => (
          <div key={stage.label} className="group">
            <div className="flex items-baseline justify-between">
              <span className="text-[12px] text-ink-soft">{stage.label}</span>
              <span className="font-mono text-[12px] tabular-nums text-ink">{stage.value}</span>
            </div>

            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-surface-2">
              <div
                className={`h-full rounded-full transition-[width] duration-[900ms] ease-out ${
                  index === funnel.length - 1 ? "bg-ink" : "bg-brand/70"
                }`}
                style={{
                  width: inView ? `${stage.width}%` : "0%",
                  transitionDelay: `${index * 130}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const milestones = [
  { label: "Pre-seed", x: 6, y: 74 },
  { label: "Program", x: 34, y: 56 },
  { label: "$2.35M", x: 64, y: 32 },
  { label: "Series A", x: 94, y: 12 },
];

export function FounderArt() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div ref={ref} className="rounded-xl border border-line bg-white p-3.5">
      <div className="flex items-baseline justify-between">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
          Typical trajectory
        </p>
        <p className="font-mono text-[10.5px] text-brand">18 months</p>
      </div>

      <div className="relative mt-3 h-28">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
          {[25, 50, 75].map((line) => (
            <line
              key={line}
              x1="0"
              x2="100"
              y1={line}
              y2={line}
              stroke="#f0ece4"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          <path
            d="M6,74 C20,74 22,58 34,56 C48,53 52,38 64,32 C78,25 82,16 94,12"
            fill="none"
            stroke="#ff5a1f"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{
              strokeDasharray: 220,
              strokeDashoffset: inView ? 0 : 220,
              transition: "stroke-dashoffset 1.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </svg>

        {milestones.map((point, index) => (
          <span
            key={point.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          >
            <span
              className="block h-2 w-2 rounded-full border-2 border-brand bg-white transition-transform duration-500"
              style={{
                transform: inView ? "scale(1)" : "scale(0)",
                transitionDelay: `${400 + index * 220}ms`,
              }}
            />
          </span>
        ))}
      </div>

      <div className="mt-1 flex justify-between">
        {milestones.map((point) => (
          <span key={point.label} className="text-[10.5px] text-muted">
            {point.label}
          </span>
        ))}
      </div>
    </div>
  );
}
