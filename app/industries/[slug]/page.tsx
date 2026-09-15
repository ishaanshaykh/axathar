import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, caseStudies } from "@/data/caseStudies";
import { PageHero, SectionHead } from "@/components/sections/Heads";
import { CaseCard } from "@/components/sections/Cases";
import { BigCTA } from "@/components/sections/Social";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  return { title: ind ? `${ind.label} — Axathar industries` : "Industry" };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();
  const list = caseStudies.filter((c) => c.industrySlug === slug);
  return (
    <>
      <PageHero eyebrow="Industry" title={ind.label} lead={`How Axathar diagnoses, builds and evolves technology for ${ind.label.toLowerCase()} — with measured outcomes, not slideware.`} />
      <section className="wrap pb-20">
        {list.length === 0 ? (
          <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-10">
            <SectionHead eyebrow="Archive" title="No public cases in this sector yet." lead="We have worked across 8 industries — and patterns translate. Tell us about your operation." link={{ label: "Start the diagnosis", href: "/contact" }} />
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {list.map((c, i) => <CaseCard key={c.slug} item={c} index={i} />)}
          </div>
        )}
      </section>
      <BigCTA title={`Operate in ${ind.label.toLowerCase()}?`} body="Tell us where it hurts. We'll tell you what we'd do about it." />
    </>
  );
}
