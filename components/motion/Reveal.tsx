"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { gsapSetup } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Masked line reveal: overflow-hidden lines translateY(110%) -> 0 with expo ease. */
export function Reveal({ children, as: Tag = "div", className, delay = 0, y = 36, once = true }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const gsap = gsapSetup();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%", once },
        }
      );
    });
    return () => ctx.revert();
  }, [delay, y, once]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Tag ref={ref as any} className={className}>{children}</Tag>;
}

/** Splits text into masked lines (by words) and staggers them up. */
export function TextReveal({
  text,
  className,
  as: Tag = "div",
  delay = 0,
  stagger = 0.08,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.querySelectorAll("[data-line-inner]").forEach((n) => {
        (n as HTMLElement).style.transform = "none";
      });
      return;
    }
    const gsap = gsapSetup();
    const ctx = gsap.context(() => {
      const inners = el.querySelectorAll("[data-line-inner]");
      gsap.fromTo(
        inners,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.05,
          delay,
          ease: "expo.out",
          stagger,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, [delay, stagger, text]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="mask-line" style={{ display: "inline-block", verticalAlign: "top", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
          <span data-line-inner aria-hidden={i !== 0}>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
