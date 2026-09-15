"use client";

import type { ReactNode, MouseEvent } from "react";
import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

function Arrow({ className }: { className?: string }) {
  return (
    <span className={cn("arrow-track", className)} aria-hidden="true">
      <span>→→</span>
    </span>
  );
}

type BtnProps = {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "light" | "ghost" | "lime";
  magnetic?: boolean;
  onClick?: (e: MouseEvent) => void;
};

export function MagneticWrap({ children, className }: { children: ReactNode; className?: string }) {
  const inner = useMagnetic<HTMLDivElement>(10);
  return (
    <div ref={inner} className={cn("inline-block", className)}>
      {children}
    </div>
  );
}

export function Button({ children, className, variant = "dark", magnetic = true, onClick }: BtnProps) {
  const mag = useMagnetic<HTMLSpanElement>(10);
  const styles =
    variant === "dark"
      ? "bg-[var(--color-surface)] text-[var(--color-ink)] border border-[var(--color-ink)]"
      : variant === "lime"
        ? "bg-[var(--color-lime)] text-[var(--color-ink)] border border-[var(--color-lime)]"
        : variant === "light"
          ? "bg-transparent text-[var(--color-ink)] border border-[rgba(255,255,255,0.3)]"
          : "bg-transparent text-[var(--color-ink)] border border-[var(--color-line)]";
  const inner = (
    <span
      ref={magnetic ? mag : undefined}
      onClick={onClick}
      className={cn(
        "btn-fill inline-flex cursor-pointer items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold tracking-tight",
        styles,
        className
      )}
    >
      <span>{children}</span>
      <Arrow />
    </span>
  );
  return magnetic ? <span className="inline-block">{inner}</span> : inner;
}

export function ArrowLink({
  href,
  children,
  className,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 text-sm font-semibold tracking-tight",
        dark ? "text-[var(--color-ink)]" : "text-[var(--color-ink)]",
        className
      )}
    >
      <span className="link-line">{children}</span>
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function Eyebrow({ children, className, light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={cn("t-eyebrow flex items-center gap-3", light ? "text-white/60" : "text-[var(--color-muted)]", className)}>
      <span className={cn("inline-block h-1.5 w-1.5 rounded-full", light ? "bg-[var(--color-lime)]" : "bg-[var(--color-accent)]")} aria-hidden="true" />
      {children}
    </p>
  );
}
