import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/sections/Heads";
import { articles, articleCategories } from "@/data/articles";
import { TransitionLink } from "@/components/motion/Transition";
import { Reveal } from "@/components/motion/Reveal";
import { BigCTA } from "@/components/sections/Social";

export const metadata: Metadata = { title: "Blog — Notes from the operating table", description: "How Axathar diagnoses businesses, the engineering behind fixes, and what applied AI changes." };

export default function BlogPage() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  return (
    <>
      <PageHero eyebrow="The blog" title="Notes from the operating table." lead="How we diagnose businesses, the engineering behind the fixes, and what applied AI actually changes — for operators and engineers alike." />
      <section className="wrap pb-10">
        <Reveal>
          <TransitionLink href={`/blog/${featured.slug}`} data-cursor="view" className="grid overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] md:grid-cols-2">
            <div className="p-8 text-white md:p-12" style={{ background: "linear-gradient(135deg,#0b0b0c,#2b4eff 70%,#954bff 130%)" }}>
              <p className="text-xs font-bold tracking-[0.16em] opacity-70">FEATURED · {featured.category.toUpperCase()}</p>
              <p className="font-display mt-8 text-3xl font-semibold leading-tight md:text-4xl">{featured.title}</p>
              <p className="mt-6 text-sm opacity-70">{featured.date} · {featured.readTime}</p>
            </div>
            <div className="p-8 md:p-12">
              <p className="t-lead text-[var(--color-muted)]">{featured.excerpt}</p>
              <p className="mt-8 text-sm font-bold">Read article →→</p>
            </div>
          </TransitionLink>
        </Reveal>
      </section>
      <section className="wrap pb-8">
        <div className="flex flex-wrap gap-2">
          {articleCategories.map((c) => (
            <TransitionLink key={c} href={`/blog/category/${c.toLowerCase()}`} className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-semibold hover:border-black">{c}</TransitionLink>
          ))}
        </div>
      </section>
      <section className="wrap pb-20">
        <SectionHead eyebrow="Latest" title={`${articles.length} articles.`} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={Math.min(0.3, i * 0.04)}>
              <TransitionLink href={`/blog/${a.slug}`} className="group block h-full overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)]">
                <div className="aspect-[16/8] p-6 text-white" style={{ background: "linear-gradient(135deg,#131315,#2b4eff 70%,#00d1ff 120%)" }}>
                  <p className="text-[0.7rem] font-bold tracking-[0.16em] opacity-70">{a.category.toUpperCase()} · {a.readTime.toUpperCase()}</p>
                  <p className="font-display mt-8 text-xl font-semibold leading-snug">{a.title}</p>
                </div>
                <div className="p-6">
                  <p className="t-small text-[var(--color-muted)]">{a.excerpt}</p>
                  <p className="mt-4 text-xs font-semibold text-[var(--color-muted)]">{a.date} · Read →→</p>
                </div>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </section>
      <BigCTA />
    </>
  );
}
