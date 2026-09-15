import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/data/caseStudies";
import { Eyebrow, ArrowLink } from "@/components/ui/Controls";
import { TextReveal, Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/Transition";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { SectionHead } from "@/components/sections/Heads";
import { CaseCard } from "@/components/sections/Cases";
import { BigCTA } from "@/components/sections/Social";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  return { title: c ? `${c.title} — Axathar` : "Case study", description: c?.excerpt };
}

export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();
  const idx = caseStudies.findIndex((x) => x.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <section className="wrap pb-10 pt-14">
        <p className="t-small text-[var(--color-muted)]">
          <TransitionLink href="/">Home</TransitionLink> / <TransitionLink href="/case-studies">Case studies</TransitionLink> / {c.industry}
        </p>
        <Eyebrow className="mt-8">{c.industry} · {c.year}</Eyebrow>
        <TextReveal as="h1" text={c.title} className="t-h1 mt-5 max-w-6xl" />
        <Reveal className="mt-6 max-w-2xl"><p className="t-lead text-[var(--color-muted)]">{c.excerpt}</p></Reveal>
        <div className="mt-8 flex flex-wrap gap-2">
          {c.tags.map((t) => <span key={t} className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs font-semibold">{t}</span>)}
        </div>
      </section>

      <section className="wrap pb-16">
        <ImageReveal ratio="aspect-[16/8]">
          <div className="flex h-full flex-col justify-between p-8 text-white md:p-12" style={{ background: "linear-gradient(135deg,#0b0b0c,#2b4eff 65%,#7a5cff 115%)" }}>
            <p className="t-eyebrow text-white/60">Results</p>
            <div className="grid gap-6 md:grid-cols-3">
              {c.results.map((r) => (
                <div key={r.label}><p className="font-display text-4xl font-bold md:text-5xl">{r.value}</p><p className="t-small mt-1 text-white/70">{r.label}</p></div>
              ))}
            </div>
          </div>
        </ImageReveal>
      </section>

      <section className="wrap grid gap-10 pb-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="lg:sticky lg:top-28 grid gap-4">
            {[["Challenge", "#challenge"], ["Approach", "#approach"], ["Solution", "#solution"], ["Results", "#results"]].map(([l, h]) => (
              <a key={h} href={h} className="rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-semibold hover:border-black">{l}</a>
            ))}
          </div>
        </div>
        <div className="grid gap-10 md:col-span-8">
          <div id="challenge" className="scroll-mt-28"><SectionHead eyebrow="01 — Challenge" title="What was broken." /><Reveal className="mt-5"><p className="t-lead text-[var(--color-muted)]">{c.challenge}</p></Reveal></div>
          <div id="approach" className="scroll-mt-28"><SectionHead eyebrow="02 — Approach" title="How we framed it." />
            <ul className="mt-5 grid gap-3">{c.approach.map((a) => <li key={a} className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 font-medium">— {a}</li>)}</ul>
          </div>
          <div id="solution" className="scroll-mt-28"><SectionHead eyebrow="03 — Solution" title="What we shipped." />
            <ul className="mt-5 grid gap-3">{c.solution.map((a) => <li key={a} className="rounded-2xl bg-[var(--color-surface)] p-5 font-medium text-white">✓ {a}</li>)}</ul>
          </div>
          <div id="results" className="scroll-mt-28"><SectionHead eyebrow="04 — Results" title="The numbers after." />
            <div className="mt-5 grid gap-px overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3">
              {c.results.map((r) => <div key={r.label} className="bg-[var(--color-surface)] p-6"><p className="font-display text-3xl font-bold">{r.value}</p><p className="t-small mt-1 text-[var(--color-muted)]">{r.label}</p></div>)}
            </div>
          </div>
          {c.quote && (
            <figure className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
              <p className="text-amber-500 font-bold">★★★★★</p>
              <blockquote className="t-h3 mt-3">“{c.quote.text}”</blockquote>
              <figcaption className="t-small mt-4 text-[var(--color-muted)]">{c.quote.author} · {c.quote.role}</figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="wrap pb-20">
        <SectionHead eyebrow="Next project" title="Keep reading." />
        <div className="mt-8"><CaseCard item={next} /></div>
        <div className="mt-8"><ArrowLink href="/case-studies">← All case studies</ArrowLink></div>
      </section>
      <BigCTA />
    </>
  );
}
