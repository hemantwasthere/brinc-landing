import type { Metadata } from "next";
import * as React from "react";

import { CtaBand } from "@/components/cta-band";
import { Footprint } from "@/components/footprint";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { caseStudies, partnerPillars, site } from "@/lib/data";
import { absolute, breadcrumbSchema, servicesSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Partners — Corporate & government innovation",
  description:
    "Brinc designs and delivers innovation programs for corporates, governments and institutions. Scouting, accelerators and POC execution run with NEOM, PepsiCo, Misk, MBRIF and HKSTP.",
  keywords: [
    "corporate innovation programs",
    "government accelerator",
    "open innovation",
    "startup scouting",
    "proof of concept pilots",
    "sovereign innovation",
    "Brinc partners",
  ],
  alternates: { canonical: "/partners" },
  openGraph: {
    type: "website",
    url: absolute("/partners"),
    title: "Partners — Corporate & government innovation",
    description:
      "Brinc designs and delivers innovation programs for corporates, governments and institutions. Scouting, accelerators and POC execution run with NEOM, PepsiCo, Misk, MBRIF and HKSTP.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners — Corporate & government innovation",
    description:
      "Brinc designs and delivers innovation programs for corporates, governments and institutions. Scouting, accelerators and POC execution run with NEOM, PepsiCo, Misk, MBRIF and HKSTP.",
  },
};

export default function PartnersPage() {
  return (
    <main className="relative">
      <JsonLd
        data={[
          webPageSchema({
            path: "/partners",
            name: "Partners — Corporate & government innovation",
            description:
              "Brinc designs and delivers innovation programs for corporates, governments and institutions. Scouting, accelerators and POC execution run with NEOM, PepsiCo, Misk, MBRIF and HKSTP.",
          }),
          breadcrumbSchema([{ name: "Partners", path: "/partners" }]),
          servicesSchema(),
        ]}
      />

      <SiteNav />

      <PageHero
        eyebrow="For corporates & governments"
        title={
          <>
            Where corporates and governments{" "}
            <span className="font-serif italic text-brand">meet innovation</span>
          </>
        }
        copy="We help corporates, governments and institutions identify the right opportunities, engage with global innovators, and scale solutions that deliver measurable impact."
        actions={
          <>
            <a
              href={`mailto:${site.email}`}
              className="group cursor-pointer bg-ink px-5 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-brand"
            >
              Schedule a discovery call
              <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
            <a
              href="#work"
              className="cursor-pointer border border-line bg-white px-5 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-ink/25"
            >
              See the track record
            </a>
          </>
        }
        meta={[
          { k: "260", v: "Portfolio companies" },
          { k: "$1.69B+", v: "Combined market cap" },
          { k: "$300M+", v: "Capital deployed" },
          { k: "75", v: "Programs run" },
        ]}
      />

      <section className="border-b border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            index="01"
            eyebrow="How we work with partners"
            title={
              <>
                Identify, engage, scale —{" "}
                <span className="font-serif italic text-muted">or all three</span>
              </>
            }
            copy="Whether you are exploring opportunities, testing solutions or scaling impact, we plug in at the stage you are actually at."
          />

          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-3">
            {partnerPillars.map((pillar, index) => (
              <Reveal key={pillar.step} delay={index * 100} className="h-full">
                <article className="flex h-full flex-col bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center border border-brand/40 bg-brand-soft font-mono text-[11px] text-brand">
                      {pillar.step}
                    </span>
                    <h3 className="text-[19px] tracking-[-0.02em] text-ink">{pillar.title}</h3>
                  </div>

                  <p className="mt-4 text-[13px] uppercase tracking-[0.08em] text-brand-ink">
                    {pillar.subtitle}
                  </p>

                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{pillar.copy}</p>

                  <ul className="mt-auto grid gap-2 pt-6">
                    {pillar.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 border-t border-line-soft pt-2 text-[13px] text-ink-soft"
                      >
                        <span className="h-1 w-1 shrink-0 bg-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-3 flex flex-col gap-4 border border-line bg-ink p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Brinc Lab
                </p>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-white/80">
                  We help organizations identify where AI creates real value, build the
                  infrastructure to deploy it, and put it into production securely and at scale.
                </p>
              </div>

              <a
                href={`mailto:${site.email}`}
                className="group shrink-0 cursor-pointer bg-white px-5 py-3 text-center text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-white"
              >
                Explore Brinc Lab
                <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 border-b border-line bg-surface/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            index="02"
            eyebrow="Track record"
            title={
              <>
                Programs we have already{" "}
                <span className="font-serif italic text-muted">run end to end</span>
              </>
            }
            copy="Every mandate below was scoped, sourced and delivered by the Brinc team, with the numbers the partner walked away with."
          />

          <div className="mt-12 space-y-10">
            {caseStudies.map((group) => (
              <div key={group.group}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {group.group}
                </p>

                <div className="mt-4 grid gap-px border border-line bg-line lg:grid-cols-3">
                  {group.items.map((item, index) => (
                    <Reveal key={item.name} delay={index * 90} className="h-full">
                      <article className="flex h-full flex-col bg-white p-5">
                        <h3 className="text-[17px] tracking-[-0.02em] text-ink">{item.name}</h3>
                        <p className="mt-1 text-[12.5px] text-muted">{item.kind}</p>

                        <dl className="mt-5 grid grid-cols-2 gap-px bg-line">
                          {item.stats.map((stat) => (
                            <div key={stat.v} className="bg-white py-3">
                              <dt className="text-[19px] tracking-[-0.03em] text-ink tabular-nums">
                                {stat.k}
                              </dt>
                              <dd className="mt-0.5 text-[11.5px] text-muted">{stat.v}</dd>
                            </div>
                          ))}
                        </dl>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footprint index="03" />
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
