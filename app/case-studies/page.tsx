import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Heads";
import { CaseIndex, CaseCard } from "@/components/sections/Cases";
import { caseStudies, industries } from "@/data/caseStudies";
import { TransitionLink } from "@/components/motion/Transition";
import { Reveal } from "@/components/motion/Reveal";
import { BigCTA } from "@/components/sections/Social";

export const metadata: Metadata = {
  title: "Case Studies — Real transformations",
  description: "Real Axathar engagements: what was broken, how we fixed it, and the numbers after. Browse by industry.",
};

export default function CaseStudiesPage() {
  const featured = caseStudies.find((c) => c.featured);
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Real transformations across industries."
        lead="Every project here is a real engagement — what was broken, how we fixed it, and the numbers that came after. Browse by industry, or open any case for the full story."
      />
      {featured && (
        <section className="wrap pb-12">
          <CaseCard item={featured} large />
        </section>
      )}
      <section className="wrap pb-16">
        <Reveal>
          <p className="t-eyebrow text-[var(--color-muted)]">Browse by industry</p>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {industries.map((i) => (
              <TransitionLink key={i.slug} href={`/industries/${i.slug}`} className="editorial-card rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 font-semibold">
                {i.label} <span className="card-arrow inline-block" aria-hidden="true">↗</span>
              </TransitionLink>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="wrap pb-20">
        <CaseIndex />
      </section>
      <BigCTA title="Your industry isn’t listed?" body="We've seen patterns that translate across sectors. Tell us about yours — chances are we've seen the problem before." />
    </>
  );
}
