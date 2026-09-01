"use client";

import * as React from "react";

import { SectionBackdrop } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useInView } from "@/hooks/use-in-view";

const stages = [
  {
    id: "capital",
    step: "01",
    title: "Capital enters",
    copy: "Investors and syndicate leads commit deal by deal into companies our operators already know from the inside.",
    arc: "M53.554,16.186 A34,34 0 0 1 83.814,46.446",
    dot: { x: 74.04, y: 25.96 },
  },
  {
    id: "programs",
    step: "02",
    title: "Programs set the mandate",
    copy: "Corporates, sovereign funds and science parks define the problem, then we build the cohort around it.",
    arc: "M83.814,53.554 A34,34 0 0 1 53.554,83.814",
    dot: { x: 74.04, y: 74.04 },
  },
  {
    id: "founders",
    step: "03",
    title: "Founders compound",
    copy: "Twelve to sixteen weeks of operating work turns a prototype into a company with pilots and a raise.",
    arc: "M46.446,83.814 A34,34 0 0 1 16.186,53.554",
    dot: { x: 25.96, y: 74.04 },
  },
  {
    id: "network",
    step: "04",
    title: "Network returns it",
    copy: "Every exit, pilot and alumni intro pulls the next round of capital and the next mandate back into the wheel.",
    arc: "M16.186,46.446 A34,34 0 0 1 46.446,16.186",
    dot: { x: 25.96, y: 25.96 },
  },
];

export function Flywheel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  React.useEffect(() => {
    if (paused || !inView) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % stages.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, [paused, inView]);

  return (
    <section className="relative overflow-hidden border-t border-line py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <SectionBackdrop variant="a" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="The model"
          title={
            <>
              A flywheel, not a{" "}
              <span className="font-serif italic text-muted">fund structure</span>
            </>
          }
          copy="Most firms pick one lane. We run all three, so the output of each becomes the input of the next."
        />

        <div
          ref={ref}
          className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16"
          onMouseLeave={() => setPaused(false)}
        >
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-[380px]">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="34"
                  fill="none"
                  stroke="#f0ece4"
                  strokeWidth="0.6"
                  strokeDasharray="1 3"
                />

                {stages.map((stage, index) => (
                  <path
                    key={stage.id}
                    d={stage.arc}
                    fill="none"
                    stroke={index === activeIndex ? "#ff5a1f" : "#e7e3db"}
                    strokeWidth={index === activeIndex ? 3 : 2}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                ))}
              </svg>

              <div className="absolute inset-0">
                {stages.map((stage, index) => (
                  <button
                    key={stage.id}
                    type="button"
                    onMouseEnter={() => {
                      setPaused(true);
                      setActiveIndex(index);
                    }}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    aria-label={stage.title}
                    style={{ left: `${stage.dot.x}%`, top: `${stage.dot.y}%` }}
                    className={`absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border font-mono text-[10.5px] transition-all duration-500 ${
                      index === activeIndex
                        ? "scale-110 border-brand bg-brand text-white shadow-[0_10px_24px_-12px_rgba(255,90,31,0.9)]"
                        : "border-line bg-white text-muted hover:border-ink/25 hover:text-ink"
                    }`}
                  >
                    {stage.step}
                  </button>
                ))}
              </div>

              <div className="pointer-events-none absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Compounding
                </p>
                <p
                  key={stages[activeIndex].id}
                  className="mt-1.5 animate-rise text-[15px] leading-tight tracking-[-0.02em] text-ink"
                >
                  {stages[activeIndex].title}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-1.5">
            {stages.map((stage, index) => (
              <Reveal key={stage.id} delay={index * 90}>
                <button
                  type="button"
                  onMouseEnter={() => {
                    setPaused(true);
                    setActiveIndex(index);
                  }}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full cursor-pointer border p-4 text-left transition-all duration-500 sm:p-5 ${
                    index === activeIndex
                      ? "border-brand/30 bg-brand-soft"
                      : "border-transparent bg-transparent hover:border-line hover:bg-surface"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-mono text-[11px] transition-colors duration-500 ${
                        index === activeIndex ? "text-brand" : "text-muted"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span className="text-[16px] tracking-[-0.02em] text-ink">
                      {stage.title}
                    </span>
                  </div>

                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: index === activeIndex ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-2 text-[13.5px] leading-relaxed text-ink-soft">
                        {stage.copy}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
