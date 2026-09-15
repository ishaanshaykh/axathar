import { reviews } from "@/data/reviews";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee, Counter } from "@/components/motion/Bits";
import { TransitionLink } from "@/components/motion/Transition";
import { SectionHead } from "@/components/sections/Heads";

export function LogoMarquee() {
  const names = ["NORDLINE", "HELIX", "VERTEX", "KAPITAL", "LUMEN", "OSTARA", "FERROSTA", "NOVAPAY", "ATLAS&CO", "BRIGHTLINE", "SOLMAR", "KESTREL"];
  return (
    <Marquee className="border-y border-[var(--color-line)] py-6">
      <div className="flex shrink-0 items-center">
        {names.map((n) => (
          <span key={n} className="mx-8 font-display text-xl font-bold tracking-tight text-[var(--color-ink)]/35">{n}✦</span>
        ))}
      </div>
    </Marquee>
  );
}

export function StatsBand() {
  const stats = [
    { v: 15, s: "+", l: "Years evolving tech" },
    { v: 1000, s: "+", l: "Projects delivered" },
    { v: 17, s: "", l: "Countries served" },
    { v: 8, s: "", l: "Industries" },
  ];
  return (
    <div className="wrap grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.l} className="bg-[var(--color-paper)] p-7">
          <p className="font-display text-4xl font-bold md:text-5xl"><Counter to={s.v} suffix={s.s} /></p>
          <p className="t-small mt-2 text-[var(--color-muted)]">{s.l}</p>
        </div>
      ))}
    </div>
  );
}

export function Testimonials({ limit = 6 }: { limit?: number }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {reviews.slice(0, limit).map((r, i) => (
        <Reveal key={r.name} delay={Math.min(0.3, i * 0.06)}>
          <figure className="flex h-full flex-col justify-between rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
            <div>
              <p className="text-sm font-bold tracking-wide text-amber-500" aria-label="5 out of 5 stars">★★★★★</p>
              <blockquote className="t-body mt-3">“{r.text}”</blockquote>
            </div>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-surface)] text-xs font-bold text-white" aria-hidden="true">{r.initials}</span>
              <span><span className="block text-sm font-bold">{r.name}</span><span className="block text-xs text-[var(--color-muted)]">{r.role}</span></span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function BigCTA({ title = "Ready for what’s next?", body = "Tell us what you need to build, protect or improve. Let’s find the right technology for your business." }: { title?: string; body?: string }) {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="theme-dark relative overflow-hidden rounded-[2rem] p-8 md:p-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle,#2B4EFF,transparent 65%)" }} aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle,#954BFF,transparent 65%)" }} aria-hidden="true" />
        <SectionHead light eyebrow="Let’s connect" title={title} lead={body} />
        <div className="mt-10 flex flex-wrap gap-3">
          <TransitionLink href="/contact" className="btn-fill inline-flex items-center gap-3 rounded-full bg-[var(--color-lime)] px-8 py-4 text-sm font-bold text-black">
            Talk to AXATHAR <span aria-hidden="true">→→</span>
          </TransitionLink>
          <TransitionLink href="/services" className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white">
            Explore services
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
