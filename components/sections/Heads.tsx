import type { ReactNode } from "react";
import { Eyebrow, ArrowLink, Button } from "@/components/ui/Controls";
import { Reveal, TextReveal } from "@/components/motion/Reveal";
import { AnimatedLine } from "@/components/motion/Bits";

export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
  cta,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  meta?: ReactNode;
  cta?: { label: string; href: string };
  dark?: boolean;
}) {
  return (
    <section className={`wrap pb-14 pt-14 md:pt-20 ${dark ? "text-white" : ""}`}>
      <Eyebrow light={dark}>{eyebrow}</Eyebrow>
      <TextReveal as="h1" text={title} className="t-h1 mt-6 max-w-6xl" />
      {lead && (
        <Reveal delay={0.25} className="mt-7 max-w-2xl">
          <p className={`t-lead ${dark ? "text-white/70" : "text-[var(--color-muted)]"}`}>{lead}</p>
        </Reveal>
      )}
      {cta && (
        <Reveal delay={0.35} className="mt-8">
          <Button variant={dark ? "light" : "dark"}>{cta.label}</Button>
        </Reveal>
      )}
      {meta && <div className="mt-10">{meta}</div>}
      <AnimatedLine light={dark} className="mt-12 opacity-60" />
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  link,
  light = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  link?: { label: string; href: string };
  light?: boolean;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
        <TextReveal as="h2" text={title} className="t-h2 mt-5" />
      </div>
      <div className="md:col-span-4">
        {lead && <Reveal><p className={`t-body ${light ? "text-white/65" : "text-[var(--color-muted)]"}`}>{lead}</p></Reveal>}
        {link && (
          <Reveal delay={0.1} className="mt-4">
            <ArrowLink href={link.href} dark={light}>{link.label}</ArrowLink>
          </Reveal>
        )}
      </div>
    </div>
  );
}
