"use client";

import * as React from "react";

export function useNavTheme(offset = 68) {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-nav-dark]"));

    if (targets.length === 0 || typeof IntersectionObserver === "undefined") return;

    const active = new Set<Element>();
    let observer: IntersectionObserver | null = null;

    const connect = () => {
      observer?.disconnect();
      active.clear();

      const bottom = Math.max(window.innerHeight - offset - 2, 0);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) active.add(entry.target);
            else active.delete(entry.target);
          });

          setDark(active.size > 0);
        },
        { rootMargin: `-${offset}px 0px -${bottom}px 0px`, threshold: 0 },
      );

      targets.forEach((target) => observer?.observe(target));
    };

    connect();
    window.addEventListener("resize", connect);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", connect);
    };
  }, [offset]);

  return dark;
}
