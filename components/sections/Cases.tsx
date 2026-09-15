"use client";

import { caseStudies, industries, type CaseStudy } from "@/data/caseStudies";
import { TransitionLink } from "@/components/motion/Transition";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { useState } from "react";
import { cn } from "@/lib/utils";

const GRADS = [
  "linear-gradient(135deg,#0b0b0c,#2b4eff 70%,#7a5cff 110%)",
  "linear-gradient(135deg,#0b0b0c,#00a37e 70%,#954bff 130%)",
  "linear-gradient(135deg,#131315,#ff6b2c 75%,#ffb224 120%)",
  "linear-gradient(135deg,#0b0b0c,#2b4eff 60%,#00d1ff 120%)",
];

export function CaseCard({ item, index = 0, large = false }: { item: CaseStudy; index?: number; large?: boolean }) {
  return (
    <Reveal delay={Math.min(0.3, index * 0.06)}>
      <TransitionLink
        href={`/case-studies/${item.slug}`}
        data-cursor="view"
        className="group block overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)]"
      >
        <ImageReveal ratio={large ? "aspect-[16/8]" : "aspect-[16/9]"}>
          <div className="flex h-full flex-col justify-between p-6 text-white md:p-8" style={{ background: GRADS[index % GRADS.length] }}>
            <div className="flex items-center justify-between text-xs font-semibold tracking-[0.14em] opacity-80">
              <span>{item.industry.toUpperCase()} · {item.year}</span>
              <span className="rounded-full border border-white/40 px-3 py-1">FEATURED</span>
            </div>
            <p className="font-display max-w-3xl text-2xl font-semibold leading-tight tracking-tight md:text-4xl">{item.title}</p>
          </div>
        </ImageReveal>
        <div className="grid gap-4 p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {item.metrics.map((m) => (
              <p key={m.label} className="text-sm"><span className="font-display text-lg font-bold">{m.value}</span> <span className="text-[var(--color-muted)]">{m.label}</span></p>
            ))}
          </div>
          <p className="text-sm font-semibold">Read case study <span className="card-arrow inline-block" aria-hidden="true">→→</span></p>
        </div>
      </TransitionLink>
    </Reveal>
  );
}

export function CaseIndex() {
  const [industry, setIndustry] = useState("All");
  const list = caseStudies.filter((c) => industry === "All" || c.industrySlug === industry);
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["All", ...industries.map((i) => i.label)].map((label) => {
          const slug = label === "All" ? "All" : industries.find((i) => i.label === label)?.slug ?? label;
          const active = industry === slug || (label === "All" && industry === "All");
          return (
            <button
              key={label}
              onClick={() => setIndustry(slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                active ? "border-[var(--color-ink)] bg-[var(--color-surface)] text-white" : "border-[var(--color-line)] hover:border-[var(--color-ink)]"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {list.map((c, i) => (
          <CaseCard key={c.slug} item={c} index={i} />
        ))}
      </div>
      {list.length === 0 && <p className="t-body mt-8 text-[var(--color-muted)]">No cases in this sector yet — tell us about yours.</p>}
    </div>
  );
}
