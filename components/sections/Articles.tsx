import { articles } from "@/data/articles";
import { TransitionLink } from "@/components/motion/Transition";
import { Reveal } from "@/components/motion/Reveal";

export function ArticleCard({ slug }: { slug: string }) {
  const a = articles.find((x) => x.slug === slug);
  if (!a) return null;
  return (
    <Reveal>
      <TransitionLink href={`/blog/${a.slug}`} data-cursor="view" className="group block overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="aspect-[16/9] bg-[linear-gradient(135deg,#0b0b0c,#2b4eff_70%,#954bff_130%)] p-6 text-white">
          <p className="text-xs font-bold tracking-[0.16em] opacity-70">{a.category.toUpperCase()}</p>
          <p className="font-display mt-8 text-xl font-semibold leading-snug">{a.title}</p>
        </div>
        <div className="p-6">
          <p className="t-small text-[var(--color-muted)]">{a.excerpt}</p>
          <p className="mt-4 text-xs font-semibold text-[var(--color-muted)]">{a.date} · {a.readTime}</p>
        </div>
      </TransitionLink>
    </Reveal>
  );
}
