"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useMotion } from "@/components/ui/MotionProvider";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { shouldAnimate } = useMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!shouldAnimate) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const reqId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [shouldAnimate]);

  return <>{children}</>;
}

