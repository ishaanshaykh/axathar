"use client";

import { useEffect, useRef, useState } from "react";
import { gsapSetup, ScrollTrigger } from "@/lib/gsap";
import { methodSteps } from "@/data/method";
import { Eyebrow } from "@/components/ui/Controls";
import { TextReveal, Reveal } from "@/components/motion/Reveal";
import { scrollToTarget } from "@/components/motion/SmoothScroll";
import { cn } from "@/lib/utils";

const VISUALS = [
  "linear-gradient(140deg,#0b0b0c 10%,#2b4eff 75%,#7a5cff 115%)",
  "linear-gradient(140deg,#101014,#7a5cff 70%,#00d1ff 120%)",
  "linear-gradient(140deg,#0b0b0c,#00a37e 72%,#954bff 125%)",
  "linear-gradient(140deg,#141412,#ff6b2c 70%,#ffb224 120%)",
  "linear-gradient(140deg,#0b0b0c 5%,#1d1d20 45%,#954bff 130%)",
];

/** Sticky method story: left sticky visual + right scrolling steps, ScrollTrigger-driven. */
export function MethodStory() {
  const root = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const gsap = gsapSetup();
    const steps = el.querySelectorAll("[data-step]");
    const ctx = gsap.context(() => {
      steps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 62%",
          end: "bottom 38%",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });
      ScrollTrigger.create({
        trigger: el,
        start: "top 70%",
        end: "bottom 45%",
        scrub: 0.6,
        onUpdate: (self) => setProgress(self.progress),
      });
      // crossfade visuals
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.28, y: 28 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: { trigger: step, start: "top 85%", end: "top 45%", scrub: 0.8 },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="wrap grid gap-10 lg:grid-cols-2">
      {/* sticky visual */}
      <div className="lg:sticky lg:top-24 lg:h-[calc(100svh-7rem)]">
        <div className="sticky-safe top-24 overflow-hidden rounded-3xl border border-[var(--color-line)] lg:sticky lg:top-24">
          <div className="relative aspect-[4/4.4] w-full md:aspect-[4/3] lg:aspect-auto lg:h-[calc(100svh-7rem)]">
            {methodSteps.map((s, i) => (
              <div
                key={s.id}
                className="absolute inset-0 flex flex-col justify-between p-7 text-white transition-all duration-700 md:p-10"
                style={{
                  background: VISUALS[i],
                  opacity: active === i ? 1 : 0,
                  transform: `scale(${active === i ? 1 : 0.96})`,
                  filter: active === i ? "blur(0)" : "blur(6px)",
                  pointerEvents: active === i ? "auto" : "none",
                }}
                aria-hidden={active !== i}
              >
                <div className="flex items-center justify-between">
                  <p className="t-mono-num text-sm tracking-[0.2em] opacity-70">{s.number} / 05</p>
                  <p className="rounded-full border border-white/40 px-3 py-1 text-[0.7rem] font-bold tracking-[0.16em]">✦ {s.title.toUpperCase()}</p>
                </div>
                <div>
                  <p className="font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-none tracking-tight opacity-95">{s.number}</p>
                  <p className="t-h3 mt-3 max-w-md">{s.question}</p>
                  <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full rounded-full bg-[var(--color-lime)] transition-all duration-500" style={{ width: `${((i + 1) / 5) * 100}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* progress nav */}
        <div className="mt-4 hidden items-center gap-2 lg:flex" role="tablist" aria-label="Method stages">
          {methodSteps.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => scrollToTarget(`#method-${s.id}`)}
              className={cn(
                "flex-1 rounded-full border px-3 py-2 text-xs font-bold tracking-wide transition-all duration-300",
                active === i ? "border-[var(--color-ink)] bg-[var(--color-surface)] text-white" : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-ink)]"
              )}
            >
              {s.title}
            </button>
          ))}
        </div>
        <div className="mt-3 hidden h-1 overflow-hidden rounded-full bg-black/10 lg:block" aria-hidden="true">
          <div className="h-full bg-[var(--color-surface)]" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      {/* scrolling steps */}
      <div className="grid gap-6">
        {methodSteps.map((s, i) => (
          <article
            key={s.id}
            id={`method-${s.id}`}
            data-step={s.id}
            className={cn(
              "scroll-mt-28 rounded-3xl border p-7 transition-colors duration-500 md:p-10",
              active === i ? "border-[var(--color-ink)] bg-[var(--color-surface)]" : "border-[var(--color-line)] bg-[var(--color-surface)]"
            )}
            style={{ minHeight: "min(78vh, 640px)" }}
          >
            <div className="flex items-center justify-between">
              <p className="t-mono-num text-sm font-bold tracking-[0.2em] text-[var(--color-muted)]">{s.number}</p>
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.accent }} aria-hidden="true" />
            </div>
            <h3 className="t-h2 mt-4">{s.title}</h3>
            <p className="t-lead mt-4 text-[var(--color-muted)]">{s.body}</p>
            <ul className="mt-6 space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3 text-[0.95rem] font-medium">
                  <span aria-hidden="true" className="mt-0.5 font-bold">—</span> {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-[var(--color-paper-2)] p-5">
              <p className="t-eyebrow text-[var(--color-muted)]">You get</p>
              <p className="mt-2 font-semibold">{s.deliverable}</p>
            </div>
            <p className="t-mono-num mt-6 text-xs text-[var(--color-muted)]">0{i + 1} — 05</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function MethodPreviewStrip() {
  return (
    <section className="theme-dark overflow-hidden py-20 md:py-28">
      <div className="wrap">
        <Eyebrow light>The framework</Eyebrow>
        <TextReveal as="h2" text="The 5-phase method that bends the curve." className="t-h1 mt-6 max-w-5xl" />
        <Reveal className="mt-6 max-w-2xl">
          <p className="t-lead text-white/65">Discover · Diagnose · Design · Deliver · Evolve. Technology accelerates daily — most businesses fall behind. We close that gap.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {methodSteps.map((s, i) => (
            <div key={s.id} className="rounded-2xl border border-white/12 p-5">
              <p className="t-mono-num text-xs text-white/50">{s.number}</p>
              <p className="font-display mt-2 text-xl font-semibold">{s.title}</p>
              <p className="t-small mt-2 text-white/55">{s.question}</p>
              <p className="t-mono-num mt-4 text-[0.7rem] text-white/35">0{i + 1} / 05</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
