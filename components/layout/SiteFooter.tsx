import { TransitionLink } from "@/components/motion/Transition";
import { SITE } from "@/lib/site";
import { services, serviceCategories } from "@/data/services";
import { BrandLogo } from "./BrandLogo";
export function SiteFooter() {
  return <footer className="border-t border-[var(--color-line)] bg-[#070a11]">
    <div className="wrap grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
      <div><TransitionLink href="/"><BrandLogo large /></TransitionLink><p className="t-body mt-6 max-w-xs text-[var(--color-muted)]">Your technology partner.<br />Connected. Secure. Without limits.</p><a href={`mailto:${SITE.email}`} className="mt-7 inline-block text-sm text-[var(--color-accent)]">{SITE.email} ↗</a></div>
      {serviceCategories.map(cat=><div key={cat}><p className="t-eyebrow text-[var(--color-muted)]">{cat}</p><ul className="mt-6 space-y-4">{services.filter(s=>s.category===cat).map(s=><li key={s.slug}><TransitionLink href={`/services/${s.slug}`} className="link-line text-sm">{s.title}</TransitionLink></li>)}</ul></div>)}
    </div>
    <div className="wrap flex flex-wrap items-center justify-between gap-5 border-t border-[var(--color-line)] py-7 text-xs text-[var(--color-muted)]"><p>© {new Date().getFullYear()} AXATHAR</p><nav className="flex flex-wrap gap-5" aria-label="Footer">{[['Portfolio','/portfolio'],['About','/about'],['Contact','/contact'],['Privacy','/privacy'],['Terms','/terms'],['Sitemap','/sitemap']].map(([label,href])=><TransitionLink key={href} href={href}>{label}</TransitionLink>)}</nav></div>
  </footer>;
}
