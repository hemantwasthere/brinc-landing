import type { Metadata } from "next";
import * as React from "react";

import { CtaBand } from "@/components/cta-band";
import { Journey } from "@/components/journey";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { offerings, programs, site, testimonials, upcomingPrograms } from "@/lib/data";
import { absolute, breadcrumbSchema, programsSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Founders — Accelerator programs & funding",
  description:
    "Capital, mentorship and market access for founders. Ten live Brinc programs across Hong Kong, the UAE, Saudi Arabia, Bahrain and India, with an average post-program first raise of $2.35M.",
  keywords: [
    "startup accelerator",
    "apply to accelerator",
    "pre-seed funding",
    "founder programs",
    "Web3 accelerator",
    "climate tech accelerator",
    "startup mentorship",
  ],
  alternates: { canonical: "/founders" },
  openGraph: {
    type: "website",
    url: absolute("/founders"),
    title: "Founders — Accelerator programs & funding",
    description:
      "Capital, mentorship and market access for founders. Ten live Brinc programs across Hong Kong, the UAE, Saudi Arabia, Bahrain and India, with an average post-program first raise of $2.35M.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders — Accelerator programs & funding",
    description:
      "Capital, mentorship and market access for founders. Ten live Brinc programs across Hong Kong, the UAE, Saudi Arabia, Bahrain and India, with an average post-program first raise of $2.35M.",
  },
};

export default function FoundersPage() {
  return (
    <main className="relative">
      <JsonLd
        data={[
          webPageSchema({
            path: "/founders",
            name: "Founders — Accelerator programs & funding",
            description:
              "Capital, mentorship and market access for founders. Ten live Brinc programs across Hong Kong, the UAE, Saudi Arabia, Bahrain and India, with an average post-program first raise of $2.35M.",
          }),
          breadcrumbSchema([{ name: "Founders", path: "/founders" }]),
          programsSchema(),
        ]}
      />

      <SiteNav />

      <PageHero
        eyebrow="For founders"
        title={
          <>
            Empowering founders to{" "}
            <span className="font-serif italic text-brand">build what&rsquo;s next</span>
          </>
        }
        copy="Brinc connects entrepreneurs with expertise and global opportunities, helping founders launch, scale and thrive in the world's most dynamic ecosystems."
        actions={
          <>
            <a
              href={site.apply}
              target="_blank"
              rel="noreferrer noopener"
              className="group cursor-pointer bg-ink px-5 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-brand"
            >
              Apply to a program
              <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
            <a
              href={site.community}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer border border-line bg-white px-5 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-ink/25"
            >
              Join the founder community
            </a>
          </>
        }
        meta={[
          { k: "260", v: "Companies backed" },
          { k: "$2.35M", v: "Average first raise" },
          { k: "10", v: "Live programs" },
          { k: "12", v: "Markets to land in" },
        ]}
      />

      <section className="border-b border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            index="01"
            eyebrow="VentureVerse"
            title={
              <>
                One founder platform,{" "}
                <span className="font-serif italic text-muted">three ways in</span>
              </>
            }
            copy="VentureVerse is Brinc's all-in-one founder platform: master the basics, connect with mentors, access AI-powered growth tools, and expand globally."
          />

          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-3">
            {offerings.map((item, index) => (
              <Reveal key={item.name} delay={index * 100} className="h-full">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex h-full cursor-pointer flex-col bg-white p-6 transition-colors hover:bg-surface/60"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-[19px] leading-snug tracking-[-0.02em] text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-brand-ink">{item.tag}</p>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-muted">{item.copy}</p>

                  <span className="mt-auto flex items-center gap-1.5 pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-brand">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            index="02"
            eyebrow="Ongoing programs"
            title={
              <>
                Ten programs open{" "}
                <span className="font-serif italic text-muted">right now</span>
              </>
            }
            copy="Each one is run with the corporate, government or protocol partner whose problem it exists to solve."
          />

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
            {programs.map((program, index) => (
              <Reveal key={program.name} delay={Math.min(index, 6) * 70} className="h-full">
                <a
                  href={program.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex h-full cursor-pointer flex-col bg-white p-5 transition-colors hover:bg-surface/70"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[17px] leading-snug tracking-[-0.02em] text-ink">
                      {program.name}
                    </h3>
                    <span className="mt-1 shrink-0 font-mono text-[11px] text-muted transition-colors group-hover:text-brand">
                      &rarr;
                    </span>
                  </div>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {program.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-[13.5px] leading-relaxed text-muted">{program.copy}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-3 flex flex-col gap-4 border border-line bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  Upcoming
                </span>
                {upcomingPrograms.map((item) => (
                  <span
                    key={item}
                    className="border border-dashed border-brand/40 bg-brand-soft px-2.5 py-1 text-[12.5px] text-brand-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={site.apply}
                target="_blank"
                rel="noreferrer noopener"
                className="group shrink-0 cursor-pointer bg-ink px-4 py-2.5 text-center text-[13px] font-medium text-white transition-colors hover:bg-brand"
              >
                Join the waitlist
                <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Journey index="03" />

      <section className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            index="04"
            eyebrow="Founders we have supported"
            title={
              <>
                What it looked like{" "}
                <span className="font-serif italic text-muted">from their side</span>
              </>
            }
          />

          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 100} className="h-full">
                <figure className="flex h-full flex-col bg-white p-6">
                  <span className="font-serif text-4xl leading-none text-brand">&ldquo;</span>

                  <blockquote className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                    {item.quote}
                  </blockquote>

                  <figcaption className="mt-auto border-t border-line-soft pt-4">
                    <p className="text-[14px] text-ink">{item.name}</p>
                    <p className="mt-0.5 text-[12.5px] text-muted">{item.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </main>
  );
}
