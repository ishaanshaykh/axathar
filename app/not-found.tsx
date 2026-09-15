import { TransitionLink } from "@/components/motion/Transition";

export default function NotFound() {
  return (
    <div className="wrap py-28 text-center">
      <p className="t-eyebrow text-[var(--color-muted)]">404</p>
      <h1 className="t-h1 mt-4">Lost in evolution.</h1>
      <p className="t-lead mt-4 text-[var(--color-muted)]">That page doesn&apos;t exist — but your outcome still does.</p>
      <div className="mt-8 flex justify-center gap-3">
        <TransitionLink href="/" className="btn-fill inline-flex items-center gap-3 rounded-full bg-[var(--color-surface)] px-7 py-3.5 text-sm font-bold text-white">Home →→</TransitionLink>
        <TransitionLink href="/contact" className="inline-flex items-center gap-3 rounded-full border border-[var(--color-line)] px-7 py-3.5 text-sm font-semibold">Contact</TransitionLink>
      </div>
    </div>
  );
}
