"use client";

import * as React from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { journey } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";

export function Journey() {
  const [active, setActive] = React.useState(0);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  React.useEffect(() => {
    if (!inView) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % journey.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [inView]);

  return (
    <section className="border-t border-line bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="The path"
          title={
            <>
              From first call to{" "}
              <span className="font-serif italic text-muted">follow-on round</span>
            </>
          }
          copy="Five stages every company runs through. Investors see the diligence from stage two, partners see the pipeline from stage one."
        />

        <div ref={ref} className="mt-12">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-line lg:block" />
            <div
              className="absolute left-0 top-[26px] hidden h-px bg-brand transition-[width] duration-700 ease-out lg:block"
              style={{ width: `${((active + 1) / journey.length) * 100}%` }}
            />

            <ol className="grid gap-4 lg:grid-cols-5 lg:gap-5">
              {journey.map((stage, index) => (
                <Reveal as="li" key={stage.step} delay={index * 90} className="h-full">
                  <div
                    onMouseEnter={() => setActive(index)}
                    className="flex h-full flex-col"
                  >
                    <div className="flex items-center gap-3 lg:block">
                      <span
                        className={`relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border bg-white font-mono text-[12px] transition-all duration-500 ${
                          index <= active
                            ? "border-brand text-brand"
                            : "border-line text-muted"
                        }`}
                      >
                        {index === active ? (
                          <span className="absolute inset-0 animate-pulse-ring rounded-full border border-brand/50" />
                        ) : null}
                        {stage.step}
                      </span>

                      <h3 className="text-[16px] tracking-[-0.02em] text-ink lg:mt-5">
                        {stage.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted lg:pr-3">
                      {stage.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
