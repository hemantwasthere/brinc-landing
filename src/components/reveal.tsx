"use client";

import * as React from "react";

import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
};

export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-visible={inView}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
