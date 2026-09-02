import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Brinc — Shaping the future of private markets";

export default function OpengraphImage() {
  return renderOg({
    eyebrow: "Since 2014",
    title: "Shaping the future of",
    accent: "private markets",
    description:
      "Co-investment for investors, innovation programs for corporates and governments, and acceleration for founders.",
    stats: [
      { k: "260", v: "Companies backed" },
      { k: "$1.69B+", v: "Combined market cap" },
      { k: "75", v: "Programs run" },
      { k: "12", v: "Markets" },
    ],
  });
}
