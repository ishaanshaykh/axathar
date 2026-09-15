"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);
  const label = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const d = dot.current;
    const r = ring.current;
    const l = label.current;
    if (!d || !r) return;
    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let mode: string | null = null;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = (e.target as HTMLElement).closest?.("[data-cursor]") as HTMLElement | null;
      const next = t?.dataset.cursor ?? ((e.target as HTMLElement).closest?.("a,button") ? "link" : null);
      if (next !== mode) {
        mode = next;
        if (mode === "view") {
          r.style.width = "88px";
          r.style.height = "88px";
          r.style.background = "var(--color-lime)";
          r.style.borderColor = "var(--color-lime)";
          if (l) {
            l.textContent = "VIEW";
            l.style.opacity = "1";
          }
        } else if (mode === "link") {
          r.style.width = "44px";
          r.style.height = "44px";
          r.style.background = "transparent";
          r.style.borderColor = "var(--color-ink)";
          if (l) l.style.opacity = "0";
        } else {
          r.style.width = "28px";
          r.style.height = "28px";
          r.style.background = "transparent";
          r.style.borderColor = "rgba(11,11,12,0.35)";
          if (l) l.style.opacity = "0";
        }
      }
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      d.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      r.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id="ax-cursor" className="hidden [@media(pointer:fine)]:block" aria-hidden="true">
      <div ref={ring} className="fixed left-0 top-0 flex items-center justify-center rounded-full border transition-[width,height,background,border-color] duration-300" style={{ width: 28, height: 28, borderColor: "rgba(11,11,12,0.35)" }}>
        <span ref={label} className="text-[10px] font-bold tracking-[0.14em] text-black" style={{ opacity: 0 }}>VIEW</span>
      </div>
      <div ref={dot} className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-black" />
    </div>
  );
}
