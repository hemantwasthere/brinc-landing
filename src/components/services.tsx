import * as React from "react";

import { FounderArt, InvestorArt, PartnerArt } from "@/components/service-art";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

const art: Record<string, React.ReactNode> = {
  investors: <InvestorArt />,
  partners: <PartnerArt />,
  founders: <FounderArt />,
};

export function Services() {
  return (
    <section className="border-t border-line bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="What we do"
          title={
            <>
              Three sides of one network,{" "}
              <span className="font-serif italic text-muted">compounding</span>
            </>
          }
          copy="Capital, mandates and founders move through the same engine. What each side puts in becomes the advantage the other two get out."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 110} className="h-full">
              <article
                id={service.id}
                className="group flex h-full scroll-mt-28 flex-col border border-line bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_30px_60px_-45px_rgba(20,19,16,0.7)] sm:p-6"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {service.eyebrow}
                  </p>
                </div>

                <h3 className="mt-4 text-pretty text-[19px] leading-snug tracking-[-0.02em] text-ink">
                  {service.title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-muted">{service.copy}</p>

                <div className="mt-6 mb-auto">{art[service.id]}</div>

                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-line-soft pt-4">
                  {service.stats.map((stat) => (
                    <div key={stat.v}>
                      <p className="text-[17px] tracking-[-0.02em] text-ink">{stat.k}</p>
                      <p className="mt-0.5 text-[11.5px] text-muted">{stat.v}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={service.href}
                  className="mt-5 flex cursor-pointer items-center justify-between border border-line px-3.5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-ink/25 hover:bg-surface"
                >
                  {service.linkLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
