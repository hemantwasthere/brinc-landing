"use client";

import * as React from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/data";

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <SectionHeading
            index="06"
            eyebrow="Questions"
            title={
              <>
                The things people ask{" "}
                <span className="font-serif italic text-muted">before the first call</span>
              </>
            }
          />

          <Reveal delay={160}>
            <div className="mt-8 border border-line bg-surface/60 p-5">
              <p className="text-[14.5px] text-ink">Still deciding which door to use?</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                Send one line about what you are building or backing. We will point you at the
                right team within a day.
              </p>

              <a
                href="mailto:marketing@brinc.io"
                className="group mt-4 inline-flex cursor-pointer items-center gap-2 bg-ink px-4 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-brand"
              >
                marketing@brinc.io
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <Reveal key={item.q} delay={index * 70}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer items-start gap-4 py-5 text-left"
                >
                  <span className="mt-1 font-mono text-[11px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1">
                    <span
                      className={`block text-[15.5px] tracking-[-0.01em] transition-colors duration-300 ${
                        isOpen ? "text-brand" : "text-ink group-hover:text-brand-ink"
                      }`}
                    >
                      {item.q}
                    </span>

                    <span
                      className="grid transition-all duration-500 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-2.5 text-[14px] leading-relaxed text-muted">
                          {item.a}
                        </span>
                      </span>
                    </span>
                  </span>

                  <span
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-brand bg-brand text-white"
                        : "border-line text-muted group-hover:border-ink/30"
                    }`}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path
                        d="M5 1v8M1 5h8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
