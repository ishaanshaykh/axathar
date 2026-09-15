"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/Heads";
import { SITE } from "@/lib/site";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const SERVICES = [...services.map(s => s.title), "Help me choose"];
const BUDGETS = ["< $25k", "$25–75k", "$75–200k", "$200k+"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: SERVICES[0], budget: BUDGETS[1], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Tell us briefly what's happening";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s build what’s next." lead="No forms-to-nowhere. Answer a few questions and a senior consultant reviews it personally — usually back within one business day." />
      <section className="wrap grid gap-10 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="grid gap-4">
            <a href={`mailto:${SITE.email}`} className="editorial-card rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
              <p className="t-eyebrow text-[var(--color-muted)]">Email</p>
              <p className="mt-2 font-bold">{SITE.email}</p>
            </a>
            <div className="editorial-card rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
              <p className="t-eyebrow text-[var(--color-muted)]">Phone</p>
              <p className="mt-2 font-bold">{SITE.phone}</p>
            </div>
            <div className="theme-dark rounded-3xl p-6">
              <p className="t-eyebrow text-white/50">Where we are</p>
              {SITE.locations.map((l) => (
                <p key={l.city} className="mt-3 text-sm"><span className="font-bold">✦ {l.city}</span> <span className="text-white/55">{l.label} · {l.detail}</span></p>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-7 md:p-10">
            {!sent ? (
              <form onSubmit={submit} noValidate className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="field grid gap-1"><span className="t-eyebrow text-[var(--color-muted)]">Name *</span><input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />{errors.name && <span className="text-xs font-bold text-red-600">{errors.name}</span>}</label>
                  <label className="field grid gap-1"><span className="t-eyebrow text-[var(--color-muted)]">Company</span><input value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Company" /></label>
                  <label className="field grid gap-1"><span className="t-eyebrow text-[var(--color-muted)]">Email *</span><input value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@company.com" type="email" />{errors.email && <span className="text-xs font-bold text-red-600">{errors.email}</span>}</label>
                  <label className="field grid gap-1"><span className="t-eyebrow text-[var(--color-muted)]">Phone</span><input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 ..." /></label>
                </div>
                <div>
                  <p className="t-eyebrow text-[var(--color-muted)]">Service</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SERVICES.map((s) => (
                      <button type="button" key={s} onClick={() => set("service", s)} className={cn("rounded-full border px-4 py-2 text-sm font-semibold", form.service === s ? "border-[var(--color-accent)] bg-[#244b9c] text-white" : "border-[var(--color-line)]")}>{s}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="t-eyebrow text-[var(--color-muted)]">Budget</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <button type="button" key={b} onClick={() => set("budget", b)} className={cn("rounded-full border px-4 py-2 text-sm font-semibold", form.budget === b ? "border-[var(--color-accent)] bg-[#244b9c] text-white" : "border-[var(--color-line)]")}>{b}</button>
                    ))}
                  </div>
                </div>
                <label className="field grid gap-1"><span className="t-eyebrow text-[var(--color-muted)]">Message *</span><textarea rows={5} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Where does it hurt? What outcome matters?" />{errors.message && <span className="text-xs font-bold text-red-600">{errors.message}</span>}</label>
                <button type="submit" className="btn-fill inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-surface)] px-8 py-4 text-sm font-bold text-white">Send message <span aria-hidden="true">→→</span></button>
                <p className="t-small text-center text-[var(--color-muted)]">Prefer direct? {SITE.email} · {SITE.phone}</p>
              </form>
            ) : (
              <div className="py-10 text-center" role="status">
                <p className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--color-lime)] text-2xl font-bold" aria-hidden="true">✓</p>
                <h2 className="t-h3 mt-6">Message received, {form.name.split(" ")[0] || "friend"}.</h2>
                <p className="t-body mx-auto mt-3 max-w-md text-[var(--color-muted)]">A senior consultant will review your note about “{form.service.toLowerCase()}” and reply within one business day.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold underline">Send another</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
