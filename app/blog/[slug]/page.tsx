import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, articles } from "@/data/articles";
import { Eyebrow } from "@/components/ui/Controls";
import { TextReveal, Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/Transition";
import { SectionHead } from "@/components/sections/Heads";
import { BigCTA } from "@/components/sections/Social";
import { ArticleCard } from "@/components/sections/Articles";
import { ReadingProgress } from "@/components/sections/ReadingProgress";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  return { title: a ? `${a.title} — Axathar` : "Article", description: a?.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const related = articles.filter((x) => x.slug !== slug && x.category === a.category).slice(0, 2);
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.excerpt, author: { "@type": "Organization", name: "AXATHAR" } };
  return (
    <>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="wrap max-w-4xl pb-10 pt-14">
        <p className="t-small text-[var(--color-muted)]"><TransitionLink href="/">Home</TransitionLink> / <TransitionLink href="/blog">Blog</TransitionLink> / {a.category}</p>
        <Eyebrow className="mt-8">{a.category} · {a.readTime}</Eyebrow>
        <TextReveal as="h1" text={a.title} className="t-h1 mt-5" />
        <Reveal className="mt-6"><p className="t-lead text-[var(--color-muted)]">{a.excerpt}</p></Reveal>
        <p className="t-small mt-6 text-[var(--color-muted)]">Axathar · {a.date}</p>
      </article>
      <div className="wrap max-w-4xl pb-20">
        <div className="overflow-hidden rounded-[2rem] p-10 text-white md:p-14" style={{ background: "linear-gradient(135deg,#0b0b0c,#2b4eff 70%,#00d1ff 120%)" }}>
          <p className="t-eyebrow text-white/60">Key takeaway</p>
          <p className="t-h3 mt-4">{a.quote ?? a.excerpt}</p>
        </div>
        <div className="prose-ax mt-10 grid gap-6">
          {a.body.map((p, i) => (
            <Reveal key={i}>
              <p className={i === 0 ? "t-lead" : "t-body text-[var(--color-ink)]/85"}>{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
          <p className="font-display text-xl font-semibold">Want the short version for your business?</p>
          <p className="t-small mt-2 text-[var(--color-muted)]">Tell us your situation — a senior consultant replies within one business day.</p>
          <TransitionLink href="/contact" className="btn-fill mt-5 inline-flex items-center gap-3 rounded-full bg-[var(--color-surface)] px-7 py-3.5 text-sm font-bold text-white">Talk to us <span aria-hidden="true">→→</span></TransitionLink>
        </div>
      </div>
      <section className="wrap pb-20">
        <SectionHead eyebrow="Related" title="Keep reading." link={{ label: "All articles", href: "/blog" }} />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {related.map((r) => <ArticleCard key={r.slug} slug={r.slug} />)}
        </div>
      </section>
      <BigCTA />
    </>
  );
}
