"use client";

import * as React from "react";

import { CapitalFlow } from "@/components/capital-flow";
import { Reveal } from "@/components/reveal";
import { personas, type Persona } from "@/lib/data";

export function Hero() {
  const [persona, setPersona] = React.useState<Persona>("investor");
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setPersona((current) => {
        const index = personas.findIndex((item) => item.id === current);
        return personas[(index + 1) % personas.length].id;
      });
    }, 5600);

    return () => window.clearInterval(timer);
  }, [paused]);

  const active = personas.find((item) => item.id === persona) ?? personas[0];

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-paper mask-fade-b absolute inset-0" />
        <div className="absolute left-1/2 top-[-20rem] h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <a
              href="#portfolio"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-white/70 py-1 pl-1 pr-3 text-[12.5px] text-ink-soft backdrop-blur transition-colors hover:border-brand/40 hover:bg-brand-soft"
            >
              <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-medium text-white">
                Since 2014
              </span>
              259 companies backed across 36+ countries
              <span className="text-muted transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 text-balance text-[2.6rem] leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.6rem]">
              Shaping the future of{" "}
              <span className="font-serif italic text-brand">private markets</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-[15.5px] leading-relaxed text-muted sm:text-[17px]">
              We give investors access to private opportunities, help corporates and
              governments innovate with accelerator programs, and support founders to build
              lasting businesses.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-8 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <a
                href="#start"
                className="group w-full cursor-pointer rounded-xl bg-ink px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-brand hover:shadow-[0_16px_40px_-18px_rgba(255,90,31,0.85)] sm:w-auto"
              >
                <span key={active.id} className="inline-block animate-rise">
                  {active.cta}
                </span>
                <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
              <a
                href="#portfolio"
                className="w-full cursor-pointer rounded-xl border border-line bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/25 hover:bg-surface sm:w-auto"
              >
                View the portfolio
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={340}>
          <div
            className="mt-14 sm:mt-16"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="overflow-hidden rounded-3xl border border-line bg-white/70 p-2 shadow-[0_1px_2px_rgba(20,19,16,0.04),0_40px_90px_-60px_rgba(20,19,16,0.55)] backdrop-blur-xl">
              <div className="rounded-[1.15rem] border border-line-soft bg-surface/60 px-4 pb-5 pt-4 sm:px-6 sm:pb-7 sm:pt-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    How the network works
                  </p>

                  <div
                    role="tablist"
                    aria-label="Select audience"
                    className="flex rounded-xl border border-line bg-white p-1"
                  >
                    {personas.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={persona === item.id}
                        onClick={() => setPersona(item.id)}
                        className={`flex-1 cursor-pointer rounded-lg px-3.5 py-1.5 text-[13px] font-medium transition-all duration-300 sm:flex-none ${
                          persona === item.id
                            ? "bg-ink text-white shadow-[0_6px_16px_-10px_rgba(20,19,16,0.9)]"
                            : "text-muted hover:text-ink"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <CapitalFlow persona={persona} />
                </div>

                <div className="mt-5 grid gap-5 border-t border-line-soft pt-5 md:grid-cols-[1.15fr_1fr] md:gap-10">
                  <p key={active.id} className="animate-rise text-[14px] leading-relaxed text-ink-soft">
                    {active.copy}
                  </p>

                  <ul className="grid gap-2 sm:grid-cols-3 md:grid-cols-1">
                    {active.points.map((point, index) => (
                      <li
                        key={`${active.id}-${point}`}
                        className="flex animate-rise items-start gap-2 text-[13px] text-muted"
                        style={{ animationDelay: `${index * 90}ms` }}
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
