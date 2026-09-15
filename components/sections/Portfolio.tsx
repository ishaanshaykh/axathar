"use client";

import Image from "next/image";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { useEffect, useRef, type CSSProperties, type PointerEvent } from "react";
import { portfolio, type PortfolioProject } from "@/data/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/Transition";

function GlassProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const card = useRef<HTMLAnchorElement>(null);
  const motion = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, raf: 0, enabled: false });

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)");
    const state = motion.current;
    const update = () => {
      state.enabled = query.matches;
      if (!query.matches) {
        cancelAnimationFrame(state.raf); state.raf = 0;
        state.x = state.y = state.targetX = state.targetY = 0;
        card.current?.style.removeProperty("transform");
        card.current?.removeAttribute("data-active");
      }
    };
    update(); query.addEventListener("change", update);
    return () => { cancelAnimationFrame(state.raf); query.removeEventListener("change", update); };
  }, []);

  const animate = () => {
    const state = motion.current;
    if (state.raf || !state.enabled) return;
    let previous = 0;
    const tick = (time: number) => {
      const el = card.current;
      if (!el) return;
      const dt = previous ? Math.min(time - previous, 40) : 16;
      previous = time;
      const damping = 1 - Math.exp(-dt / 95);
      state.x += (state.targetX - state.x) * damping;
      state.y += (state.targetY - state.y) * damping;
      el.style.transform = `rotateX(${-state.y * 7}deg) rotateY(${state.x * 9}deg)`;
      el.style.setProperty("--light-x", `${50 + state.x * 45}%`);
      el.style.setProperty("--light-y", `${50 + state.y * 45}%`);
      el.style.setProperty("--sheen-angle", `${115 + state.x * 25}deg`);
      if (Math.abs(state.targetX - state.x) + Math.abs(state.targetY - state.y) > .002) {
        state.raf = requestAnimationFrame(tick);
      } else { state.raf = 0; }
    };
    state.raf = requestAnimationFrame(tick);
  };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!motion.current.enabled || event.pointerType === "touch") return;
    // Measure the untransformed stage to avoid feedback as the card tilts.
    const bounds = event.currentTarget.getBoundingClientRect();
    motion.current.targetX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    motion.current.targetY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    card.current?.setAttribute("data-active", "true");
    animate();
  };
  const reset = () => {
    motion.current.targetX = motion.current.targetY = 0;
    card.current?.removeAttribute("data-active");
    animate();
  };

  return <div className="portfolio-stage" onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
    <a ref={card} className="portfolio-card" href={project.url} target="_blank" rel="noopener noreferrer"
      aria-label={`Visit ${project.name} website (opens in a new tab)`}
      style={{ "--project-rgb": project.accent } as CSSProperties} onBlur={reset}>
      <div className="portfolio-glass" aria-hidden="true" />
      <div className="portfolio-edge" aria-hidden="true" />
      <div className="portfolio-card-top"><span className="portfolio-index">0{index + 1} <span>/</span> {project.category}</span><ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" /></div>
      <div className="portfolio-window">
        <div className="portfolio-browser" aria-hidden="true"><span className="portfolio-browser-dots"><i /><i /><i /></span><span>{new URL(project.url).hostname}</span><span>↗</span></div>
        <div className="portfolio-image"><Image src={project.image} alt={`${project.name} homepage preview`} width={1280} height={720} sizes="(max-width: 767px) 90vw, (max-width: 1560px) 44vw, 680px" /><div className="portfolio-image-shine" aria-hidden="true" /></div>
      </div>
      <div className="portfolio-card-copy"><div className="portfolio-title-row"><h3>{project.name}</h3><span className="portfolio-open" aria-hidden="true"><MoveUpRight size={22} strokeWidth={1.4} /></span></div><p>{project.description}</p><div className="portfolio-card-bottom"><div className="portfolio-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="portfolio-visit">Visit website <span aria-hidden="true">↗</span></span></div></div>
      <div className="portfolio-reflection" aria-hidden="true" />
    </a>
  </div>;
}

export function PortfolioSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  return <section id="portfolio" className={`portfolio-section ${standalone ? "portfolio-standalone" : ""}`} aria-labelledby="portfolio-title">
    <div className="portfolio-aura portfolio-aura-one" aria-hidden="true" /><div className="portfolio-aura portfolio-aura-two" aria-hidden="true" />
    <div className="wrap relative">
      <div className="portfolio-heading"><div><p className="t-eyebrow portfolio-eyebrow"><span /> Selected work <span className="portfolio-count">04</span></p><Heading id="portfolio-title" className="t-h2 mt-5">Different worlds.<br /><span className="brand-gradient">The same attention to detail.</span></Heading></div><div className="portfolio-intro"><p>Four websites. Four distinct identities.<br />A closer look at the experiences we’ve built.</p><span className="portfolio-interaction-hint">MOVE TO EXPLORE · CLICK TO VISIT <ArrowUpRight size={14} aria-hidden="true" /></span></div></div>
      <div className="portfolio-grid">{portfolio.map((project, index) => <Reveal key={project.slug} delay={index % 2 * .1}><GlassProjectCard project={project} index={index} /></Reveal>)}</div>
      <div className="portfolio-outro"><p>Have something in mind? Let’s make it real.</p><TransitionLink href={standalone ? "/contact" : "/portfolio"} className="secondary-button">{standalone ? "Start a conversation" : "Explore our portfolio"} <ArrowUpRight size={17} aria-hidden="true" /></TransitionLink></div>
    </div>
  </section>;
}
