import type { Metadata } from "next";
import * as React from "react";

import { CtaBand } from "@/components/cta-band";
import { Marquee } from "@/components/marquee";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { companies, sectorOrder } from "@/lib/companies";
import { investorCriteria, journey, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Investors — Brinc",
  description:
    "Co-invest alongside operators who ran the program. Deal-by-deal allocations into pre-seed to Series A companies across 36+ countries.",
};

const sectors = sectorOrder
  .map((sector) => ({
    sector,
    count: companies.filter((company) => company.sector === sector).length,
  }))
  .filter((item) => item.count > 0);

const maxCount = Math.max(...sectors.map((item) => item.count));

export default function InvestorsPage() {
  return (
    <main className="relative">
      <SiteNav />

      <PageHero
        eyebrow="For investors"
        title={
          <>
            Own the future.{" "}
            <span className="font-serif italic text-brand">Before it goes public.</span>
          </>
        }
        copy="Brinc works with accredited investors, operators and partner firms across a global network. Allocations open deal by deal, carrying diligence written by the venture team that ran the company's program."
        actions={
          <>
            <a
              href={site.upround}
              target="_blank"
              rel="noreferrer noopener"
              className="group cursor-pointer bg-ink px-5 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-brand"
            >
              Explore the UpRound community
              <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
            <a
              href="/portfolio"
              className="cursor-pointer border border-line bg-white px-5 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-ink/25"
            >
              See what we have backed
            </a>
          </>
        }
        meta={[
          { k: "395", v: "Investments made" },
          { k: "$1.69B+", v: "Combined market cap" },
          { k: "$2.35M", v: "Average first raise" },
          { k: "Pre-seed → A", v: "Stage focus" },
        ]}
      />

      <section className="border-b border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            index="01"
            eyebrow="What we invest in"
            title={
              <>
                Five filters every deal{" "}
                <span className="font-serif italic text-muted">has to clear</span>
              </>
            }
            copy="The same criteria our program teams apply before a company reaches a cohort. Nothing reaches an allocation without passing all five."
          />

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {investorCriteria.map((item, index) => (
              <div key={item.title} className="group bg-white p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[17px] tracking-[-0.02em] text-ink">{item.title}</h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{item.copy}</p>
              </div>
            ))}

            <div className="flex flex-col justify-center bg-surface p-6">
              <p className="text-[13.5px] leading-relaxed text-ink-soft">
                Meet all five and the allocation is offered before the round is public.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="group mt-4 inline-flex w-fit cursor-pointer items-center gap-2 bg-ink px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-brand"
              >
                Request the deal memo
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            index="02"
            eyebrow="Sector exposure"
            title={
              <>
                Where the {companies.length} companies{" "}
                <span className="font-serif italic text-muted">actually sit</span>
              </>
            }
            copy="Digitalization, decentralization and decarbonization, weighted by how many companies we have actually funded in each."
          />

          <div className="mt-12 border border-line bg-white">
            {sectors.map((item, index) => (
              <Reveal key={item.sector} delay={index * 45}>
                <div className="group flex items-center gap-4 border-b border-line-soft px-5 py-3.5 transition-colors last:border-b-0 hover:bg-surface/60">
                  <span className="w-6 font-mono text-[11px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="w-44 shrink-0 text-[14px] text-ink sm:w-56">{item.sector}</span>

                  <span className="h-2 flex-1 bg-surface-2">
                    <span
                      className="block h-full bg-brand/75 transition-colors duration-300 group-hover:bg-brand"
                      style={{ width: `${(item.count / maxCount) * 100}%` }}
                    />
                  </span>

                  <span className="w-8 text-right font-mono text-[12px] tabular-nums text-ink">
                    {item.count}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            index="03"
            eyebrow="How a deal reaches you"
            title={
              <>
                Diligence written by people who{" "}
                <span className="font-serif italic text-muted">sat in the building</span>
              </>
            }
            copy="Investors see the company from stage two, months before an allocation is offered."
          />

          <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((stage, index) => (
              <li key={stage.step} className="bg-white p-5">
                <span
                  className={`font-mono text-[11px] ${index < 2 ? "text-muted" : "text-brand"}`}
                >
                  {stage.step}
                </span>
                <h3 className="mt-3 text-[15.5px] tracking-[-0.02em] text-ink">{stage.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{stage.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Marquee />
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
