import * as React from "react";

import { HeroBackdrop } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  actions?: React.ReactNode;
  meta?: { k: string; v: string }[];
};

export function PageHero({ eyebrow, title, copy, actions, meta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="mask-fade-b absolute inset-0">
          <HeroBackdrop />
        </div>
        <div className="absolute left-1/2 top-[-22rem] h-[34rem] w-[46rem] -translate-x-1/2 bg-brand/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl text-balance text-[2.4rem] leading-[1.02] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.8rem]">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 max-w-xl text-pretty text-[15.5px] leading-relaxed text-muted sm:text-[16.5px]">
            {copy}
          </p>
        </Reveal>

        {actions ? (
          <Reveal delay={220}>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">{actions}</div>
          </Reveal>
        ) : null}

        {meta ? (
          <Reveal delay={280}>
            <dl className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((item) => (
                <div key={item.v} className="bg-white px-5 py-4">
                  <dt className="text-[22px] tracking-[-0.03em] text-ink tabular-nums">{item.k}</dt>
                  <dd className="mt-1 text-[12.5px] text-muted">{item.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
