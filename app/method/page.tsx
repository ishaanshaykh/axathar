import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Heads";
import { MethodStory, MethodPreviewStrip } from "@/components/sections/Method";
import { BigCTA } from "@/components/sections/Social";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "The 5-Phase Method — Discover, Diagnose, Design, Deliver, Evolve",
  description: "Axathar runs every engagement through five phases. How a business doctor works: understand the patient before treating it.",
};

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="The framework"
        title="The 5 Method."
        lead="We run every engagement through five phases — Discover, Diagnose, Design, Deliver, Evolve. It's how a business doctor works: understand the patient before treating it, and stay long after the first prescription."
      />
      <section className="pb-20">
        <MethodStory />
      </section>
      <section className="wrap pb-20">
        <div className="grid gap-4 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:grid-cols-3 md:p-12">
          {[
            { t: "No templates forced", d: "The architecture fits how your team actually works — not the other way around." },
            { t: "Measured, not vibes", d: "Every phase gates on evidence: costed frictions, success metrics, evals." },
            { t: "Partnership, not project", d: "Monitoring, iteration and next opportunities — value compounds." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div>
                <p className="t-mono-num text-xs font-bold text-[var(--color-muted)]">0{i + 1}</p>
                <p className="font-display mt-2 text-xl font-semibold">{c.t}</p>
                <p className="t-small mt-2 text-[var(--color-muted)]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <MethodPreviewStrip />
      <BigCTA title="Ready to start with the diagnosis?" />
    </>
  );
}
