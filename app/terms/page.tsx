import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Heads";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions." lead="The ground rules for using this site. Placeholder terms — replace with counsel-reviewed copy before launch." />
      <section className="wrap max-w-3xl space-y-6 pb-24">
        {[["Use of content", "All site content is owned by Axathar unless stated. No reproduction without permission."], ["No professional advice", "Articles and tools are general information, not legal, financial or compliance advice."], ["Limitation", "The site is provided as-is. To the extent permitted by law, Axathar limits liability for reliance on general content."]].map(([t, d]) => (
          <div key={t} className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
            <h2 className="font-display text-xl font-semibold">{t}</h2>
            <p className="t-body mt-2 text-[var(--color-muted)]">{d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
