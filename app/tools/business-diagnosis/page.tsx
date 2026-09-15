"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/sections/Heads";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/Transition";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: "company", q: "Let's start simple — what should we call you?", fields: ["name", "company"] },
  { id: "goal", q: "What outcome matters most right now?", fields: ["goal"] },
  { id: "challenge", q: "Where does it hurt?", fields: ["challenge"] },
  { id: "stack", q: "What's your technology state?", fields: ["stack", "timeline"] },
  { id: "contact", q: "Where do we send the diagnosis?", fields: ["email"] },
];

const GOALS = ["Grow revenue", "Cut operating cost", "Ship faster", "Fix data chaos", "Adopt AI safely"];
const FRICTIONS = ["Manual busywork", "Scattered data", "Slow releases", "Invisible on Google / AI", "Legacy drag", "CRM/ERP mess"];

export default function DiagnosisTool() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Record<string, string>>({ name: "", company: "", goal: GOALS[0], challenge: FRICTIONS[0], stack: "", timeline: "ASAP", email: "" });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const progress = useMemo(() => ((step + 1) / (STEPS.length + 1)) * 100, [step]);
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const next = () => {
    setError("");
    if (STEPS[step].id === "company" && !form.name.trim()) return setError("Tell us your name so we know what to call you.");
    if (STEPS[step].id === "contact" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return setError("Enter a valid work email.");
    if (step < STEPS.length - 1) setStep(step + 1);
    else setDone(true);
  };

  return (
    <>
      <PageHero eyebrow="Free · Business diagnosis" title="Where is technology costing you?" lead="Tell us what's hurting — our diagnosis maps where you're leaking time, money or growth, then exactly what we'd do about it." />
      <section className="wrap pb-24">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)]">
          <div className="flex items-center justify-between border-b border-[var(--color-line)] px-7 py-4">
            <p className="t-eyebrow text-[var(--color-muted)]">Step {Math.min(step + 1, STEPS.length)} / {STEPS.length}</p>
            <p className="t-mono-num text-xs font-bold">{Math.round(progress)}%</p>
          </div>
          <div className="h-1 bg-black/10"><div className="h-full bg-[var(--color-surface)] transition-all duration-500" style={{ width: `${progress}%` }} /></div>

          {!done ? (
            <div key={step} className="p-7 md:p-10" style={{ animation: "ax-step 0.55s cubic-bezier(0.16,1,0.3,1)" }}>
              <h2 className="t-h3">{STEPS[step].q}</h2>
              <div className="mt-7 grid gap-5">
                {STEPS[step].id === "company" && (
                  <>
                    <label className="field grid gap-1"><span className="t-eyebrow text-[var(--color-muted)]">Your name</span><input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Ada Lovelace" autoFocus /></label>
                    <label className="field grid gap-1"><span className="t-eyebrow text-[var(--color-muted)]">Company</span><input value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Analytical Engines Inc." /></label>
                  </>
                )}
                {STEPS[step].id === "goal" && (
                  <div className="flex flex-wrap gap-2">
                    {GOALS.map((g) => (
                      <button key={g} onClick={() => set("goal", g)} className={cn("rounded-full border px-5 py-2.5 text-sm font-semibold transition-all", form.goal === g ? "border-black bg-black text-white" : "border-[var(--color-line)] hover:border-black")}>{g}</button>
                    ))}
                  </div>
                )}
                {STEPS[step].id === "challenge" && (
                  <div className="flex flex-wrap gap-2">
                    {FRICTIONS.map((g) => (
                      <button key={g} onClick={() => set("challenge", g)} className={cn("rounded-full border px-5 py-2.5 text-sm font-semibold transition-all", form.challenge === g ? "border-black bg-black text-white" : "border-[var(--color-line)] hover:border-black")}>{g}</button>
                    ))}
                  </div>
                )}
                {STEPS[step].id === "stack" && (
                  <>
                    <label className="field grid gap-1"><span className="t-eyebrow text-[var(--color-muted)]">Current stack (plain words fine)</span><input value={form.stack} onChange={(e) => set("stack", e.target.value)} placeholder="Spreadsheets + legacy ERP + WordPress" /></label>
                    <div className="flex flex-wrap gap-2">
                      {["ASAP", "This quarter", "Exploring"].map((t) => (
                        <button key={t} onClick={() => set("timeline", t)} className={cn("rounded-full border px-5 py-2.5 text-sm font-semibold", form.timeline === t ? "border-black bg-black text-white" : "border-[var(--color-line)]")}>{t}</button>
                      ))}
                    </div>
                  </>
                )}
                {STEPS[step].id === "contact" && (
                  <label className="field grid gap-1"><span className="t-eyebrow text-[var(--color-muted)]">Work email</span><input value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@company.com" type="email" /></label>
                )}
              </div>
              {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}
              <div className="mt-8 flex items-center justify-between">
                <button disabled={step === 0} onClick={() => setStep(step - 1)} className="text-sm font-semibold text-[var(--color-muted)] disabled:opacity-30">← Back</button>
                <button onClick={next} className="btn-fill inline-flex items-center gap-3 rounded-full bg-[var(--color-surface)] px-8 py-3.5 text-sm font-bold text-white">
                  {step === STEPS.length - 1 ? "Get my diagnosis" : "Continue"} <span aria-hidden="true">→→</span>
                </button>
              </div>
              <p className="t-small mt-6 text-[var(--color-muted)]">183+ frictions diagnosed across our practice · reviewed by a senior human</p>
            </div>
          ) : (
            <div className="p-7 md:p-10" style={{ animation: "ax-step 0.55s cubic-bezier(0.16,1,0.3,1)" }}>
              <p className="inline-block rounded-full bg-[var(--color-lime)] px-3 py-1 text-xs font-bold">✓ DIAGNOSIS READY</p>
              <h2 className="t-h3 mt-4">Thanks {form.name.split(" ")[0] || "there"} — here&apos;s the first read.</h2>
              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl bg-[var(--color-paper-2)] p-5"><p className="t-eyebrow text-[var(--color-muted)]">Primary friction</p><p className="mt-1 font-bold">{form.challenge}</p></div>
                <div className="rounded-2xl bg-[var(--color-paper-2)] p-5"><p className="t-eyebrow text-[var(--color-muted)]">Recommended first move</p><p className="mt-1 font-semibold">A 2-week Diagnose sprint: quantify the cost of “{form.challenge.toLowerCase()}”, then scope the smallest fix tied to “{form.goal.toLowerCase()}”.</p></div>
                <div className="rounded-2xl bg-[var(--color-surface)] p-5 text-white"><p className="t-eyebrow text-white/50">Suggested track</p><p className="mt-1 font-semibold">{form.timeline === "ASAP" ? "Pilot in 4–8 weeks" : "Roadmapped 90-day plan"} · full report sent to {form.email || "your inbox"}</p></div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <TransitionLink href="/contact" className="btn-fill inline-flex items-center gap-3 rounded-full bg-[var(--color-surface)] px-7 py-3.5 text-sm font-bold text-white">Talk to a senior <span aria-hidden="true">→→</span></TransitionLink>
                <button onClick={() => { setDone(false); setStep(0); }} className="rounded-full border border-[var(--color-line)] px-7 py-3.5 text-sm font-semibold">Restart</button>
              </div>
            </div>
          )}
        </div>
        <Reveal className="mx-auto mt-8 max-w-3xl text-center">
          <p className="t-small text-[var(--color-muted)]">No spam. No auto-generated PDF. A senior consultant reviews every diagnosis personally.</p>
        </Reveal>
      </section>
      <style>{`@keyframes ax-step { from { opacity: 0; transform: translateX(32px);} to { opacity: 1; transform: none; } }`}</style>
    </>
  );
}
