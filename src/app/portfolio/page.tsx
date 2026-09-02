import type { Metadata } from "next";
import * as React from "react";

import { CompanyExplorer } from "@/components/company-explorer";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { companies } from "@/lib/companies";
import { absolute, breadcrumbSchema, portfolioSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portfolio — 94 companies we have backed",
  description:
    "Browse every company Brinc has backed across agrifood, Web3, climate tech, healthcare, AI, smart cities and gaming. Search and filter by sector and stage, with a link to each team.",
  keywords: [
    "Brinc portfolio",
    "portfolio companies",
    "agrifood startups",
    "climate tech startups",
    "Web3 startups",
    "healthcare startups",
    "accelerator portfolio",
  ],
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    url: absolute("/portfolio"),
    title: "Portfolio — 94 companies we have backed",
    description:
      "Browse every company Brinc has backed across agrifood, Web3, climate tech, healthcare, AI, smart cities and gaming. Search and filter by sector and stage, with a link to each team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — 94 companies we have backed",
    description:
      "Browse every company Brinc has backed across agrifood, Web3, climate tech, healthcare, AI, smart cities and gaming. Search and filter by sector and stage, with a link to each team.",
  },
};

const growth = companies.filter((company) => company.stage === "Growth").length;
const sectors = new Set(companies.map((company) => company.sector)).size;

export default function PortfolioPage() {
  return (
    <main className="relative">
      <JsonLd
        data={[
          webPageSchema({
            path: "/portfolio",
            name: "Portfolio — 94 companies we have backed",
            description:
              "Browse every company Brinc has backed across agrifood, Web3, climate tech, healthcare, AI, smart cities and gaming. Search and filter by sector and stage, with a link to each team.",
          }),
          breadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }]),
          portfolioSchema(),
        ]}
      />

      <SiteNav />

      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Every company we back,{" "}
            <span className="font-serif italic text-brand">linked and listed</span>
          </>
        }
        copy="No logo wall. Each company below carries what it does, the sector it sits in, the stage it reached, and a link straight to the team building it."
        meta={[
          { k: String(companies.length), v: "Companies listed" },
          { k: String(sectors), v: "Sectors represented" },
          { k: String(growth), v: "At growth stage" },
          { k: "36+", v: "Countries founded in" },
        ]}
      />

      <CompanyExplorer />
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
