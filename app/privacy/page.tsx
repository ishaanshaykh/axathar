import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Heads";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy." lead="How Axathar collects, uses and protects information. Placeholder policy — replace with counsel-reviewed copy before launch." />
      <section className="wrap max-w-3xl space-y-6 pb-24">
        {[["What we collect", "Contact details you share (name, email, company, message) and anonymized analytics (pages, device, approximate region)."], ["How we use it", "To respond to inquiries, operate the site, and improve content. We never sell personal data."], ["Cookies", "Essential cookies for function plus optional analytics. Manage preferences in your browser."], ["Contact", "Privacy questions: help@axathar.in."]].map(([t, d]) => (
          <div key={t} className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
            <h2 className="font-display text-xl font-semibold">{t}</h2>
            <p className="t-body mt-2 text-[var(--color-muted)]">{d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
