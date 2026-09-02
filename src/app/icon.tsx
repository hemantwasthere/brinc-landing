import { iconSize, ogContentType, renderMark } from "@/lib/og";

export const size = iconSize;
export const contentType = ogContentType;

export default function Icon() {
  return renderMark(size.width);
}
