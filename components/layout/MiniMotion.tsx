"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type T = { duration?: number; ease?: string };

export function AnimatePresence({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export const motion = {
  div(props: Record<string, unknown> & { children?: ReactNode; className?: string }) {
    const { initial, animate, transition, children, ...rest } = props as {
      initial?: Record<string, unknown>;
      animate?: Record<string, unknown>;
      transition?: T;
      children?: ReactNode;
      [k: string]: unknown;
    };
    return <MiniAnimate initial={initial} animate={animate} transition={transition} rest={rest}>{children}</MiniAnimate>;
  },
};

function MiniAnimate({
  children,
  initial,
  animate,
  transition,
  rest,
}: {
  children?: ReactNode;
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  transition?: T;
  rest: Record<string, unknown>;
}) {
  const [style, setStyle] = useState<Record<string, string | number>>(() => toStyle(initial));
  useEffect(() => {
    const t = requestAnimationFrame(() => setStyle(toStyle(animate)));
    return () => cancelAnimationFrame(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const duration = transition?.duration ?? 0.45;
  return (
    <div
      {...(rest as object)}
      style={{ ...(rest.style as object | undefined), ...style, transition: `opacity ${duration}s cubic-bezier(0.16,1,0.3,1), transform ${duration}s cubic-bezier(0.16,1,0.3,1), clip-path ${duration}s cubic-bezier(0.16,1,0.3,1)` }}
    >
      {children}
    </div>
  );
}

function toStyle(o?: Record<string, unknown>): Record<string, string | number> {
  if (!o) return {};
  const s: Record<string, string | number> = {};
  if (o.opacity !== undefined) s.opacity = o.opacity as number;
  if (typeof o.y === "number") s.transform = `translateY(${o.y}px)`;
  if (typeof o.clipPath === "string") s.clipPath = o.clipPath;
  return s;
}
