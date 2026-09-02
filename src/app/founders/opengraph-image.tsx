import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Brinc for founders — accelerator programs and funding";

export default function FoundersOpengraphImage() {
  return renderOg({
    eyebrow: "For founders",
    title: "Empowering founders to",
    accent: "build what's next",
    description:
      "Capital, mentorship and market access across 12 of the fastest-growing hubs.",
    stats: [
      { k: "10", v: "Live programs" },
      { k: "$2.35M", v: "Average first raise" },
      { k: "260", v: "Companies backed" },
      { k: "12", v: "Markets" },
    ],
  });
}
