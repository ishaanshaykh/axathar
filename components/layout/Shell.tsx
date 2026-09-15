"use client";

import { useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { TransitionProvider } from "@/components/motion/Transition";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Cursor } from "@/components/motion/Cursor";

export function Shell({ children }: { children: ReactNode }) {
  const [mobile, setMobile] = useState(false);
  return (
    <TransitionProvider>
      <SmoothScroll />
      <Cursor />
      <SiteHeader onOpenMobile={() => setMobile(true)} />
      <MobileMenu open={mobile} onClose={() => setMobile(false)} />
      <main id="main-content" className="min-h-[60vh] pt-[var(--header-h)]">
        {children}
      </main>
      <SiteFooter />
    </TransitionProvider>
  );
}
