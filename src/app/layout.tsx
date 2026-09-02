import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { organizationSchema, seo, siteUrl, websiteSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serifDisplay = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${seo.name} — ${seo.tagline}`,
    template: `%s — ${seo.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: seo.name,
  authors: [{ name: seo.name, url: siteUrl }],
  creator: seo.name,
  publisher: seo.name,
  category: "business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: seo.name,
    locale: seo.locale,
    url: siteUrl,
    title: `${seo.name} — ${seo.tagline}`,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@brincvc",
    creator: "@brincvc",
    title: `${seo.name} — ${seo.tagline}`,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ff5a1f",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serifDisplay.variable}`}>
      <head>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
