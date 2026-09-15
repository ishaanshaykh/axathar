"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { services, serviceCategories } from "@/data/services";
import { TransitionLink } from "@/components/motion/Transition";
import { BrandLogo } from "./BrandLogo";
import { GlitchText } from "./GlitchText";

export function SiteHeader({ onOpenMobile }: { onOpenMobile: () => void }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const container = useRef<HTMLElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return <header ref={container} className="site-header fixed inset-x-0 top-0 z-[100] border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur-xl" onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
    <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
      <TransitionLink href="/" onClick={() => setOpen(false)}><BrandLogo /></TransitionLink>
      <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
        <button className="flex items-center gap-2 text-sm font-medium" aria-expanded={open} aria-controls="services-menu" onClick={() => setOpen(!open)}><GlitchText text="Services" /> <span aria-hidden="true">{open ? '−' : '+'}</span></button>
        <TransitionLink href="/portfolio" onClick={() => setOpen(false)} className={pathname === "/portfolio" ? "text-sm text-[var(--color-accent)]" : "text-sm"}><GlitchText text="Portfolio" /></TransitionLink>
        <TransitionLink href="/about" onClick={() => setOpen(false)} className={pathname === '/about' ? 'text-[var(--color-accent)]' : 'text-sm'}><GlitchText text="About" /></TransitionLink>
        <TransitionLink href="/contact" onClick={() => setOpen(false)} className="text-sm"><GlitchText text="Contact" /></TransitionLink>
      </nav>
      <TransitionLink href="/contact" onClick={() => setOpen(false)} className="brand-button hidden lg:inline-flex">Let’s talk <span aria-hidden="true">↗</span></TransitionLink>
      <button className="grid h-11 w-11 place-items-center text-2xl lg:hidden" onClick={onOpenMobile} aria-label="Open menu">☰</button>
    </div>
    {open && <div id="services-menu" className="hidden border-t border-[var(--color-line)] bg-[var(--color-paper)] lg:block">
      <div className="wrap grid grid-cols-4 gap-8 py-9">
        <div><p className="t-eyebrow text-[var(--color-accent)]">Built around your business</p><p className="t-h3 mt-4">Technology.<br />Connected.</p><TransitionLink href="/services" onClick={() => setOpen(false)} className="mt-6 inline-block text-sm">Explore all services ↗</TransitionLink></div>
        {serviceCategories.map(cat => <div key={cat}><p className="t-eyebrow text-[var(--color-muted)]">{cat}</p><ul className="mt-5 space-y-4">{services.filter(s => s.category === cat).map(s => <li key={s.slug}><TransitionLink href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="link-line text-sm">{s.title}</TransitionLink></li>)}</ul></div>)}
      </div>
    </div>}
  </header>;
}
