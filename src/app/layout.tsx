import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";

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
  title: "Brinc — Shaping the future of private markets",
  description:
    "Brinc connects capital, corporates and founders. Co-investment for investors, innovation programs for corporates and governments, and acceleration for founders across 36+ countries.",
  openGraph: {
    title: "Brinc — Shaping the future of private markets",
    description:
      "Co-investment, innovation programs and acceleration. 259 companies backed across 36+ countries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serifDisplay.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
