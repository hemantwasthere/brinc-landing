import * as React from "react";

const ink = "#141310";

function Plus({ x, y, size = 5, opacity = 0.14 }: { x: number; y: number; size?: number; opacity?: number }) {
  return (
    <path
      d={`M${x - size},${y} H${x + size} M${x},${y - size} V${y + size}`}
      stroke={ink}
      strokeWidth="1"
      strokeLinecap="round"
      opacity={opacity}
    />
  );
}

function Arrow({ x, y, angle }: { x: number; y: number; angle: number }) {
  return (
    <path
      d="M-7,-5 L0,0 L-7,5"
      fill="none"
      stroke="#ff5a1f"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.32"
      transform={`translate(${x} ${y}) rotate(${angle})`}
    />
  );
}

export function HeroBackdrop() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <g stroke={ink} fill="none" strokeWidth="1">
        <path d="M-60,286 C 250,318 372,516 640,606" opacity="0.09" />
        <path d="M1500,286 C 1190,318 1068,516 800,606" opacity="0.09" />
        <path d="M-60,742 C 420,660 1020,660 1500,742" opacity="0.07" />
        <path d="M-60,140 C 380,196 1060,196 1500,140" opacity="0.05" />
      </g>

      <g fill="none" strokeWidth="1" strokeDasharray="2 9" strokeLinecap="round">
        <path
          d="M120,668 A 900,900 0 0 1 1320,668"
          stroke="#ff5a1f"
          opacity="0.18"
          className="animate-dash"
          style={{ animationDuration: "38s" }}
        />
        <path d="M300,668 A 700,700 0 0 1 1140,668" stroke={ink} opacity="0.09" />
      </g>

      <Arrow x={640} y={606} angle={22} />
      <Arrow x={800} y={606} angle={158} />

      <g>
        <Plus x={170} y={206} />
        <Plus x={1270} y={206} />
        <Plus x={104} y={528} opacity={0.1} />
        <Plus x={1336} y={528} opacity={0.1} />
        <Plus x={720} y={112} opacity={0.1} />
      </g>

      <g fill="#ff5a1f" opacity="0.3">
        <circle cx="120" cy="668" r="2.5" />
        <circle cx="1320" cy="668" r="2.5" />
      </g>

      <g stroke={ink} strokeWidth="1" opacity="0.05">
        <path d="M176,0 V900" />
        <path d="M1264,0 V900" />
      </g>
    </svg>
  );
}

export function SectionBackdrop({ variant = "a" }: { variant?: "a" | "b" | "c" }) {
  if (variant === "b") {
    return (
      <svg
        viewBox="0 0 1440 720"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g stroke={ink} fill="none" strokeWidth="1">
          <path d="M-40,86 C 360,26 1080,146 1480,76" opacity="0.06" />
          <path d="M-40,648 C 400,712 1040,584 1480,664" opacity="0.05" />
        </g>

        <path
          d="M74,140 V560"
          stroke="#ff5a1f"
          strokeWidth="1"
          strokeDasharray="2 10"
          opacity="0.22"
          className="animate-dash"
          style={{ animationDuration: "40s" }}
        />
        <Arrow x={74} y={566} angle={90} />

        <path d="M1366,140 V560" stroke={ink} strokeWidth="1" opacity="0.07" />
        <Plus x={74} y={104} opacity={0.12} />
        <Plus x={1366} y={104} opacity={0.1} />
      </svg>
    );
  }

  if (variant === "c") {
    return (
      <svg
        viewBox="0 0 1440 720"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g stroke={ink} fill="none" strokeWidth="1" opacity="0.05">
          <path d="M-120,760 L340,-40" />
          <path d="M-10,760 L450,-40" />
          <path d="M1560,760 L1100,-40" />
          <path d="M1450,760 L990,-40" />
        </g>

        <Arrow x={1330} y={200} angle={118} />
        <Plus x={96} y={196} opacity={0.12} />
        <Plus x={1348} y={548} opacity={0.1} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1440 720"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <g stroke={ink} fill="none" strokeWidth="1">
        <path d="M-60,120 C 40,300 90,470 60,700" opacity="0.08" />
        <path d="M1500,120 C 1400,300 1350,470 1380,700" opacity="0.08" />
        <path d="M-40,60 C 380,128 1060,128 1480,60" opacity="0.045" />
      </g>

      <path
        d="M108,236 C 128,352 126,452 96,556"
        fill="none"
        stroke="#ff5a1f"
        strokeWidth="1"
        strokeDasharray="2 10"
        opacity="0.22"
        className="animate-dash"
        style={{ animationDuration: "44s" }}
      />
      <Arrow x={96} y={562} angle={102} />

      <Plus x={1344} y={252} opacity={0.12} />
      <Plus x={110} y={172} opacity={0.1} />
    </svg>
  );
}
