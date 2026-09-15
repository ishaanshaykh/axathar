"use client";

import { Network, Cloud, Headphones, ShieldCheck, Workflow, Globe2, Video, Shield, ClipboardCheck, PanelsTopLeft } from "lucide-react";
import { useState } from "react";
import { services, serviceCategories, type Service } from "@/data/services";
import { TransitionLink } from "@/components/motion/Transition";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = [Network, Cloud, Headphones, ShieldCheck, Workflow, Globe2, Video, Shield, ClipboardCheck, PanelsTopLeft][services.findIndex(s => s.slug === service.slug)] || Network;
  return (
    <Reveal delay={Math.min(0.35, index * 0.05)}>
      <TransitionLink
        href={`/services/${service.slug}`}
        data-cursor="view"
        className="editorial-card group grid h-full grid-rows-[auto_1fr_auto] overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:p-7"
      >
        <div className="flex items-center justify-between">
          <p className="t-eyebrow text-[var(--color-muted)]">{service.category}</p>
          <span className="flex gap-1.5">
            
            {service.aiNative && <span className="rounded-full bg-[var(--color-lime)] px-2.5 py-1 text-[0.62rem] font-bold text-black">✦ AI</span>}
          </span>
        </div>
        <div className="py-8">
          <div className="service-icon mb-6 flex h-24 items-center justify-between rounded-2xl px-5" aria-hidden="true"><Icon size={34} strokeWidth={1.25} /><span className="t-mono-num text-xs opacity-60">{String(services.findIndex(s => s.slug === service.slug) + 1).padStart(2, "0")}</span></div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">{service.title}</h3>
          <p className="t-body mt-2 text-[var(--color-muted)]">{service.short}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.tags.map((t) => (
              <span key={t} className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs font-medium text-[var(--color-muted)]">{t}</span>
            ))}
          </div>
        </div>
        <p className="flex items-center justify-between border-t border-[var(--color-line)] pt-4 text-sm font-semibold">
          Explore <span className="card-arrow" aria-hidden="true">→→</span>
        </p>
      </TransitionLink>
    </Reveal>
  );
}

export function ServicesIndex({ showFilter = true }: { showFilter?: boolean }) {
  const [filter, setFilter] = useState<string>("All");
  const cats = ["All", ...serviceCategories];
  const list = services.filter((s) => {
    if (filter === "All") return true;
    return s.category === filter;
  });

  return (
    <div>
      {showFilter && (
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter services">
          {cats.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                filter === c ? "border-[var(--color-accent)] bg-[#244b9c] text-white" : "border-[var(--color-line)] bg-transparent hover:border-[var(--color-ink)]"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </div>
    </div>
  );
}
