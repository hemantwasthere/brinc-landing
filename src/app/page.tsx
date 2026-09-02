import * as React from "react";

import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { Flywheel } from "@/components/flywheel";
import { Footprint } from "@/components/footprint";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Journey } from "@/components/journey";
import { Marquee } from "@/components/marquee";
import { Metrics } from "@/components/metrics";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { faqSchema, seo, webPageSchema } from "@/lib/seo";

export default function Home() {
  return (
    <main className="relative">
      <JsonLd
        data={[
          webPageSchema({
            path: "/",
            name: `${seo.name} — ${seo.tagline}`,
            description: seo.description,
          }),
          faqSchema(),
        ]}
      />

      <SiteNav />
      <Hero />
      <Marquee />
      <Metrics />
      <Services />
      <Flywheel />
      <Journey />
      <Footprint />
      <PortfolioGrid />
      <Faq />
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
