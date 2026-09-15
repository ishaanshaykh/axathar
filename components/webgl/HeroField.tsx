"use client";

import { useEffect, useRef } from "react";

type Point = [number, number, number];
const TAU = Math.PI * 2;
function sphere(lat: number, lon: number): Point {
  return [Math.cos(lat) * Math.sin(lon), -Math.sin(lat), Math.cos(lat) * Math.cos(lon)];
}
const cities = [[19.4, 72.8], [51.5, -0.1], [40.7, -74], [25.2, 55.3], [1.35, 103.8], [-33.9, 151.2], [35.7, 139.7], [37.8, -122.4]].map(([lat, lon]) => sphere(lat * Math.PI / 180, lon * Math.PI / 180));

/** Geographic point cloud with depth shading, atmospheric rim and great-circle traffic. */
export function HeroField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const abort = new AbortController();
    let points: Point[] = [];
    let width = 0, height = 0, raf = 0, last = 0, elapsed = 0;
    let rotation = -1.2, tilt = 0.12, dragging = false, lastX = 0, lastY = 0;
    let visible = true, disposed = false;
    const project = ([x, y, z]: Point): Point => {
      const a = x * Math.cos(rotation) + z * Math.sin(rotation);
      const b = z * Math.cos(rotation) - x * Math.sin(rotation);
      return [a, y * Math.cos(tilt) - b * Math.sin(tilt), b * Math.cos(tilt) + y * Math.sin(tilt)];
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const radius = Math.min(width * 0.365, height * 0.445);
      const cx = width / 2, cy = height / 2;
      const intro = motion.matches ? 1 : Math.min(1, elapsed / 1.6);
      ctx.globalAlpha = 1 - Math.pow(1 - intro, 3);
      const atmosphere = ctx.createRadialGradient(cx, cy, radius * .83, cx, cy, radius * 1.025);
      atmosphere.addColorStop(0, "rgba(210,220,240,0)");
      atmosphere.addColorStop(.77, "rgba(210,220,240,.055)");
      atmosphere.addColorStop(.94, "rgba(210,220,240,.18)");
      atmosphere.addColorStop(1, "rgba(210,220,240,0)");
      ctx.fillStyle = atmosphere;
      ctx.beginPath(); ctx.arc(cx, cy, radius * 1.025, 0, TAU); ctx.fill();
      // Bucket point brightness so the entire cloud needs only a few paint calls.
      const buckets: number[][] = Array.from({ length: 12 }, () => []);
      for (const p of points) {
        const [x, y, z] = project(p);
        const light = z < 0 ? .07 : .25 + .48 * Math.pow(1 - z, 2) + .25 * Math.max(0, -y);
        const bucket = Math.min(11, Math.floor(light * 12));
        buckets[bucket].push(cx + x * radius, cy + y * radius);
      }
      buckets.forEach((bucket, i) => {
        ctx.fillStyle = `rgba(238,240,249,${(i + 1) / 12})`;
        ctx.beginPath();
        const size = Math.max(.48, radius / 330) * (i < 2 ? .7 : 1);
        for (let j = 0; j < bucket.length; j += 2) { ctx.moveTo(bucket[j] + size, bucket[j + 1]); ctx.arc(bucket[j], bucket[j + 1], size, 0, TAU); }
        ctx.fill();
      });
      for (let route = 1; route < cities.length; route++) {
        const a = cities[0], b = cities[route];
        const angle = Math.acos(Math.max(-1, Math.min(1, a.reduce((sum, v, i) => sum + v * b[i], 0))));
        const arc = (t: number): Point => {
          const lift = 1 + Math.sin(t * Math.PI) * (.14 + route * .025);
          const s = Math.sin((1 - t) * angle) / Math.sin(angle), e = Math.sin(t * angle) / Math.sin(angle);
          return project(a.map((v, i) => (v * s + b[i] * e) * lift) as Point);
        };
        ctx.strokeStyle = "rgba(220,227,242,.17)"; ctx.lineWidth = .65; ctx.beginPath();
        let pen = false;
        for (let j = 0; j <= 80; j++) {
          const [x, y, z] = arc(j / 80);
          if (z < 0 && x * x + y * y < 1) { pen = false; continue; }
          if (pen) ctx.lineTo(cx + x * radius, cy + y * radius); else ctx.moveTo(cx + x * radius, cy + y * radius);
          pen = true;
        }
        ctx.stroke();
        const [x, y, z] = arc((elapsed * .11 + route * .137) % 1);
        if (z > 0 || x * x + y * y > 1) {
          ctx.shadowBlur = 8; ctx.shadowColor = "#f00888"; ctx.fillStyle = "#ff4da2";
          ctx.beginPath(); ctx.arc(cx + x * radius, cy + y * radius, 1.4, 0, TAU); ctx.fill(); ctx.shadowBlur = 0;
        }
      }
      ctx.globalAlpha = 1;
    };
    const frame = (now: number) => {
      raf = 0;
      const delta = last ? Math.min((now - last) / 1000, .05) : 0;
      last = now;
      if (!motion.matches) { elapsed += delta; if (!dragging) rotation += delta * .085; }
      draw();
      if (visible && !document.hidden && !motion.matches) raf = requestAnimationFrame(frame);
    };
    const start = () => { if (disposed) return; last = 0; if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame); };
    const resize = () => {
      const rect = canvas.getBoundingClientRect(); width = rect.width; height = rect.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
    };
    const down = (e: PointerEvent) => { dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      rotation += (e.clientX - lastX) * .005;
      tilt = Math.max(-.7, Math.min(.7, tilt + (e.clientY - lastY) * .003));
      lastX = e.clientX; lastY = e.clientY; draw();
    };
    const up = () => { dragging = false; };
    const visibility = () => { if (document.hidden || !visible) { cancelAnimationFrame(raf); raf = 0; } else start(); };
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; visibility(); }); io.observe(canvas);
    canvas.addEventListener("pointerdown", down); canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up); canvas.addEventListener("pointercancel", up);
    document.addEventListener("visibilitychange", visibility); motion.addEventListener("change", start);
    fetch("/data/globe-land.json", { signal: abort.signal }).then(r => { if (!r.ok) throw new Error("Globe data unavailable"); return r.json(); }).then((data: number[]) => {
      if (disposed) return;
      points = Array.from({ length: data.length / 2 }, (_, i) => sphere(data[i * 2], data[i * 2 + 1])); start();
    }).catch(() => { /* The atmospheric shell remains visible if the asset cannot load. */ });
    resize(); start();
    return () => {
      disposed = true; abort.abort(); cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      canvas.removeEventListener("pointerdown", down); canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up); canvas.removeEventListener("pointercancel", up);
      document.removeEventListener("visibilitychange", visibility); motion.removeEventListener("change", start);
    };
  }, []);

  return <div className={className}>
    <canvas ref={ref} className="globe-canvas" aria-label="Rotating globe with illuminated continents and animated international connections. Drag to rotate." role="img" />
    <span className="globe-status"><i /> ONLINE · GLOBAL</span>
    <span className="globe-hint">DRAG TO EXPLORE</span>
  </div>;
}
