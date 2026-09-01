"use client";

import * as React from "react";

import { Reveal } from "@/components/reveal";
import { personas, site, type Persona } from "@/lib/data";

export function CtaBand() {
  const [selected, setSelected] = React.useState<Persona>("investor");

  const active = personas.find((item) => item.id === selected) ?? personas[0];

  return (
    <section id="start" className="scroll-mt-24 px-5 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden bg-ink px-6 py-14 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-[90px]" />
            <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-brand/15 blur-[110px]" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
              Are you a
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {personas.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(item.id)}
                  className={`cursor-pointer border px-4 py-2 text-[14px] transition-all duration-300 ${
                    selected === item.id
                      ? "border-brand bg-brand text-white"
                      : "border-white/15 bg-white/5 text-white/65 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <h2 className="mt-8 text-balance text-3xl leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
              Let&rsquo;s build{" "}
              <span key={active.id} className="inline-block animate-rise font-serif italic text-brand">
                {active.headline}
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">
              Tell us which side of the network you sit on and we will route you to the team
              that runs it.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <a
                href={active.href}
                className="group w-full cursor-pointer bg-white px-5 py-3 text-sm font-medium text-ink transition-all duration-300 hover:bg-brand hover:text-white sm:w-auto"
              >
                {active.cta}
                <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="w-full cursor-pointer border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/35 hover:text-white sm:w-auto"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
