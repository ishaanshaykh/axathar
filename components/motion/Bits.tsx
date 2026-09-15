"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsapSetup } from "@/lib/gsap";

export function AnimatedLine({ className, light = false }: { className?: string; light?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = "scaleX(1)";
      return;
    }
    const gsap = gsapSetup();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 92%", once: true } }
      );
    });
    return () => ctx.revert();
  }, []);
  return <div ref={ref} className={`rule ${light ? "rule-light" : ""} ${className ?? ""}`} style={{ transform: "scaleX(0)" }} />;
}

export function Marquee({
  children,
  slow = false,
  className,
}: {
  children: ReactNode;
  slow?: boolean;
  className?: string;
}) {
  return (
    <div className={`marquee-paused overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track items-center gap-0" data-slow={slow}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

export function Counter({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${to}${suffix}`;
      return;
    }
    const gsap = gsapSetup();
    const ctx = gsap.context(() => {
      const obj = { v: 0 };
      gsap.to(obj, {
        v: to,
        duration: 1.6,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.v).toLocaleString()}${suffix}`;
        },
      });
    });
    return () => ctx.revert();
  }, [to, suffix]);
  return <span ref={ref} className={className}>0{suffix}</span>;
}
