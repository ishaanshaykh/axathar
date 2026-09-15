import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/sections/Heads";
import { Testimonials, BigCTA } from "@/components/sections/Social";
import { Counter } from "@/components/motion/Bits";

export const metadata: Metadata = { title: "Reviews — 5/5 across Google & Trustindex", description: "What the businesses Axathar has evolved say — in their own words." };

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="Don’t take our word for it." lead="5 out of 5, across Google and Trustindex. Here's what the businesses we've evolved have to say — in their own words." />
      <section className="wrap pb-16">
        <div className="theme-dark grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-3">
          {[["5.0", "Average rating"], ["43", "Verified reviews"], ["100%", "Would recommend"]].map(([v, l]) => (
            <div key={l} className="bg-[var(--color-surface)] p-8 text-center">
              <p className="font-display text-5xl font-bold text-[var(--color-lime)]">{v}</p>
              <p className="t-small mt-2 text-white/60">{l}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="wrap pb-20">
        <SectionHead eyebrow="Wall of love" title="In their own words." />
        <div className="mt-10"><Testimonials limit={9} /></div>
      </section>
      <section className="wrap pb-20">
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:p-12">
          <p className="t-eyebrow text-[var(--color-muted)]">Our promise</p>
          <p className="t-h2 mt-4">5 out of 5 — or your <Counter to={100} suffix="%" /> refund focus.</p>
          <p className="t-body mt-4 max-w-2xl text-[var(--color-muted)]">We work with a guarantee: if what we build doesn&apos;t deliver results, we return your money or your advance. The risk is ours, not yours.</p>
        </div>
      </section>
      <BigCTA title="Want to be the next 5-star story?" />
    </>
  );
}
