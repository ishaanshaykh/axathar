"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsapSetup, ScrollTrigger } from "@/lib/gsap";
import { pad3 } from "@/lib/utils";

type Ctx = {
  navigate: (href: string) => void;
  loading: boolean;
};

const TransitionCtx = createContext<Ctx>({ navigate: () => {}, loading: true });
export const useTransition = () => useContext(TransitionCtx);

export function TransitionProvider({ children }: { children: ReactNode }) {
  // Match the server render; browser storage is read only after hydration.
  const [firstLoad, setFirstLoad] = useState(true);
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const busy = useRef(false);

  // Initial loader; repeat visits skip after the server markup has hydrated.
  useEffect(() => {
    if (!firstLoad) return;
    let seen = false;
    try { seen = sessionStorage.getItem("ax-seen") === "1"; } catch { /* Storage may be disabled. */ }
    if (seen) {
      const frame = requestAnimationFrame(() => { setFirstLoad(false); ScrollTrigger.refresh(); });
      return () => cancelAnimationFrame(frame);
    }
    const remember = () => { try { sessionStorage.setItem("ax-seen", "1"); } catch { /* Optional session preference. */ } };
    const gsap = gsapSetup();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: 100,
      duration: reduced ? 0.2 : 1.6,
      ease: "expo.inOut",
      onUpdate: () => setProgress(obj.v),
      onComplete: () => {
        const loader = loaderRef.current;
        if (!loader || reduced) {
          setFirstLoad(false);
          remember();
          return;
        }
        const tl = gsap.timeline({
          onComplete: () => {
            setFirstLoad(false);
            remember();
            ScrollTrigger.refresh();
          },
        });
        tl.to("[data-loader-word] > span", { yPercent: -110, duration: 0.7, ease: "expo.inOut", stagger: 0.06 })
          .to(loader, { clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "expo.inOut" }, "-=0.25");
      },
    });
    return () => {
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // refresh triggers on route change
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => clearTimeout(t);
  }, [pathname]);

  const navigate = useCallback(
    (href: string) => {
      if (busy.current || href === pathname) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href);
        return;
      }
      busy.current = true;
      setLeaving(true);
      const gsap = gsapSetup();
      const panel = panelRef.current;
      if (!panel) {
        router.push(href);
        busy.current = false;
        setLeaving(false);
        return;
      }
      const tl = gsap.timeline({
        onComplete: () => {
          router.push(href);
          window.scrollTo(0, 0);
          gsap.to(panel, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.75,
            ease: "expo.inOut",
            delay: 0.12,
            onComplete: () => {
              gsap.set(panel, { clipPath: "inset(100% 0 0 0)" });
              setLeaving(false);
              busy.current = false;
              ScrollTrigger.refresh();
            },
          });
        },
      });
      tl.set(panel, { clipPath: "inset(100% 0 0 0)" }).to(panel, { clipPath: "inset(0% 0 0 0)", duration: 0.62, ease: "expo.inOut" });
    },
    [pathname, router]
  );

  return (
    <TransitionCtx.Provider value={{ navigate, loading: firstLoad }}>
      {firstLoad && (
        <div
          id="ax-loader"
          ref={loaderRef}
          className="flex flex-col justify-between bg-[var(--color-surface)] text-[var(--color-ink)]"
          style={{ clipPath: "inset(0 0 0% 0)" }}
          aria-hidden={!firstLoad}
        >
          <div className="wrap flex items-center justify-between pt-8">
            <p className="t-eyebrow text-white/50">AXATHAR®</p>
            <p className="t-eyebrow text-white/50">ENGINEERED TECHNOLOGY</p>
          </div>
          <div className="wrap">
            <p data-loader-word className="mask-line t-h1">
              <span>AXATHAR</span>
            </p>
            <p data-loader-word className="mask-line t-h1 text-white/35">
              <span>EVOLVES—01</span>
            </p>
          </div>
          <div className="wrap flex items-end justify-between pb-10">
            <p className="t-small text-white/50">Your technology partner. Engineered.</p>
            <p className="t-mono-num font-display text-7xl font-semibold tabular-nums md:text-8xl">{pad3(progress)}</p>
          </div>
        </div>
      )}
      <div
        id="ax-transition"
        ref={panelRef}
        className="bg-[var(--color-surface)]"
        style={{ clipPath: "inset(100% 0 0 0)" }}
        aria-hidden="true"
      />
      <div style={{ visibility: firstLoad ? "hidden" : "visible" }}>{children}</div>
      <span className="hidden" data-leaving={leaving} />
    </TransitionCtx.Provider>
  );
}

export function TransitionLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { navigate } = useTransition();
  const pathname = usePathname();
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        onClick?.();
        if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")) return;
        if (href === pathname) return;
        e.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}
