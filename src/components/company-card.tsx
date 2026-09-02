import * as React from "react";

import { GlobeIcon, LinkedInIcon, XIcon } from "@/components/icons";
import type { Company } from "@/lib/companies";

const stageTone: Record<string, string> = {
  Acquired: "bg-ink text-white",
  Growth: "bg-brand-soft text-brand-ink",
};

function Mark({ company }: { company: Company }) {
  if (company.logo) {
    return (
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        width={36}
        height={36}
        loading="lazy"
        decoding="async"
        className="h-9 w-9 shrink-0 border border-line bg-white object-contain p-1"
      />
    );
  }

  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-surface-2 font-mono text-[13px] uppercase text-ink-soft">
      {company.name.slice(0, 1)}
    </span>
  );
}

export function CompanyCard({ company }: { company: Company }) {
  return (
    <article className="group relative flex h-full flex-col border border-line bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_28px_55px_-45px_rgba(20,19,16,0.75)]">
      <div className="flex items-start gap-3">
        <Mark company={company} />

        <h3 className="flex-1 pt-1 text-[16.5px] leading-tight tracking-[-0.02em] text-ink">
          <a
            href={company.url}
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer after:absolute after:inset-0 after:content-['']"
          >
            {company.name}
          </a>
        </h3>

        <span
          className={`shrink-0 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] ${
            stageTone[company.stage] ?? "bg-surface-2 text-ink-soft"
          }`}
        >
          {company.stage}
        </span>
      </div>

      <p className="mb-5 mt-4 line-clamp-3 text-[13px] leading-relaxed text-muted">
        {company.blurb}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line-soft pt-3.5">
        <span className="text-[12.5px] text-ink-soft">{company.sector}</span>

        <span className="flex items-center gap-2.5">
          {company.linkedin ? (
            <a
              href={company.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${company.name} on LinkedIn`}
              className="relative z-10 cursor-pointer text-muted transition-colors hover:text-ink"
            >
              <LinkedInIcon size={13} />
            </a>
          ) : null}

          {company.x ? (
            <a
              href={company.x}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${company.name} on X`}
              className="relative z-10 cursor-pointer text-muted transition-colors hover:text-ink"
            >
              <XIcon size={12} />
            </a>
          ) : null}

          <span className="flex items-center gap-1.5 text-muted transition-colors duration-300 group-hover:text-brand">
            <GlobeIcon size={12} />
            <span className="font-mono text-[11px]">Visit</span>
          </span>
        </span>
      </div>
    </article>
  );
}
