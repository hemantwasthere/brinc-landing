"use client";

import * as React from "react";

import type { Persona } from "@/lib/data";

const paths = [
  { id: "a", d: "M26,14 C31,14 32,37 37,37" },
  { id: "b", d: "M26,70 C31,70 32,47 37,47" },
  { id: "c", d: "M63,37 C68,37 69,14 74,14" },
  { id: "d", d: "M63,47 C68,47 69,70 74,70" },
];

const activeByPersona: Record<Persona, string[]> = {
  investor: ["a", "d"],
  partner: ["b", "d"],
  founder: ["a", "c"],
};

const nodes = [
  {
    id: "investors",
    title: "Investors",
    meta: "Family offices · Syndicates",
    style: { left: "0%", top: "6%", width: "26%" },
    personas: ["investor"] as Persona[],
  },
  {
    id: "partners",
    title: "Corporates & governments",
    meta: "Sovereign funds · Science parks",
    style: { left: "0%", top: "62%", width: "26%" },
    personas: ["partner"] as Persona[],
  },
  {
    id: "founders",
    title: "Founders",
    meta: "Pre-seed · Seed · Series A",
    style: { right: "0%", top: "6%", width: "26%" },
    personas: ["founder"] as Persona[],
  },
  {
    id: "outcomes",
    title: "Returns & pilots",
    meta: "Exits · Deployments · Follow-on",
    style: { right: "0%", top: "62%", width: "26%" },
    personas: ["investor", "partner"] as Persona[],
  },
];

function NodeCard({
  title,
  meta,
  isActive,
  className = "",
  style,
}: {
  title: string;
  meta: string;
  isActive: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`rounded-xl border p-3 transition-all duration-500 ${
        isActive
          ? "border-brand/35 bg-brand-soft shadow-[0_12px_30px_-20px_rgba(255,90,31,0.9)]"
          : "border-line bg-white"
      } ${className}`}
    >
      <p
        className={`text-[11.5px] font-medium leading-tight transition-colors duration-500 sm:text-[12.5px] ${
          isActive ? "text-brand-ink" : "text-ink"
        }`}
      >
        {title}
      </p>
      <p className="mt-1 text-[10px] leading-tight text-muted sm:text-[10.5px]">{meta}</p>
    </div>
  );
}

function Core() {
  return (
    <div className="relative rounded-2xl border border-ink bg-ink p-3 text-center shadow-[0_24px_50px_-28px_rgba(20,19,16,0.9)]">
      <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-2xl border border-brand/40" />
      <p className="text-[13px] font-semibold tracking-[-0.02em] text-white sm:text-[14px]">
        Brinc
      </p>
      <p className="mt-1 text-[9.5px] leading-tight text-white/55 sm:text-[10px]">
        Programs · Diligence · Network
      </p>
      <div className="mt-2 flex justify-center gap-1">
        {["a", "b", "c"].map((dot, index) => (
          <span
            key={dot}
            className="h-1 w-1 animate-float rounded-full bg-brand"
            style={{ animationDelay: `${index * 220}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function Rail({ active }: { active: boolean }) {
  return (
    <div className="flex justify-center py-2">
      <span
        className={`h-6 w-px border-l border-dashed transition-colors duration-500 ${
          active ? "border-brand" : "border-line"
        }`}
      />
    </div>
  );
}

export function CapitalFlow({ persona }: { persona: Persona }) {
  const active = activeByPersona[persona];

  return (
    <>
      <div className="sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          {nodes.slice(0, 2).map((node) => (
            <NodeCard
              key={node.id}
              title={node.title}
              meta={node.meta}
              isActive={node.personas.includes(persona)}
            />
          ))}
        </div>

        <Rail active={active.includes("a") || active.includes("b")} />

        <Core />

        <Rail active={active.includes("c") || active.includes("d")} />

        <div className="grid grid-cols-2 gap-2">
          {nodes.slice(2).map((node) => (
            <NodeCard
              key={node.id}
              title={node.title}
              meta={node.meta}
              isActive={node.personas.includes(persona)}
            />
          ))}
        </div>
      </div>

      <div className="relative hidden aspect-[16/7] w-full sm:block lg:aspect-[1000/320]">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {paths.map((path) => {
            const isActive = active.includes(path.id);

            return (
              <g key={path.id}>
                <path
                  d={path.d}
                  fill="none"
                  stroke={isActive ? "#ffd9c6" : "#e7e3db"}
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                  className="transition-[stroke] duration-500"
                />
                <path
                  d={path.d}
                  fill="none"
                  stroke={isActive ? "#ff5a1f" : "#c9c4b9"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="6 14"
                  vectorEffect="non-scaling-stroke"
                  className="animate-dash transition-[stroke,opacity] duration-500"
                  style={{
                    opacity: isActive ? 1 : 0.45,
                    animationDuration: isActive ? "1.6s" : "4.5s",
                  }}
                />
              </g>
            );
          })}
        </svg>

        {nodes.map((node) => (
          <NodeCard
            key={node.id}
            title={node.title}
            meta={node.meta}
            isActive={node.personas.includes(persona)}
            className="absolute"
            style={node.style}
          />
        ))}

        <div className="absolute left-[37%] top-[30%] w-[26%]">
          <Core />
        </div>
      </div>
    </>
  );
}
