"use client";

import * as React from "react";

import { metrics } from "@/lib/data";
import { useCountUp } from "@/hooks/use-count-up";
import { useInView } from "@/hooks/use-in-view";

type Metric = (typeof metrics)[number];

function MetricItem({ metric, active, index }: { metric: Metric; active: boolean; index: number }) {
  const value = useCountUp(metric.value, active, 1400 + index * 160);
  const decimals = "decimals" in metric && metric.decimals ? metric.decimals : 0;

  return (
    <div className="group relative bg-white px-6 py-8 sm:px-8">
      <span className="absolute inset-y-6 left-0 w-px scale-y-0 bg-brand transition-transform duration-500 group-hover:scale-y-100" />

      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
        {String(index + 1).padStart(2, "0")}
      </p>

      <p className="mt-4 text-4xl tracking-[-0.04em] text-ink tabular-nums sm:text-[2.9rem]">
        {"prefix" in metric && metric.prefix ? metric.prefix : ""}
        {value.toFixed(decimals)}
        <span className="text-brand">{metric.suffix}</span>
      </p>

      <p className="mt-2 text-[14px] font-medium text-ink">{metric.label}</p>
      <p className="mt-1 text-[12.5px] text-muted">{metric.note}</p>
    </div>
  );
}

export function Metrics() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
      <div
        ref={ref}
        className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map((metric, index) => (
          <MetricItem key={metric.label} metric={metric} active={inView} index={index} />
        ))}
      </div>
    </section>
  );
}
