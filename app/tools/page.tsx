import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/sections/Heads";
import { TransitionLink } from "@/components/motion/Transition";
import { Reveal } from "@/components/motion/Reveal";
import { BigCTA } from "@/components/sections/Social";

export const metadata: Metadata = { title: "Tools — Diagnose before you spend", description: "Interactive Axathar tools: business diagnosis, AI visibility check, SEO health scan." };

const tools = [
  { t: "Business Diagnosis", d: "Where tech is costing your business — a senior human diagnosis. Name the friction, get the mapped fix.", h: "/tools/business-diagnosis", tag: "✦ FLAGSHIP" },
  { t: "AI Visibility Check", d: "Do ChatGPT, Perplexity and Google AI Overviews cite your brand? Find out where you stand.", h: "/tools", tag: "✦ AI" },
  { t: "SEO Health Scan", d: "Instant PageSpeed + technical SEO health scan with a prioritized fix list.", h: "/tools", tag: "FREE" },
];

export default function ToolsPage() {
  return (
    <>
      <PageHero eyebrow="Tools" title="Diagnose before you spend." lead="Free, interactive starting points. Answer a few questions — get a senior-grade read on where you stand and what to do next." />
      <section className="wrap grid gap-4 pb-20 md:grid-cols-3">
        {tools.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.08}>
            <TransitionLink href={c.h} data-cursor="view" className="editorial-card flex h-full flex-col justify-between rounded-[1.75rem] bg-[var(--color-surface)] p-8 text-white">
              <div>
                <p className="inline-block rounded-full bg-[var(--color-lime)] px-3 py-1 text-[0.68rem] font-bold text-black">{c.tag}</p>
                <p className="font-display mt-5 text-3xl font-semibold">{c.t}</p>
                <p className="t-body mt-3 text-white/60">{c.d}</p>
              </div>
              <p className="mt-8 text-sm font-bold">Open tool <span className="card-arrow inline-block" aria-hidden="true">→→</span></p>
            </TransitionLink>
          </Reveal>
        ))}
      </section>
      <section className="wrap pb-20">
        <SectionHead eyebrow="How it works" title="Three steps. Zero fluff." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[["Answer", "A focused 2-minute flow — company, goal, friction, stack."], ["Get mapped", "We score the leak and show what we'd do about it."], ["Talk senior", "A consultant reviews personally — no forms-to-nowhere."]].map(([t, d], i) => (
            <div key={t} className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
              <p className="t-mono-num text-xs font-bold">0{i + 1}</p>
              <p className="font-display mt-2 text-xl font-semibold">{t}</p>
              <p className="t-small mt-2 text-[var(--color-muted)]">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <BigCTA />
    </>
  );
}
