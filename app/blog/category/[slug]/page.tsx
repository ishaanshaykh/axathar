import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, articleCategories } from "@/data/articles";
import { PageHero } from "@/components/sections/Heads";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/Transition";
import { BigCTA } from "@/components/sections/Social";

export function generateStaticParams() {
  return articleCategories.map((c) => ({ slug: c.toLowerCase() }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = articleCategories.find((c) => c.toLowerCase() === slug);
  if (!cat) notFound();
  const list = articles.filter((a) => a.category.toLowerCase() === slug);
  return (
    <>
      <PageHero eyebrow="Category" title={cat} lead={`${list.length} articles on ${cat.toLowerCase()} — operators and engineers alike.`} />
      <section className="wrap pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((a, i) => (
            <Reveal key={a.slug} delay={Math.min(0.3, i * 0.05)}>
              <TransitionLink href={`/blog/${a.slug}`} className="block h-full rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
                <p className="text-xs font-bold tracking-[0.14em] text-[var(--color-muted)]">{a.date.toUpperCase()} · {a.readTime.toUpperCase()}</p>
                <p className="font-display mt-3 text-2xl font-semibold">{a.title}</p>
                <p className="t-small mt-3 text-[var(--color-muted)]">{a.excerpt}</p>
                <p className="mt-5 text-sm font-bold">Read →→</p>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </section>
      <BigCTA />
    </>
  );
}

export const metadata: Metadata = { title: "Blog category — Axathar" };
