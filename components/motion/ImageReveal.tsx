"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsapSetup } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function ImageReveal({
  children,
  className,
  ratio = "aspect-[16/10]",
}: {
  children: ReactNode;
  className?: string;
  ratio?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.clipPath = "inset(0 0 0 0)";
      const img = el.querySelector("img, video, canvas, div[data-zoom]");
      if (img instanceof HTMLElement) img.style.transform = "scale(1)";
      return;
    }
    const gsap = gsapSetup();
    const ctx = gsap.context(() => {
      const media = el.querySelector("[data-zoom]");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 86%", once: true },
      });
      tl.fromTo(el, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1.1, ease: "expo.inOut" });
      if (media) tl.fromTo(media, { scale: 1.12 }, { scale: 1, duration: 1.4, ease: "expo.out" }, "-=0.7");
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={cn("clip-reveal overflow-hidden", ratio, className)}>
      <div data-zoom className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}

export function Parallax({ children, className, amount = 60 }: { children: ReactNode; className?: string; amount?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const gsap = gsapSetup();
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { y: amount }, { y: -amount, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } });
    });
    return () => ctx.revert();
  }, [amount]);
  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
