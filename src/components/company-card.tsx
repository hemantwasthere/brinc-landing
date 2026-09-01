import * as React from "react";

import type { Company } from "@/lib/companies";

const stageTone: Record<string, string> = {
  Acquired: "bg-ink text-white",
  Growth: "bg-brand-soft text-brand-ink",
};

function SocialLink({ href, label, path }: { href: string; label: string; path: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="relative z-10 cursor-pointer text-muted transition-colors hover:text-ink"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}

const linkedInPath =
  "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.02-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z";
const xPath =
  "M17.53 3h3.06l-6.69 7.64L21.75 21h-6.02l-4.7-6.15L5.6 21H2.53l7.15-8.17L2.25 3h6.17l4.25 5.62L17.53 3Zm-1.07 16.13h1.7L7.63 4.78H5.8l10.66 14.35Z";

export function CompanyCard({ company }: { company: Company }) {
  return (
    <article className="group relative flex h-full flex-col border border-line bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_28px_55px_-45px_rgba(20,19,16,0.75)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[16.5px] tracking-[-0.02em] text-ink">
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

      <p className="mb-5 mt-3 line-clamp-3 text-[13px] leading-relaxed text-muted">{company.blurb}</p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line-soft pt-3.5">
        <span className="text-[12.5px] text-ink-soft">{company.sector}</span>

        <span className="flex items-center gap-2.5">
          {company.linkedin ? (
            <SocialLink
              href={company.linkedin}
              label={`${company.name} on LinkedIn`}
              path={linkedInPath}
            />
          ) : null}
          {company.x ? (
            <SocialLink href={company.x} label={`${company.name} on X`} path={xPath} />
          ) : null}
          <span className="font-mono text-[11px] text-muted transition-colors duration-300 group-hover:text-brand">
            Visit &rarr;
          </span>
        </span>
      </div>
    </article>
  );
}
