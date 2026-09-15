import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { PageHero, SectionHead } from "@/components/sections/Heads";
import { TransitionLink } from "@/components/motion/Transition";
import { BigCTA } from "@/components/sections/Social";
import { ServiceCard } from "@/components/sections/Services";
export function generateStaticParams() { return services.map(s => ({slug:s.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> { const s=getService((await params).slug); return {title:s?.title || 'Service not found',description:s?.summary}; }
export default async function ServiceDetail({params}:{params:Promise<{slug:string}>}) {
  const s=getService((await params).slug); if(!s) notFound();
  const related=services.filter(r=>s.related.includes(r.slug));
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Service',name:s.title,description:s.summary,provider:{'@type':'Organization',name:'AXATHAR'}})}} />
    <PageHero eyebrow={s.category} title={s.title} lead={s.summary} />
    <section className="wrap pb-20"><div className="mb-10 flex flex-wrap gap-2">{s.tags.map(t=><span key={t} className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs text-[var(--color-accent)]">{t}</span>)}</div>
      <SectionHead eyebrow="Service scope" title="What we can help with." />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{s.capabilities.map((c,i)=><div key={c.title} className="editorial-card rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7"><p className="t-mono-num text-xs text-[var(--color-accent)]">0{i+1}</p><h2 className="font-display mt-6 text-2xl">{c.title}</h2><p className="t-body mt-3 text-[var(--color-muted)]">{c.body}</p></div>)}</div>
    </section>
    <section className="wrap pb-20"><div className="brand-panel rounded-[2rem] border border-[var(--color-line)] p-8 md:p-12"><p className="t-eyebrow text-[var(--color-accent)]">From conversation to delivery</p><h2 className="t-h2 mt-5">A clear path forward.</h2><ol className="mt-10 grid gap-8 md:grid-cols-4">{s.process.map((p,i)=><li key={p.title}><p className="t-mono-num text-xs text-[var(--color-muted)]">0{i+1}</p><h3 className="font-display mt-3 text-xl">{p.title}</h3><p className="t-small mt-3 text-[var(--color-muted)]">{p.body}</p></li>)}</ol></div></section>
    <section className="wrap pb-20"><SectionHead eyebrow="Common questions" title="Before we begin." /><div className="mt-8 grid gap-4">{s.faqs.map(f=><details key={f.q} className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="t-body mt-4 max-w-3xl text-[var(--color-muted)]">{f.a}</p></details>)}</div></section>
    {related.length>0&&<section className="wrap pb-16"><SectionHead eyebrow="Better together" title="Explore related services." /><div className="mt-8 grid gap-5 md:grid-cols-3">{related.map((r,i)=><ServiceCard key={r.slug} service={r} index={i}/>)}</div></section>}
    <BigCTA title={`Let’s talk ${s.title.toLowerCase()}.`} body="Tell us about your requirements and we’ll work through the next steps together." />
    <div className="wrap pb-12"><TransitionLink href="/services" className="text-sm text-[var(--color-accent)]">← All services</TransitionLink></div>
  </>;
}
