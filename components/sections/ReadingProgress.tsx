"use client";

import { useEffect, useRef } from "react";
import { gsapSetup } from "@/lib/gsap";

export function ReadingProgress() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const gsap = gsapSetup();
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.4 } });
    });
    return () => ctx.revert();
  }, []);
  return <div ref={ref} className="fixed inset-x-0 top-0 z-[120] h-[3px] origin-left bg-[var(--color-accent)]" aria-hidden="true" />;
}
