import * as React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" fill="#141310" />
        <path
          d="M7.6 6.4h4.6c1.9 0 3.1 1 3.1 2.6 0 1.1-.6 1.9-1.6 2.3 1.3.3 2.1 1.3 2.1 2.7 0 1.9-1.4 3.1-3.6 3.1H7.6V6.4Z"
          fill="#ff5a1f"
        />
        <circle cx="17.2" cy="7.6" r="1.5" fill="#fff" />
      </svg>
      <span className="text-[17px] font-semibold tracking-[-0.03em] text-ink">brinc</span>
    </span>
  );
}
