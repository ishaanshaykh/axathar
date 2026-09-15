"use client";

import { useEffect, useState } from "react";
import { services } from "@/data/services";
import { TransitionLink } from "@/components/motion/Transition";
import { BrandLogo } from "./BrandLogo";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>("Services");

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (lenis) {
      if (open) lenis.stop();
      else lenis.start();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open ]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const groups = [
    { label: "Services", href: "/services", items: services.map(s => ({ label: s.title, href: `/services/${s.slug}` })) },
    { label: "Portfolio", href: "/portfolio", items: undefined },
    { label: "About", href: "/about", items: undefined },
    { label: "Contact", href: "/contact", items: undefined },
  ];

  return (
    <div className="fixed inset-0 z-[150] flex flex-col bg-[var(--color-surface)] text-[var(--color-ink)]" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="wrap flex items-center justify-between py-5">
        <BrandLogo />
        <button onClick={onClose} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-xl">
          ✕
        </button>
      </div>
      <nav className="wrap flex-1 overflow-y-auto pb-10" aria-label="Mobile">
        {groups.map((g, gi) => (
          <div key={g.label} className="border-b border-white/12 py-2" style={{ animation: `ax-in 0.6s cubic-bezier(0.16,1,0.3,1) ${gi * 0.06}s both` }}>
            <div className="flex items-center justify-between">
              <TransitionLink href={g.href} onClick={onClose} className="font-display text-3xl font-semibold tracking-tight">
                {g.label}
              </TransitionLink>
              {g.items && (
                <button
                  onClick={() => setExpanded(expanded === g.label ? null : g.label)}
                  aria-expanded={expanded === g.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/25"
                >
                  <span className={cn("transition-transform duration-300", expanded === g.label && "rotate-45")}>+</span>
                </button>
              )}
            </div>
            {g.items && expanded === g.label && (
              <ul className="grid gap-1 py-4">
                {g.items.map((it) => (
                  <li key={it.href + it.label}>
                    <TransitionLink href={it.href} onClick={onClose} className="block py-1.5 text-white/70">
                      {it.label}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <TransitionLink href="/contact" onClick={onClose} className="mt-8 flex items-center justify-center gap-3 rounded-full bg-[var(--color-lime)] py-4 font-semibold text-black">
          Message us <span aria-hidden="true">→→</span>
        </TransitionLink>
        <p className="mt-6 text-center text-sm text-white/50">help@axathar.in</p>
      </nav>
      <style>{`@keyframes ax-in { from { opacity: 0; transform: translateY(24px);} to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}
