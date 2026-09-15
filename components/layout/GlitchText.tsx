"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

type Props = {
  text: string;
  className?: string;
  duration?: number;
};

export function GlitchText({ text, className, duration = 550 }: Props) {
  const [display, setDisplay] = useState(text);
  const frame = useRef<number>(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const scramble = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }
    cancelAnimationFrame(frame.current);
    const start = performance.now();
    const perChar = duration / Math.max(text.length, 1);

    const tick = (now: number) => {
      const elapsed = now - start;
      const revealed = Math.floor(elapsed / perChar);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " " || i < revealed) {
          out += ch;
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(out);
      if (revealed < text.length) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    frame.current = requestAnimationFrame(tick);
  }, [text, duration]);

  return (
    <span
      className={["glitch-text", className].filter(Boolean).join(" ")}
      data-text={text}
      onMouseEnter={scramble}
      onFocus={scramble}
      aria-label={text}
    >
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
