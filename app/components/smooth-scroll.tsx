"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

function AnchorScroll() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest<HTMLAnchorElement>('a[href*="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const hash = href.startsWith("#") ? href : href.includes("#") ? `#${href.split("#")[1]}` : "";
      if (!hash || hash.length < 2) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);
  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true, touchMultiplier: 1.6 }}>
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}
