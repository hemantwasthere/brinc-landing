import { appleIconSize, ogContentType, renderMark } from "@/lib/og";

export const size = appleIconSize;
export const contentType = ogContentType;

export default function AppleIcon() {
  return renderMark(size.width);
}
