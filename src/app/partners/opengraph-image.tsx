import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Brinc for corporates and governments — innovation programs";

export default function PartnersOpengraphImage() {
  return renderOg({
    eyebrow: "For partners",
    title: "Where corporates and governments",
    accent: "meet innovation",
    description:
      "Scouting, accelerator programs and POC execution, delivered end to end.",
    stats: [
      { k: "260", v: "Companies" },
      { k: "$300M+", v: "Capital deployed" },
      { k: "75", v: "Programs run" },
      { k: "7", v: "Countries" },
    ],
  });
}
