import * as React from "react";

import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
        >
          <span className="font-mono text-xs tracking-[0.2em] text-brand">{index}</span>
          <span className="h-px w-8 bg-line" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </span>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-5 text-balance text-3xl leading-[1.08] tracking-[-0.02em] text-ink sm:text-4xl md:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>

      {copy ? (
        <Reveal delay={140}>
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted sm:text-base">
            {copy}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
