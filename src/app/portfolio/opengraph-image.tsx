import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Brinc portfolio — 94 companies, linked and listed";

export default function PortfolioOpengraphImage() {
  return renderOg({
    eyebrow: "Portfolio",
    title: "Every company we back,",
    accent: "linked and listed",
    description:
      "Agrifood, Web3, climate tech, healthcare, AI, smart cities and gaming.",
    stats: [
      { k: "94", v: "Companies listed" },
      { k: "11", v: "Sectors" },
      { k: "20", v: "At growth stage" },
      { k: "36+", v: "Countries" },
    ],
  });
}
