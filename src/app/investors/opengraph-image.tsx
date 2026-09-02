import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Brinc for investors — co-invest in private markets";

export default function InvestorsOpengraphImage() {
  return renderOg({
    eyebrow: "For investors",
    title: "Own the future.",
    accent: "Before it goes public.",
    description:
      "Deal-by-deal co-investment alongside the operators who ran the program.",
    stats: [
      { k: "395", v: "Investments made" },
      { k: "$1.69B+", v: "Combined market cap" },
      { k: "$2.35M", v: "Average first raise" },
      { k: "Pre-seed → A", v: "Stage focus" },
    ],
  });
}
