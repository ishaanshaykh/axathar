"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsapSetup, ScrollTrigger } from "@/lib/gsap";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const gsap = gsapSetup();
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__lenis = undefined;
    };
  }, []);
  return null;
}

export function scrollToTarget(selector: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenis = (window as any).__lenis as { scrollTo: (t: string, o?: object) => void } | undefined;
  if (lenis) lenis.scrollTo(selector, { offset: -80, duration: 1.4 });
  else document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
}
