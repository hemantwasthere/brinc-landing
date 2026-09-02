import { companies } from "@/lib/companies";
import { caseStudies, faqs, programs, site } from "@/lib/data";
import { markets } from "@/lib/world-map";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://brinc-landing.vercel.app"
).replace(/\/$/, "");

export const seo = {
  name: "Brinc",
  legalName: "Brinc Limited",
  tagline: "Shaping the future of private markets",
  description:
    "Brinc is a global venture accelerator connecting capital, corporates and founders. Deal-by-deal co-investment for investors, innovation programs for corporates and governments, and acceleration for founders across 12 markets.",
  locale: "en_US",
  founded: "2014",
  keywords: [
    "venture accelerator",
    "startup accelerator",
    "corporate innovation programs",
    "co-investment",
    "pre-seed and seed investment",
    "climate tech investors",
    "agrifood accelerator",
    "Web3 accelerator",
    "Hong Kong venture capital",
    "MENA startup programs",
    "Brinc portfolio",
  ],
};

export function absolute(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absolute("/#organization"),
    name: seo.name,
    legalName: seo.legalName,
    alternateName: "Brinc.io",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absolute("/icon"),
      width: 512,
      height: 512,
    },
    description: seo.description,
    foundingDate: seo.founded,
    email: site.email,
    sameAs: [site.linkedin, site.x, site.instagram, site.youtube],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hong Kong",
      addressCountry: "HK",
    },
    areaServed: markets.map((market) => ({
      "@type": "Place",
      name: market.city,
    })),
    knowsAbout: [
      "Venture capital",
      "Startup acceleration",
      "Corporate innovation",
      "Climate technology",
      "Agrifood technology",
      "Web3 and blockchain",
      "Artificial intelligence",
    ],
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 200 },
    slogan: seo.tagline,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absolute("/#website"),
    url: siteUrl,
    name: seo.name,
    description: seo.description,
    inLanguage: "en",
    publisher: { "@id": absolute("/#organization") },
  };
}

export function webPageSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absolute(`${path}#webpage`),
    url: absolute(path),
    name,
    description,
    isPartOf: { "@id": absolute("/#website") },
    about: { "@id": absolute("/#organization") },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function portfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Brinc portfolio companies",
    description: `${companies.length} companies backed by Brinc across agrifood, Web3, climate tech, healthcare, AI, smart cities and gaming.`,
    numberOfItems: companies.length,
    itemListElement: companies.map((company, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: company.name,
        url: company.url,
        description: company.blurb,
        ...(company.logo ? { logo: absolute(company.logo) } : {}),
        ...(company.linkedin || company.x
          ? { sameAs: [company.linkedin, company.x].filter(Boolean) }
          : {}),
      },
    })),
  };
}

export function programsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Brinc accelerator programs",
    numberOfItems: programs.length,
    itemListElement: programs.map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: program.name,
        description: program.copy,
        url: program.href,
        provider: { "@id": absolute("/#organization") },
      },
    })),
  };
}

export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Brinc innovation services for corporates and governments",
    numberOfItems: caseStudies.reduce((total, group) => total + group.items.length, 0),
    itemListElement: caseStudies
      .flatMap((group) => group.items)
      .map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: `${item.name} — ${item.kind}`,
          serviceType: item.kind,
          provider: { "@id": absolute("/#organization") },
        },
      })),
  };
}
